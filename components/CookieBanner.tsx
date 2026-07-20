"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem("ab_cookie_choice")) setShow(true);
    } catch {}
  }, []);
  if (!show) return null;
  const choose = (v: string) => {
    try {
      localStorage.setItem("ab_cookie_choice", v);
    } catch {}
    setShow(false);
  };
  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      style={{ position: "fixed", left: 16, right: 16, bottom: 16, zIndex: 80, maxWidth: 720, margin: "0 auto", background: "#fff", border: "1px solid #E6EAEE", borderRadius: 16, boxShadow: "0 18px 50px rgba(15,61,76,0.22)", padding: "20px 22px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}
    >
      <p style={{ margin: 0, flex: 1, minWidth: 240, fontSize: 14, color: "#425466", lineHeight: 1.5 }}>
        Nous utilisons des cookies pour mesurer l'audience et améliorer votre expérience. Aucun traceur n'est activé sans votre accord.
      </p>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => choose("refuse")} style={{ background: "#fff", color: "#1F2933", border: "1.5px solid #1F2933", fontWeight: 600, fontSize: 14, padding: "11px 20px", borderRadius: 999, cursor: "pointer" }}>Refuser</button>
        <button onClick={() => choose("accept")} style={{ background: "#E8772E", color: "#fff", border: "none", fontWeight: 600, fontSize: 14, padding: "11px 20px", borderRadius: 999, cursor: "pointer" }}>Accepter</button>
      </div>
    </div>
  );
}
