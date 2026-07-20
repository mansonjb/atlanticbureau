"use client";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function StatItem({ target, suffix, label, run }: { target: number; suffix: string; label: string; run: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    let start = 0;
    const dur = 1500;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target]);
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ display: "block", width: 24, height: 3, background: "#E8772E", margin: "0 auto 14px", borderRadius: 2 }} />
      <div style={{ fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 800, fontSize: "clamp(32px,5vw,50px)", lineHeight: 1, letterSpacing: "-1.5px" }}>
        {v}
        {suffix}
      </div>
      <div style={{ fontSize: 14, color: "#bcd4dc", marginTop: 10 }}>{label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section style={{ background: "linear-gradient(120deg,#0F3D4C,#134b5d)", color: "#fff", padding: "60px 0" }}>
      <div ref={ref} data-role="stats-grid" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
        {stats.map((s) => (
          <StatItem key={s.label} {...s} run={run} />
        ))}
      </div>
      <p style={{ maxWidth: 1100, margin: "22px auto 0", padding: "0 24px", fontSize: 12, color: "#9fc2ce", fontStyle: "italic" }}>
        Chiffres indicatifs, à ajuster avec vos données réelles.
      </p>
    </section>
  );
}
