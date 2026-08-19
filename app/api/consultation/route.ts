import { NextResponse } from "next/server";

type ConsultationPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  preferredTime?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ConsultationPayload;

  try {
    body = (await request.json()) as ConsultationPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !company || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }

  // TODO: connect to email/CRM
  console.info("[consultation]", {
    name,
    email,
    company,
    phone: body.phone?.trim() ?? "",
    preferredTime: body.preferredTime?.trim() ?? "",
    message,
  });

  return NextResponse.json({ ok: true });
}
