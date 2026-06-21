import { NextResponse } from "next/server";

export const runtime = "nodejs";
// Never cache submissions.
export const dynamic = "force-dynamic";

type Payload = Record<string, unknown>;

const REQUIRED_FIELDS = ["full_name", "email", "phone", "service", "budget", "timeline", "message"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "Form storage is not configured." },
      { status: 503 }
    );
  }

  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const missing = REQUIRED_FIELDS.filter((field) => !str(data[field]));
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(str(data.email))) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }

  const row = {
    full_name: str(data.full_name),
    company_brand: str(data.company_brand),
    email: str(data.email),
    phone: str(data.phone),
    service: str(data.service),
    budget: str(data.budget),
    timeline: str(data.timeline),
    message: str(data.message),
    submittedAt: new Date().toISOString()
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
      redirect: "follow"
    });

    // Apps Script returns 2xx even for some errors, so also honor an explicit {ok:false}.
    const text = await res.text();
    let upstreamFailed = !res.ok;
    try {
      const parsed = JSON.parse(text);
      if (parsed && parsed.ok === false) upstreamFailed = true;
    } catch {
      // Non-JSON body (e.g. an HTML auth page) — fall back to the HTTP status.
    }

    if (upstreamFailed) {
      return NextResponse.json({ ok: false, error: "Could not save your request." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not reach the storage service." },
      { status: 502 }
    );
  }
}
