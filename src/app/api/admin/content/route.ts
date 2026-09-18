import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getSiteContent, saveSiteContent, isDatabaseConfigured, type SiteContent } from "@/lib/content";

const VALID_SECTIONS: (keyof SiteContent)[] = [
  "business",
  "hero",
  "packages",
  "destinations",
  "gallery",
  "inclusions",
  "pickupPoints",
  "services",
  "promises",
  "testimonials",
];

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const content = await getSiteContent();
  return NextResponse.json({ content, databaseConfigured: isDatabaseConfigured() });
}

export async function PUT(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      {
        error:
          "Database not configured. Add UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN to .env.local, then restart the server.",
      },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const section = body?.section as keyof SiteContent | undefined;
  const data = body?.data;

  if (!section || !VALID_SECTIONS.includes(section) || data === undefined) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  try {
    const current = await getSiteContent();
    const updated: SiteContent = { ...current, [section]: data };
    await saveSiteContent(updated);
    return NextResponse.json({ ok: true, content: updated });
  } catch (err) {
    console.error("Failed to save site content:", err);
    return NextResponse.json({ error: "Could not save changes. Please try again." }, { status: 500 });
  }
}
