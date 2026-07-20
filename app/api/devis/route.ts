import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Requête invalide." }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const consent = Boolean(data.consent);

  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "Nom et email sont requis." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Adresse email invalide." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ ok: false, error: "Le consentement est requis." }, { status: 400 });
  }

  const company = String(data.company ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const projet = String(data.projet ?? "").trim();
  const message = String(data.message ?? "").trim();

  const lines = [
    `Nom : ${name}`,
    company && `Entreprise : ${company}`,
    `Email : ${email}`,
    phone && `Téléphone : ${phone}`,
    projet && `Projet : ${projet}`,
    "",
    message || "(pas de message)",
  ].filter(Boolean);

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO = process.env.DEVIS_TO ?? "contact@atlantic-bureau.com";
  const FROM = process.env.DEVIS_FROM ?? "Atlantic Bureau <onboarding@resend.dev>";

  if (RESEND_API_KEY) {
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM,
          to: [TO],
          reply_to: email,
          subject: `Nouvelle demande de devis — ${name}${company ? ` (${company})` : ""}`,
          text: lines.join("\n"),
        }),
      });
      if (!r.ok) {
        console.error("[devis] Resend error", r.status, await r.text());
        return NextResponse.json({ ok: false, error: "Envoi impossible pour le moment." }, { status: 502 });
      }
    } catch (e) {
      console.error("[devis] Resend exception", e);
      return NextResponse.json({ ok: false, error: "Envoi impossible pour le moment." }, { status: 502 });
    }
  } else {
    // Fallback dev : pas de clé email configurée, on journalise la demande.
    console.log("\n[devis] Nouvelle demande (RESEND_API_KEY absente) :\n" + lines.join("\n") + "\n");
  }

  return NextResponse.json({ ok: true });
}
