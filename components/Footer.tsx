import type { CSSProperties } from "react";

const wrap: CSSProperties = { maxWidth: 1200, margin: "0 auto", padding: "0 24px" };

const cols: [string, [string, string][]][] = [
  ["Plan du site", [["Solutions", "/#solutions"], ["Réalisations", "/#realisations"], ["Secteurs", "/#secteurs"], ["Showroom", "/#showroom"], ["Contact", "/contact"]]],
  ["Réseaux", [["LinkedIn", "#"], ["Instagram", "#"], ["Facebook", "#"]]],
  ["Légal", [["Mentions légales", "#"], ["Politique de confidentialité", "#"], ["Cookies", "#"]]],
];

export default function Footer() {
  return (
    <footer style={{ background: "#0b2f3b", color: "#c5d3d9", padding: "60px 0 28px" }}>
      <div data-role="footer-grid" style={{ ...wrap, display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#fff" }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: 9, padding: "6px 9px", height: 38 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-ab.png" alt="" style={{ height: 22, width: "auto" }} />
            </span>
            <span style={{ fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 700, fontSize: 18 }}>Atlantic Bureau</span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, margin: "18px 0 0" }}>
            ZAC de Belle-Aire Nord<br />Rue de Bougainville, 17440 Aytré<br />
            <a href="tel:0546566680" style={{ color: "#7ec4d4" }}>05 46 56 66 80</a><br />
            <a href="mailto:contact@atlantic-bureau.com" style={{ color: "#7ec4d4" }}>contact@atlantic-bureau.com</a>
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: "14px 0 0", color: "#8fa4ac" }}>Lun-Ven · 8h30-12h / 14h-18h</p>
        </div>
        {cols.map(([title, links]) => (
          <div key={title}>
            <h4 style={{ fontFamily: "Hanken Grotesk,sans-serif", color: "#fff", fontSize: 14, letterSpacing: "0.5px", textTransform: "uppercase", margin: "0 0 14px" }}>{title}</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9, fontSize: 14 }}>
              {links.map(([l, h]) => (
                <li key={l}><a href={h} style={{ color: "#c5d3d9" }}>{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ ...wrap, margin: "32px auto 0", padding: "20px 24px 0", borderTop: "1px solid #ffffff1a", fontSize: 13, color: "#8fa4ac" }}>© 2026 Atlantic Bureau · Aménagement d&apos;espaces de travail. Tous droits réservés.</div>
    </footer>
  );
}
