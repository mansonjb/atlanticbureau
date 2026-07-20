"use client";
import { useState } from "react";
import { faq } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div data-role="faq-grid" style={{ marginTop: 36, borderTop: "1px solid #E1DACD" }}>
      {faq.map((q, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: "1px solid #E1DACD" }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{ width: "100%", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 16, padding: "22px 4px", fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 700, fontSize: 18, color: "#0F3D4C" }}
            >
              <span style={{ flex: 1 }}>{q.q}</span>
              <span style={{ flex: "none", width: 30, height: 30, borderRadius: "50%", background: isOpen ? "#E8772E" : "#F0E7DB", color: isOpen ? "#fff" : "#E8772E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 400, lineHeight: 1, transition: "transform .2s, background .2s", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
            </button>
            <div style={{ display: isOpen ? "block" : "none", padding: "0 46px 24px 4px" }}>
              <p style={{ fontSize: 15.5, color: "#5b6b78", margin: 0, lineHeight: 1.6 }}>{q.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
