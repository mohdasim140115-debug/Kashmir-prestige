import { NextResponse } from "next/server";
import { checkPassword, setSessionCookie } from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "Admin panel is not configured yet. Add ADMIN_PASSWORD to .env.local." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const password = body?.password;

  if (typeof password !== "string" || !checkPassword(password)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  await setSessionCookie();
  return NextResponse.json({ ok: true });
}
