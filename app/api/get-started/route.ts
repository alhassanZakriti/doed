import { NextResponse } from "next/server";
import { getStartedServices, type GetStartedService } from "@/lib/forms/services";

type GetStartedPayload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidService(service: string): service is GetStartedService {
  return getStartedServices.includes(service as GetStartedService);
}

export async function POST(request: Request) {
  let body: GetStartedPayload;

  try {
    body = (await request.json()) as GetStartedPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const service = body.service?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !company || !service || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }

  if (!isValidService(service)) {
    return NextResponse.json({ ok: false, error: "Invalid service selection." }, { status: 400 });
  }

  // TODO: connect to email/CRM
  console.info("[get-started]", { name, email, company, service, message });

  return NextResponse.json({ ok: true });
}
