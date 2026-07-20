export type Reassurance = { n: string; label: string };
export const reassurance: Reassurance[] = [
  { n: "01", label: "Conseil personnalisé" },
  { n: "02", label: "Plans 2D & 3D" },
  { n: "03", label: "Pose par nos équipes" },
  { n: "04", label: "Devis sous 48h" },
];

export const clients: string[] = [
  "Cabinet Léa",
  "Groupe Verdon",
  "Mairie de Royan",
  "Nova Santé",
  "Atlantique BTP",
  "Studio 17",
  "Clinique du Port",
  "Groupe Solea",
];

export type Solution = { code: string; title: string; desc: string };
export const solutions: Solution[] = [
  { code: "01", title: "Mobilier de bureau", desc: "Postes de travail, bureaux réglables, bench." },
  { code: "02", title: "Sièges ergonomiques", desc: "Confort et maintien pour la journée entière." },
  { code: "03", title: "Cloisonnement acoustique", desc: "Cabines et panneaux pour le calme." },
  { code: "04", title: "Rangement", desc: "Armoires, casiers, solutions sur mesure." },
  { code: "05", title: "Salles de réunion", desc: "Tables, écrans, acoustique maîtrisée." },
  { code: "06", title: "Banques d'accueil", desc: "Un accueil à l'image de votre entreprise." },
  { code: "07", title: "Espaces détente", desc: "Coins café, canapés, zones informelles." },
  { code: "08", title: "Télétravail", desc: "Équiper le bureau comme la maison." },
  { code: "09", title: "Luminaire", desc: "Éclairage fonctionnel et chaleureux." },
  { code: "10", title: "Accessoires", desc: "Les détails qui font la différence." },
];

export type Projet = {
  secteur: string;
  title: string;
  ville: string;
  surface: string;
  img: string;
  alt: string;
};
export const projets: Projet[] = [
  {
    secteur: "Tertiaire",
    title: "Open space lumineux",
    ville: "La Rochelle",
    surface: "220 m²",
    img: "/images/glass-office.jpg",
    alt: "Open space aménagé avec bureaux et cloisons vitrées",
  },
  {
    secteur: "Cabinet d'avocats",
    title: "Salle de réunion feutrée",
    ville: "Niort",
    surface: "45 m²",
    img: "/images/boardroom.jpg",
    alt: "Salle de réunion avec grande table et fauteuils",
  },
  {
    secteur: "PME industrielle",
    title: "Espace détente équipe",
    ville: "Rochefort",
    surface: "80 m²",
    img: "/images/detente-lounge.jpg",
    alt: "Espace détente avec canapé et fauteuils design",
  },
  {
    secteur: "Collectivité",
    title: "Accueil du public",
    ville: "Royan",
    surface: "60 m²",
    img: "/images/office-cabin.jpg",
    alt: "Bureau vitré avec poste d'accueil",
  },
];

export type Etape = { n: string; title: string; desc: string };
export const etapes: Etape[] = [
  {
    n: "1",
    title: "Conseil & étude des besoins",
    desc: "On vient sur site, on observe vos usages et on écoute vos équipes. C'est la base d'un aménagement qui tient dans le temps.",
  },
  {
    n: "2",
    title: "Plans 2D et 3D",
    desc: "Vous validez l'implantation en plan et une vue 3D réaliste. Rien n'est commandé avant votre feu vert.",
  },
  {
    n: "3",
    title: "Installation par nos techniciens",
    desc: "Livraison et montage par nos équipes, proprement et dans les délais. Aucune sous-traitance.",
  },
  {
    n: "4",
    title: "Suivi et service après-vente",
    desc: "On reste disponibles après la livraison : réglages, ajouts, garanties. Votre espace évolue, nous aussi.",
  },
];

export type Secteur = { code: string; title: string; desc: string };
export const secteurs: Secteur[] = [
  { code: "TE", title: "Entreprises & tertiaire", desc: "Bureaux, sièges, PME et grands comptes." },
  { code: "CE", title: "Collectivités & écoles", desc: "Marchés publics, mobilier durable." },
  { code: "SA", title: "Santé & EHPAD", desc: "Confort, hygiène et normes respectées." },
  { code: "IN", title: "Industrie", desc: "Postes robustes et zones techniques." },
  { code: "CO", title: "Commerces", desc: "Espaces accueillants et fonctionnels." },
  { code: "HO", title: "Hôtellerie", desc: "Accueil et espaces communs soignés." },
];

export type Avis = { initials: string; name: string; role: string; quote: string };
export const avis: Avis[] = [
  {
    initials: "ML",
    name: "Marie Lefèvre",
    role: "DG, PME tertiaire · La Rochelle",
    quote:
      "Du premier rendez-vous à la pose, tout a été fluide. Les plans 3D nous ont vraiment aidés à nous projeter.",
  },
  {
    initials: "TP",
    name: "Thomas Perrin",
    role: "Responsable services généraux · Niort",
    quote:
      "Une équipe à l'écoute et des délais tenus. Nos collaborateurs adorent le nouvel espace détente.",
  },
  {
    initials: "SB",
    name: "Sophie Bernard",
    role: "Directrice, collectivité · Royan",
    quote:
      "Accompagnement sérieux sur un marché public, et un showroom qui fait la différence.",
  },
  {
    initials: "JD",
    name: "Julien Doré",
    role: "Gérant, cabinet dentaire · Rochefort",
    quote:
      "Espace repensé de A à Z, pose impeccable et zéro mauvaise surprise sur le devis. On recommande.",
  },
];

export const zones: string[] = [
  "La Rochelle",
  "Aytré",
  "Rochefort",
  "Niort",
  "Royan",
  "Saintes",
  "Surgères",
  "Marans",
  "Île de Ré",
  "Saint-Jean-d'Angély",
];

export type FaqItem = { q: string; a: string };
export const faq: FaqItem[] = [
  {
    q: "Combien de temps pour recevoir un devis ?",
    a: "En général sous 48h après notre premier échange. Pour un projet plus complexe, on prend le temps d'une visite avant de chiffrer précisément.",
  },
  {
    q: "Intervenez-vous dans toute la région ?",
    a: "Oui, de La Rochelle à Saintes, en passant par Niort, Rochefort, Royan et l'Île de Ré. Notre showroom est à Aytré.",
  },
  {
    q: "Fait-on les plans avant de commander ?",
    a: "Toujours. Vous validez des plans 2D et une visualisation 3D réaliste avant de vous engager sur quoi que ce soit.",
  },
  {
    q: "Qui réalise l'installation ?",
    a: "Nos propres techniciens, jamais de sous-traitance. La même équipe qui a préparé le projet l'installe, proprement et dans les délais.",
  },
  {
    q: "Travaillez-vous avec les collectivités ?",
    a: "Oui. Nous répondons aux marchés publics et accompagnons écoles, mairies et établissements de santé sur toute la démarche.",
  },
  {
    q: "Peut-on visiter le showroom sans rendez-vous ?",
    a: "Vous êtes les bienvenus aux horaires d'ouverture. Un rendez-vous garantit simplement qu'un conseiller soit disponible rien que pour vous.",
  },
];

export type Stat = { target: number; suffix: string; label: string };
export const stats: Stat[] = [
  { target: 20, suffix: " ans", label: "d'expérience en aménagement" },
  { target: 500, suffix: "+", label: "projets livrés en région" },
  { target: 48, suffix: " h", label: "pour recevoir votre devis" },
  { target: 100, suffix: " %", label: "pose assurée par nos équipes" },
];
