import { NextResponse } from "next/server";
import { Bucket } from "@upstash/blob";
import { isAdminAuthenticated } from "@/lib/admin-auth";

const MAX_SIZE_BYTES = 8 * 1024 * 1024; // 8MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"];

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.UPSTASH_BLOB_TOKEN) {
    return NextResponse.json(
      {
        error:
          "Image uploads are not configured yet. Add UPSTASH_BLOB_TOKEN to .env.local, then restart the server.",
      },
      { status: 500 }
    );
  }

  const formData = await request.formData().catch(() => null);
  const file = formData?.get("file");

  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: "Only JPG, PNG, WEBP, GIF or AVIF images are allowed." },
      { status: 400 }
    );
  }

  if (file.size > MAX_SIZE_BYTES) {
    return NextResponse.json({ error: "Image must be under 8MB." }, { status: 400 });
  }

  try {
    const bucket = Bucket.fromEnv();
    const path = `site-images/${Date.now()}-${file.name}`;
    const blob = await bucket.put(path, file, { contentType: file.type });

    if (!blob.url) {
      return NextResponse.json(
        { error: "Upload succeeded but no public URL was returned. Check your bucket's access setting." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: blob.url });
  } catch (err) {
    console.error("Upload failed:", err);
    return NextResponse.json({ error: "Upload failed. Please try again." }, { status: 500 });
  }
}
