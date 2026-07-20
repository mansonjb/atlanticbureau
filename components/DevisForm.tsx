"use client";
import { useState, type CSSProperties, type FormEvent } from "react";

const label: CSSProperties = { display: "block", fontSize: 13, fontWeight: 600, color: "#0F3D4C", marginBottom: 6 };
const field: CSSProperties = { width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid #E1DACD", background: "#fff", fontSize: 15, fontFamily: "inherit", color: "#1F2933" };
const row: CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 };

type Status = "idle" | "loading" | "ok" | "error";

export default function DevisForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (!data.name || !data.email) {
      setErr("Merci d'indiquer au moins votre nom et votre email.");
      setStatus("error");
      return;
    }
    if (!data.consent) {
      setErr("Merci d'accepter la politique de confidentialité.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErr("");
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const j = await res.json();
      if (!res.ok || !j.ok) throw new Error(j.error || "Une erreur est survenue.");
      setStatus("ok");
      form.reset();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Une erreur est survenue.");
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div style={{ background: "#fff", border: "1px solid #E1DACD", borderRadius: 16, padding: "34px 30px", textAlign: "center" }}>
        <div style={{ width: 54, height: 54, borderRadius: "50%", background: "#16A34A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, margin: "0 auto 16px" }} aria-hidden>✓</div>
        <h3 style={{ fontFamily: "Hanken Grotesk,sans-serif", fontWeight: 700, fontSize: 22, color: "#0F3D4C", margin: 0 }}>Merci, votre demande est bien reçue.</h3>
        <p style={{ fontSize: 15.5, color: "#5b6b78", margin: "12px 0 0" }}>On revient vers vous sous 48h avec un premier retour. À très vite.</p>
        <button onClick={() => setStatus("idle")} className="btn btn-outline" style={{ marginTop: 22, fontSize: 15, padding: "11px 22px" }}>Envoyer une autre demande</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{ background: "#fff", border: "1px solid #E1DACD", borderRadius: 16, padding: "26px 26px 28px" }}>
      <div style={{ display: "grid", gap: 16 }}>
        <div style={row} className="df-row">
          <div>
            <label style={label} htmlFor="name">Nom et prénom *</label>
            <input style={field} id="name" name="name" autoComplete="name" required />
          </div>
          <div>
            <label style={label} htmlFor="company">Entreprise</label>
            <input style={field} id="company" name="company" autoComplete="organization" />
          </div>
        </div>
        <div style={row} className="df-row">
          <div>
            <label style={label} htmlFor="email">Email *</label>
            <input style={field} id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div>
            <label style={label} htmlFor="phone">Téléphone</label>
            <input style={field} id="phone" name="phone" type="tel" autoComplete="tel" />
          </div>
        </div>
        <div>
          <label style={label} htmlFor="projet">Votre projet</label>
          <select style={field} id="projet" name="projet" defaultValue="">
            <option value="" disabled>Choisir…</option>
            <option>Aménagement complet de bureaux</option>
            <option>Mobilier de bureau</option>
            <option>Cloisonnement acoustique</option>
            <option>Salle de réunion</option>
            <option>Espace détente</option>
            <option>Autre / je ne sais pas encore</option>
          </select>
        </div>
        <div>
          <label style={label} htmlFor="message">Votre message</label>
          <textarea style={{ ...field, minHeight: 118, resize: "vertical" }} id="message" name="message" placeholder="Surface, nombre de postes, échéance, contraintes…" />
        </div>
        <label style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13.5, color: "#5b6b78", cursor: "pointer" }}>
          <input type="checkbox" name="consent" style={{ marginTop: 3, width: 17, height: 17, accentColor: "#E8772E", flex: "none" }} />
          <span>J&apos;accepte que mes informations soient utilisées pour être recontacté au sujet de ma demande, conformément à la politique de confidentialité.</span>
        </label>

        {status === "error" && (
          <p role="alert" style={{ margin: 0, fontSize: 14, color: "#DC2626", fontWeight: 500 }}>{err}</p>
        )}

        <button type="submit" disabled={status === "loading"} className="btn btn-primary" style={{ justifyContent: "center", fontSize: 16, padding: "15px 26px", opacity: status === "loading" ? 0.7 : 1 }}>
          {status === "loading" ? "Envoi…" : (<>Envoyer ma demande <span aria-hidden>→</span></>)}
        </button>
        <p style={{ margin: 0, fontSize: 12.5, color: "#9aa6b0" }}>Réponse sous 48h. Aucune donnée revendue. Devis gratuit et sans engagement.</p>
      </div>
    </form>
  );
}
