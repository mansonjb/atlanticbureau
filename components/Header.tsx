"use client";
import { useState } from "react";

const nav: [string, string][] = [
  ["/#solutions", "Solutions"],
  ["/#realisations", "Réalisations"],
  ["/#secteurs", "Secteurs"],
  ["/#showroom", "Showroom"],
  ["/contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid #E6EAEE",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", gap: 24 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 11, color: "#0F3D4C" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-ab.png" alt="" style={{ height: 36, width: "auto" }} />
          <span style={{ fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: "-0.3px", color: "#0F3D4C" }}>Atlantic Bureau</span>
        </a>
        <nav data-role="desktop-nav" style={{ display: "flex", gap: 26, marginLeft: "auto", fontWeight: 500, fontSize: 15 }}>
          {nav.map(([h, l]) => (
            <a key={h} href={h} style={{ color: "#1F2933" }}>{l}</a>
          ))}
        </nav>
        <div data-role="header-actions" style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href="tel:0546566680" data-role="header-phone" style={{ fontWeight: 600, fontSize: 15, color: "#0F3D4C", whiteSpace: "nowrap" }}>05 46 56 66 80</a>
          <a href="/contact" className="btn btn-primary" style={{ fontSize: 15, padding: "11px 20px" }}>Devis gratuit <span aria-hidden>→</span></a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            data-role="burger"
            style={{ display: "none", background: "transparent", border: "1px solid #E6EAEE", borderRadius: 10, width: 42, height: 42, cursor: "pointer", color: "#0F3D4C", fontSize: 20, alignItems: "center", justifyContent: "center" }}
          >
            ≡
          </button>
        </div>
      </div>
      <nav hidden={!open} data-role="mobile-nav" style={{ borderTop: "1px solid #E6EAEE", background: "#fff", padding: "10px 24px 18px", flexDirection: "column", gap: 4, fontWeight: 500, display: "flex" }}>
        {nav.map(([h, l], i) => (
          <a key={h} href={h} onClick={() => setOpen(false)} style={{ padding: "11px 0", color: "#1F2933", borderBottom: i < nav.length - 1 ? "1px solid #F5F2EC" : "none" }}>{l}</a>
        ))}
      </nav>
    </header>
  );
}
