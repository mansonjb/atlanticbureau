import type { CSSProperties } from "react";
import type { Metadata } from "next";
import DevisForm from "@/components/DevisForm";

export const metadata: Metadata = {
  title: "Contact & devis gratuit · Atlantic Bureau",
  description:
    "Demandez votre devis gratuit pour l'aménagement de vos bureaux. Réponse sous 48h. Atlantic Bureau, showroom à Aytré, près de La Rochelle.",
};

const wrap: CSSProperties = { maxWidth: 1140, margin: "0 auto", padding: "0 24px" };
const eyebrow: CSSProperties = { fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "#1C7F97" };

const infos: [string, string][] = [
  ["Téléphone", "05 46 56 66 80"],
  ["Email", "contact@atlantic-bureau.com"],
  ["Adresse", "ZAC de Belle-Aire Nord, Rue de Bougainville, 17440 Aytré"],
  ["Horaires", "Lun-Ven · 8h30-12h / 14h-18h"],
];

export default function ContactPage() {
  return (
    <main style={{ fontFamily: "Instrument Sans,system-ui,sans-serif", color: "#1F2933" }}>
      <section style={{ background: "#F5F2EC", padding: "56px 0 72px", position: "relative", overflow: "hidden" }}>
        <div className="ab-blueprint" aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 5, background: "#E8772E" }} />
        <div style={{ ...wrap, position: "relative" }}>
          <span style={eyebrow}>Contact &amp; devis</span>
          <h1 style={{ fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 700, fontSize: "clamp(32px,5vw,54px)", lineHeight: 1.02, letterSpacing: "-1.6px", color: "#0F3D4C", margin: "12px 0 0", maxWidth: 720, textWrap: "balance" }}>
            Parlons de votre projet d&apos;aménagement.
          </h1>
          <p style={{ fontSize: 18, color: "#4a5763", margin: "18px 0 0", maxWidth: 620 }}>
            Décrivez-nous votre besoin en quelques lignes. On revient vers vous sous 48h avec un premier conseil et un devis gratuit, sans engagement.
          </p>

          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, marginTop: 40, alignItems: "start" }}>
            <DevisForm />

            <div>
              <div style={{ display: "grid", gap: 14 }}>
                {infos.map(([k, v]) => (
                  <div key={k} style={{ background: "#fff", border: "1px solid #E1DACD", borderRadius: 14, padding: "16px 18px" }}>
                    <div style={{ fontSize: 11, letterSpacing: "1px", textTransform: "uppercase", color: "#9aa6b0", fontWeight: 700, marginBottom: 5 }}>{k}</div>
                    {k === "Téléphone" ? (
                      <a href="tel:0546566680" style={{ fontSize: 16, fontWeight: 600, color: "#0F3D4C" }}>{v}</a>
                    ) : k === "Email" ? (
                      <a href="mailto:contact@atlantic-bureau.com" style={{ fontSize: 16, fontWeight: 600, color: "#0F3D4C" }}>{v}</a>
                    ) : (
                      <div style={{ fontSize: 15, color: "#1F2933", lineHeight: 1.5 }}>{v}</div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 14, background: "#0F3D4C", color: "#fff", borderRadius: 14, padding: "20px 20px" }}>
                <h3 style={{ fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 700, fontSize: 16, margin: 0 }}>Pourquoi nous ?</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", display: "grid", gap: 9 }}>
                  {["Un interlocuteur unique", "Plans 2D et 3D avant de commander", "Pose par nos équipes, sans sous-traitance", "Devis sous 48h"].map((t) => (
                    <li key={t} style={{ display: "flex", gap: 9, alignItems: "flex-start", fontSize: 14.5, color: "#cfe0e4" }}>
                      <span aria-hidden style={{ color: "#E8772E", fontWeight: 800 }}>✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
