import type { CSSProperties } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import LogoMarquee from "@/components/LogoMarquee";
import Stats from "@/components/Stats";
import Faq from "@/components/Faq";
import CookieBanner from "@/components/CookieBanner";
import Reveal from "@/components/Reveal";
import { solutions, projets, etapes, secteurs, avis, zones, reassurance, clients } from "@/lib/data";

const wrap: CSSProperties = { maxWidth: 1200, margin: "0 auto", padding: "0 24px" };
const eyebrow: CSSProperties = { fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase" };
const h2Base: CSSProperties = { fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 700, fontSize: "clamp(30px,4vw,42px)", lineHeight: 1.08, letterSpacing: "-1px" };
const leadBase: CSSProperties = { fontSize: 17, margin: "16px 0 0" };

function Head({
  kicker,
  title,
  intro,
  tone = "light",
  center = false,
  kickerColor,
}: {
  kicker: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  center?: boolean;
  kickerColor?: string;
}) {
  const dark = tone === "dark";
  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      <span style={{ ...eyebrow, color: kickerColor ?? (dark ? "#7ec4d4" : "#1C7F97") }}>{kicker}</span>
      <h2 style={{ ...h2Base, color: dark ? "#fff" : "#0F3D4C", margin: "12px 0 0" }}>{title}</h2>
      {intro && (
        <p style={{ ...leadBase, color: dark ? "#bcd4dc" : "#425466", maxWidth: center ? 560 : undefined, margin: center ? "14px auto 0" : "16px 0 0" }}>{intro}</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ fontFamily: "Instrument Sans,system-ui,sans-serif", color: "#1F2933", lineHeight: 1.55, overflowX: "hidden" }}>
      <Header />

      {/* ======= HERO ======= */}
      <section id="top" style={{ position: "relative", background: "#F5F2EC", color: "#1F2933", overflow: "hidden" }}>
        <div className="ab-blueprint" aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div aria-hidden data-role="hero-panel" style={{ position: "absolute", top: -180, right: -160, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle,#1c7f9714,transparent 70%)" }} />
        <div aria-hidden style={{ position: "absolute", left: -120, bottom: -120, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,#E8772E12,transparent 70%)" }} />
        <div aria-hidden style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 5, background: "#E8772E" }} />

        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "30px 24px 0" }}>
          <Reveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", border: "1px solid #E6EAEE", borderRadius: 999, padding: "8px 16px", fontSize: 13.5, color: "#425466", fontWeight: 500, boxShadow: "0 4px 14px rgba(15,61,76,0.05)" }}>
              <span aria-hidden style={{ width: 8, height: 8, borderRadius: "50%", background: "#E8772E" }} />
              Aménageur de bureaux à Aytré, au sud de La Rochelle
            </div>
          </Reveal>
        </div>

        <div data-role="hero-grid" style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "34px 24px 0", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 40, alignItems: "end" }}>
          <Reveal style={{ paddingBottom: 64 }}>
            <h1 style={{ fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 700, fontSize: "clamp(42px,6.2vw,78px)", lineHeight: 0.98, letterSpacing: "-2.5px", margin: 0, textWrap: "balance" }}>
              Aménager des espaces qui donnent{" "}
              <span style={{ color: "#E8772E" }}>envie</span>{" "}d&apos;y
              travailler.
            </h1>
            <p style={{ fontSize: 18, color: "#4a5763", maxWidth: 500, margin: "26px 0 0", textWrap: "pretty" }}>
              On vous accompagne à chaque étape : écoute de vos besoins, conseil sur mesure, plans 2D et 3D, mobilier et installation par nos équipes. Un interlocuteur unique, de la première idée au dernier fauteuil.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 32 }}>
              <a href="#contact" className="btn btn-primary" style={{ fontSize: 16, padding: "16px 28px" }}>Demander un devis <span aria-hidden>→</span></a>
              <a href="#realisations" className="btn btn-outline" style={{ fontSize: 16, padding: "16px 28px" }}>Voir nos réalisations</a>
            </div>
          </Reveal>

          <div data-role="hero-media" style={{ position: "relative", paddingBottom: 34 }}>
            <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 16, overflow: "hidden", border: "1px solid #ffffff26", boxShadow: "0 20px 44px rgba(0,0,0,0.2)" }}>
              <Image src="/images/openspace-desks.jpg" alt="Open space équipé de postes de travail et sièges ergonomiques" fill sizes="(max-width:860px) 440px, 480px" style={{ objectFit: "cover" }} priority />
              <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 48%,rgba(11,47,59,0.55))" }} />
              <span style={{ position: "absolute", left: 14, bottom: 14, background: "#F5F2EC", color: "#0F3D4C", fontWeight: 600, fontSize: 12, padding: "8px 12px", borderRadius: 9 }}>Open space · La Rochelle</span>
            </div>
            <div style={{ position: "absolute", left: -22, bottom: -2, width: "53%", aspectRatio: "4/3", borderRadius: 14, overflow: "hidden", border: "3px solid #0F3D4C", boxShadow: "0 14px 30px rgba(0,0,0,0.24)" }}>
              <Image src="/images/meeting-room.jpg" alt="Salle de réunion aménagée sur mesure" fill sizes="240px" style={{ objectFit: "cover" }} />
              <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 40%,rgba(15,61,76,0.6))" }} />
              <span style={{ position: "absolute", left: 12, right: 12, bottom: 12, color: "#fff", fontWeight: 700, fontSize: 13, fontFamily: "Hanken Grotesk,sans-serif", lineHeight: 1.2 }}>Salles de réunion sur mesure</span>
            </div>
          </div>
        </div>

        {/* reassurance strip */}
        <div style={{ position: "relative", marginTop: 36, borderTop: "1px solid #E6EAEE", background: "#fff" }}>
          <div data-role="hero-strip" style={{ ...wrap, maxWidth: 1240, display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
            {reassurance.map((r) => (
              <div key={r.n} style={{ padding: "20px 20px", borderLeft: "1px solid #ececec", display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontFamily: "Space Mono,monospace", fontSize: 12, color: "#E8772E", fontWeight: 700 }}>{r.n}</span>
                <span style={{ fontWeight: 600, fontSize: 15, color: "#1F2933" }}>{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CONFIANCE (marquee) ======= */}
      <section style={{ borderBottom: "1px solid #E6EAEE", background: "#fff" }}>
        <div style={{ ...wrap, padding: "26px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 32px" }}>
          <span style={{ fontWeight: 600, fontSize: 13, letterSpacing: "1px", textTransform: "uppercase", color: "#7A8794", whiteSpace: "nowrap" }}>Ils nous font confiance</span>
          <LogoMarquee items={clients} />
        </div>
      </section>

      {/* ======= APPROCHE ======= */}
      <section id="approche" style={{ background: "#fff", padding: "88px 0" }}>
        <div data-role="approche-grid" style={{ ...wrap, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <Reveal>
            <span style={{ ...eyebrow, color: "#1C7F97" }}>Notre approche</span>
            <h2 style={{ ...h2Base, fontSize: "clamp(28px,3.6vw,40px)", color: "#0F3D4C", margin: "12px 0 0" }}>Une entreprise qui vous conseille, pas seulement un fournisseur.</h2>
            <p style={{ ...leadBase, color: "#425466", margin: "18px 0 0" }}>Avant de parler mobilier, on parle de vous : vos équipes, vos usages, votre budget et votre planning. Notre métier, c&apos;est de traduire tout ça en un espace qui a du sens, et reste à vos côtés jusqu&apos;à ce que la dernière chaise soit en place.</p>
            <p style={{ ...leadBase, color: "#425466", margin: "14px 0 0" }}>Basés à Aytré, près de La Rochelle, nous accompagnons les entreprises, collectivités et professionnels de la région. Un seul interlocuteur suit votre projet du début à la fin : pas d&apos;intermédiaire, pas de sous-traitance sur la pose.</p>
            <a href="#contact" className="btn link-arrow" style={{ marginTop: 24, color: "#E8772E", fontWeight: 600, padding: 0 }}>Parler de votre projet <span className="arw" aria-hidden>→</span></a>
          </Reveal>
          <Reveal delay={80}>
            <div data-role="approche-cards" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
              {[
                ["#E8772E", "À l'écoute", "On commence toujours par comprendre vos besoins réels, sur le terrain."],
                ["#1C7F97", "Sur mesure", "Chaque plan est pensé pour votre espace, jamais copié d'un catalogue."],
                ["#0F3D4C", "Interlocuteur unique", "La même personne vous suit, du premier devis à la livraison."],
                ["#E8772E", "Pose maison", "Nos propres techniciens installent tout, sans sous-traitance."],
              ].map(([c, t, d]) => (
                <div key={t} style={{ background: "#F5F2EC", borderRadius: 14, padding: 22 }}>
                  <span aria-hidden style={{ display: "block", width: 26, height: 26, borderRadius: 7, background: c }} />
                  <h3 style={{ fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 700, fontSize: 17, color: "#0F3D4C", margin: "16px 0 6px" }}>{t}</h3>
                  <p style={{ fontSize: 14, color: "#5b6b78", margin: 0 }}>{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======= SOLUTIONS ======= */}
      <section id="solutions" style={{ background: "#F5F2EC", padding: "88px 0" }}>
        <div data-role="sol-grid" style={{ ...wrap, display: "grid", gridTemplateColumns: "0.9fr 2.1fr", gap: 52, alignItems: "start" }}>
          <div data-role="sol-intro" style={{ position: "sticky", top: 96 }}>
            <Head kicker="Nos solutions" title="Une solution pour chaque espace" intro="Du poste de travail à la salle de réunion, nous concevons et équipons chaque zone de votre entreprise." />
            <div style={{ marginTop: 24, display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 600, fontSize: 12, letterSpacing: "1px", color: "#7A8794" }}>
              <span aria-hidden style={{ width: 28, height: 1, background: "#E8772E" }} />10 familles de produits
            </div>
          </div>
          <div data-role="sol-cards" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }}>
            {solutions.map((s) => (
              <a key={s.code} href="#contact" className="card-lift-sm" style={{ position: "relative", display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E6EAEE", borderRadius: 14, padding: 22 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 34, height: 34, padding: "0 9px", borderRadius: 9, background: "#0F3D4C", color: "#fff", fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "1px" }}>{s.code}</span>
                  <span aria-hidden style={{ width: 9, height: 9, borderRadius: "50%", background: "#E8772E" }} />
                </div>
                <h3 style={{ fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 600, fontSize: 18, color: "#0F3D4C", margin: "18px 0 6px" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#5b6b78", margin: 0 }}>{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ======= REALISATIONS ======= */}
      <section id="realisations" style={{ background: "#fff", padding: "84px 0" }}>
        <div style={wrap}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
            <Head kicker="Nos réalisations" title="Nos dernières réalisations" />
            <a href="#contact" className="btn link-arrow" style={{ fontWeight: 600, color: "#1C7F97", whiteSpace: "nowrap", padding: 0 }}>Voir toutes nos réalisations <span className="arw" aria-hidden>→</span></a>
          </div>
          <div data-role="real-cards" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 22, marginTop: 40 }}>
            {projets.map((p) => (
              <Reveal key={p.title}>
                <a href="#contact" className="card-lift" style={{ display: "block", background: "#fff", border: "1px solid #E6EAEE", borderRadius: 16, overflow: "hidden", height: "100%" }}>
                  <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                    <Image className="img-zoom" src={p.img} alt={p.alt} fill sizes="(max-width:640px) 100vw, (max-width:860px) 50vw, 580px" style={{ objectFit: "cover" }} />
                    <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 55%,rgba(15,61,76,0.35))" }} />
                    <span style={{ position: "absolute", left: 14, bottom: 14, display: "inline-flex", gap: 6 }}>
                      <span style={{ background: "#ffffffee", color: "#0F3D4C", fontWeight: 600, fontSize: 11, padding: "5px 10px", borderRadius: 999 }}>{p.ville}</span>
                      <span style={{ background: "#E8772E", color: "#fff", fontWeight: 600, fontSize: 11, padding: "5px 10px", borderRadius: 999 }}>{p.surface}</span>
                    </span>
                  </div>
                  <div style={{ padding: "18px 20px" }}>
                    <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", color: "#1C7F97" }}>{p.secteur}</span>
                    <h3 style={{ fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 600, fontSize: 19, color: "#0F3D4C", margin: "6px 0 0" }}>{p.title}</h3>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#9aa6b0", margin: "22px 0 0", fontStyle: "italic" }}>Visuels d&apos;illustration, à remplacer par vos photos de chantiers.</p>
        </div>
      </section>

      {/* ======= CHIFFRES CLES (compteurs animés) ======= */}
      <Stats />

      {/* ======= METHODE ======= */}
      <section style={{ background: "#fff", padding: "84px 0" }}>
        <div style={wrap}>
          <Head kicker="Notre méthode" title="De la première idée à la livraison" intro="Pas de mauvaise surprise : une méthode éprouvée, les mêmes équipes du premier rendez-vous à la livraison, et un interlocuteur unique qui connaît votre dossier à chaque étape. Voici comment on travaille, concrètement." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 22, marginTop: 44 }}>
            {etapes.map((e, i) => (
              <Reveal key={e.n} delay={i * 70}>
                <div style={{ position: "relative", paddingTop: 18, borderTop: "2px solid #E6EAEE" }}>
                  <span style={{ fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", background: "#E8772E", width: 34, height: 34, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: -18 }}>{e.n}</span>
                  <h3 style={{ fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 600, fontSize: 19, color: "#0F3D4C", margin: "8px 0 8px" }}>{e.title}</h3>
                  <p style={{ fontSize: 15, color: "#5b6b78", margin: 0 }}>{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======= SECTEURS ======= */}
      <section id="secteurs" style={{ background: "#0F3D4C", color: "#fff", padding: "84px 0", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", right: -160, top: -120, width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle,#1c7f9730,transparent 74%)" }} />
        <div style={{ ...wrap, position: "relative" }}>
          <Head kicker="Par secteur d'activité" title="On connaît votre métier" tone="dark" intro="De la PME industrielle au cabinet médical, chaque activité a ses usages. On adapte le mobilier, l'acoustique et l'agencement aux contraintes réelles de votre secteur, et aux normes qui vont avec." />
          <div data-role="sect-cards" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 40 }}>
            {secteurs.map((sec) => (
              <div key={sec.code} className="sect-card" style={{ background: "#ffffff0f", border: "1px solid #ffffff1f", borderRadius: 14, padding: 22 }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 42, height: 42, background: "#1C7F97", borderRadius: 10, fontFamily: "Space Mono,monospace", fontWeight: 700, fontSize: 14, letterSpacing: "1px", color: "#fff" }}>{sec.code}</span>
                <h3 style={{ fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 600, fontSize: 18, margin: "14px 0 6px" }}>{sec.title}</h3>
                <p style={{ fontSize: 14, color: "#bcd4dc", margin: 0 }}>{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= SHOWROOM ======= */}
      <section id="showroom" style={{ background: "#FBF0E7", padding: "84px 0" }}>
        <div data-role="showroom-grid" style={{ ...wrap, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div style={{ position: "relative", aspectRatio: "5/4", borderRadius: 18, overflow: "hidden", boxShadow: "0 24px 56px rgba(15,61,76,0.24)" }}>
            <Image src="/images/office-cabin.jpg" alt="Espace de bureau présenté dans le showroom d'Aytré" fill sizes="(max-width:860px) 100vw, 580px" style={{ objectFit: "cover" }} />
            <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 55%,rgba(15,61,76,0.35))" }} />
            <span style={{ position: "absolute", left: 16, bottom: 16, background: "#ffffffee", color: "#0F3D4C", fontWeight: 600, fontSize: 13, padding: "9px 14px", borderRadius: 10 }}>Showroom · Aytré (17)</span>
          </div>
          <div>
            <Head kicker="Le showroom" title="Testez avant de choisir, dans notre showroom." />
            <p style={{ ...leadBase, color: "#425466", maxWidth: 480 }}>À Aytré, nos gammes sont installées comme dans de vrais espaces de travail : postes, sièges ergonomiques, cabines acoustiques et coins détente. Venez vous asseoir, comparer les matières et repartir avec des idées concrètes pour vos bureaux.</p>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginTop: 22, background: "#fff", border: "1px solid #E6EAEE", borderRadius: 14, padding: 18 }}>
              <span aria-hidden style={{ color: "#E8772E", fontSize: 20 }}>◈</span>
              <div style={{ fontSize: 15, color: "#1F2933", lineHeight: 1.5 }}>
                <strong style={{ color: "#0F3D4C" }}>ZAC de Belle-Aire Nord</strong>
                <br />Rue de Bougainville, 17440 Aytré
              </div>
            </div>
            <div style={{ position: "relative", marginTop: 16, height: 190, borderRadius: 14, overflow: "hidden", border: "1px solid #E6EAEE", background: "#EDECE4" }}>
              <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(#d8d5c7 1.5px,transparent 1.5px),linear-gradient(90deg,#d8d5c7 1.5px,transparent 1.5px)", backgroundSize: "44px 44px" }} />
              <div aria-hidden style={{ position: "absolute", left: 0, right: 0, top: "58%", height: 16, background: "#dcdacd", transform: "rotate(-6deg)" }} />
              <div aria-hidden style={{ position: "absolute", top: 0, bottom: 0, left: "34%", width: 13, background: "#dcdacd", transform: "rotate(4deg)" }} />
              <div aria-hidden style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "40%", background: "linear-gradient(0deg,#cfe0e4,transparent)" }} />
              <div style={{ position: "absolute", left: "calc(34% - 4px)", top: "calc(58% - 30px)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ background: "#0F3D4C", color: "#fff", fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 700, fontSize: 11, padding: "5px 10px", borderRadius: 8, whiteSpace: "nowrap", boxShadow: "0 4px 10px rgba(15,61,76,0.25)" }}>Atlantic Bureau</span>
                <span aria-hidden style={{ width: 16, height: 16, borderRadius: "50% 50% 50% 0", background: "#E8772E", transform: "rotate(45deg)", marginTop: 4, border: "2px solid #fff" }} />
              </div>
              <a href="https://maps.google.com/?q=Rue+de+Bougainville+17440+Aytré" target="_blank" rel="noopener" style={{ position: "absolute", right: 12, bottom: 12, background: "#fff", color: "#0F3D4C", fontWeight: 600, fontSize: 12, padding: "8px 13px", borderRadius: 8, boxShadow: "0 3px 10px rgba(0,0,0,0.12)" }}>Ouvrir dans Maps →</a>
            </div>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: 20, fontSize: 16, padding: "15px 26px" }}>Prendre rendez-vous <span aria-hidden>→</span></a>
          </div>
        </div>
      </section>

      {/* ======= AVIS ======= */}
      <section style={{ background: "#fff", padding: "84px 0" }}>
        <div style={wrap}>
          <div>
            <Head kicker="Avis clients" title="Ce qu'en disent nos clients" />
            <p style={{ fontSize: 13, color: "#9aa6b0", margin: "8px 0 0", fontStyle: "italic" }}>Témoignages illustratifs (exemples).</p>
          </div>
          <div data-role="avis-cards" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 22, marginTop: 40 }}>
            {avis.map((a) => (
              <Reveal key={a.name}>
                <figure style={{ position: "relative", margin: 0, background: "#F5F2EC", borderRadius: 16, padding: 26, display: "flex", flexDirection: "column", gap: 16, overflow: "hidden", height: "100%" }}>
                  <span aria-hidden style={{ position: "absolute", top: 8, right: 22, fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 700, fontSize: 88, lineHeight: 1, color: "#E8772E22" }}>&rdquo;</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Space Mono,monospace", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "#1C7F97", fontWeight: 600 }}>
                    <span aria-hidden style={{ width: 22, height: 1.5, background: "#E8772E" }} />Avis vérifié
                  </span>
                  <blockquote style={{ position: "relative", margin: 0, fontSize: 16, color: "#1F2933", lineHeight: 1.55 }}>{a.quote}</blockquote>
                  <figcaption style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto" }}>
                    <span style={{ width: 42, height: 42, borderRadius: "50%", background: "#0F3D4C", color: "#fff", fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{a.initials}</span>
                    <div style={{ lineHeight: 1.3 }}>
                      <div style={{ fontWeight: 600, color: "#0F3D4C" }}>{a.name}</div>
                      <div style={{ fontSize: 13, color: "#5b6b78" }}>{a.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======= FAQ ======= */}
      <section id="faq" style={{ background: "#F5F2EC", padding: "88px 0" }}>
        <div style={{ ...wrap, maxWidth: 1000 }}>
          <Head kicker="Questions fréquentes" title="Vous vous posez sûrement ces questions" intro="Voici les réponses à ce qu'on nous demande le plus souvent. Une autre question en tête ? Écrivez-nous, on répond vite." />
          <Faq />
        </div>
      </section>

      {/* ======= ZONES ======= */}
      <section style={{ background: "#F5F2EC", padding: "72px 0" }}>
        <div style={{ ...wrap, maxWidth: 1080, textAlign: "center" }}>
          <Head kicker="Zones d'intervention" title="On intervient près de chez vous" kickerColor="#E8772E" center intro="De La Rochelle à Saintes, nous nous déplaçons dans toute la Charente-Maritime pour vous conseiller, prendre les mesures et installer vos espaces." />
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginTop: 34, maxWidth: 880, marginLeft: "auto", marginRight: "auto" }}>
            {zones.map((z) => (
              <span key={z} className="zone-pill" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#fff", border: "1px solid #EADFD4", color: "#0F3D4C", fontWeight: 600, fontSize: 14.5, padding: "11px 20px", borderRadius: 999 }}>
                <span aria-hidden style={{ width: 7, height: 7, borderRadius: "50%", background: "#E8772E" }} />{z}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CONTACT ======= */}
      <section id="contact" style={{ background: "#0F3D4C", color: "#fff", padding: "80px 0", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", right: -120, top: -120, width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle,#1c7f9730,transparent 74%)" }} />
        <div aria-hidden style={{ position: "absolute", left: -140, bottom: -160, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle,#E8772E1f,transparent 74%)" }} />
        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h2 style={{ ...h2Base, fontSize: "clamp(32px,4.5vw,48px)", letterSpacing: "-1.2px", margin: 0, textWrap: "balance" }}>Un projet d&apos;aménagement ? Parlons-en.</h2>
          <p style={{ fontSize: 18, color: "#bcd4dc", margin: "18px 0 0" }}>Réponse sous 48h, conseil personnalisé et devis gratuit sans engagement.</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, marginTop: 32 }}>
            <a href="mailto:contact@atlantic-bureau.com" className="btn btn-primary" style={{ fontSize: 16, padding: "16px 28px" }}>Demander un devis gratuit <span aria-hidden>→</span></a>
            <a href="tel:0546566680" className="btn btn-ghost" style={{ fontSize: 16, padding: "16px 28px" }}>☎ 05 46 56 66 80</a>
          </div>
        </div>
      </section>

      {/* ======= FOOTER ======= */}
      <footer style={{ background: "#0b2f3b", color: "#c5d3d9", padding: "60px 0 28px" }}>
        <div data-role="footer-grid" style={{ ...wrap, display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#fff" }}>
              <span style={{ width: 38, height: 38, borderRadius: 10, background: "#E8772E", color: "#fff", fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 700, fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>ab</span>
              <span style={{ fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 700, fontSize: 18 }}>Atlantic Bureau</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, margin: "18px 0 0" }}>
              ZAC de Belle-Aire Nord<br />Rue de Bougainville, 17440 Aytré<br />
              <a href="tel:0546566680" style={{ color: "#7ec4d4" }}>05 46 56 66 80</a><br />
              <a href="mailto:contact@atlantic-bureau.com" style={{ color: "#7ec4d4" }}>contact@atlantic-bureau.com</a>
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.6, margin: "14px 0 0", color: "#8fa4ac" }}>Lun-Ven · 8h30-12h / 14h-18h</p>
          </div>
          {[
            ["Plan du site", [["Solutions", "#solutions"], ["Réalisations", "#realisations"], ["Secteurs", "#secteurs"], ["Showroom", "#showroom"]]],
            ["Réseaux", [["LinkedIn", "#"], ["Instagram", "#"], ["Facebook", "#"]]],
            ["Légal", [["Mentions légales", "#"], ["Politique de confidentialité", "#"], ["Cookies", "#"]]],
          ].map(([title, links]) => (
            <div key={title as string}>
              <h4 style={{ fontFamily: "Hanken Grotesk,sans-serif", color: "#fff", fontSize: 14, letterSpacing: "0.5px", textTransform: "uppercase", margin: "0 0 14px" }}>{title as string}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9, fontSize: 14 }}>
                {(links as [string, string][]).map(([l, h]) => (
                  <li key={l}><a href={h} style={{ color: "#c5d3d9" }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ ...wrap, margin: "32px auto 0", padding: "20px 24px 0", borderTop: "1px solid #ffffff1a", fontSize: 13, color: "#8fa4ac" }}>© 2026 Atlantic Bureau · Aménagement d&apos;espaces de travail. Tous droits réservés.</div>
      </footer>

      <CookieBanner />
    </main>
  );
}
