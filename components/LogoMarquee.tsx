"use client";

export default function LogoMarquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="ab-marquee" style={{ flex: 1, minWidth: 240 }}>
      <div className="ab-marquee-track">
        {row.map((c, i) => (
          <span
            key={i}
            style={{
              height: 34,
              minWidth: 96,
              padding: "0 18px",
              borderRadius: 8,
              background: "#F5F2EC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Hanken Grotesk,sans-serif",
              fontWeight: 600,
              fontSize: 13,
              color: "#9aa6b0",
              letterSpacing: "0.5px",
              whiteSpace: "nowrap",
            }}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
