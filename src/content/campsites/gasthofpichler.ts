import type { CampsiteConfig } from "../types";

/**
 * Landhaus-Camping Pichler — honest, source-grounded config (caged build).
 * Quelle: gasthofpichler.at (raw/digest) + Nach-Scrape. Bildlage: zwei eigene Fotos ≥ 800px
 * (Luftbild des Gasthofs 1024px + Wiese mit Reisemobil 1110px) tragen Hero + Atempause; der
 * Nach-Scrape ergänzte zwei weitere provenance-gesicherte Pichler-Fotos (Raddörfl-Holzhaus,
 * Landhaus-Zimmer, je ~500px) → camping.features. Alle übrigen neuen Fotos stammen von FREMDEN
 * Plätzen (camping.info-Listings anderer Campingplätze) → abgelehnt. pillars/galerie bleiben
 * mangels weiterer eigener Motive leer (Template blendet sie sauber aus). Preise real aus prices.md
 * (à-la-carte: pro Person + Fahrzeug) → arithmetische Richtpreise „2 Pers. + Fahrzeug".
 * Empfehlung: Tier 1b Foto-Enrichment für volle Sektionen.
 */
const IMG = "/campsites/gasthofpichler";

const gasthofpichler: CampsiteConfig = {
  name: "Landhaus-Camping Pichler",
  shortName: "Pichler",
  slug: "gasthofpichler",
  ort: "Oberaich",
  region: "Steiermark",
  brandKind: "Landhaus & Camping",
  regionLong: "Am Murradweg · Hochsteiermark · Österreich",

  heroVariant: "center",

  claim: "Steiermarks ältester Campingplatz, direkt am Murradweg",
  claimEmphasis: "ältester Campingplatz",
  emailDetail: "euer Raddörfl mit den sechs Holzhäusern unter alten Bäumen",
  intro:
    "Seit 1952 betreibt Familie Pichler den ältesten Campingplatz der Steiermark — frisch renoviert, naturbelassen und direkt am Murradweg, dein Etappenziel zwischen Bruck an der Mur und Leoben.",

  logo: { src: `${IMG}/logo.png`, alt: "Landhaus-Camping Pichler Logo" },

  statement: {
    text: "Wo schon 1952 die ersten Camper am Murradweg Station machten, stellst heute du dein Vorzelt auf.",
    emphasis: "schon 1952",
  },

  // Nur zwei verwendbare eigene Fotos (Hero + Atempause) → keine drei ehrlich bebilderbaren
  // Foto-Pillars übrig. Block bleibt leer, BrandStatement blendet sich aus.
  pillars: [],

  usps: [
    "Steiermarks ältester Platz",
    "Direkt am Murradweg",
    "Neu renovierte Sanitärräume",
    "WLAN im ganzen Haus",
    "Raddörfl mit Holzhäusern",
    "Sonnenterrasse nach Süden",
  ],

  trust: {
    heading: "Seit über 70 Jahren am Murradweg",
    headingEmphasis: "über 70 Jahren",
    intro:
      "1952 als erster Campingplatz der Steiermark eröffnet, von Familie Pichler geführt und vor Kurzem komplett renoviert: ebener Naturplatz, Aufenthaltsraum, Trockenraum und Garage — der Murradweg beginnt direkt vor dem Haus.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-pichler.webp`, alt: "Luftaufnahme von Landhaus-Camping Pichler in Oberaich" },
  },

  // Eine starke, sonst ungenutzte Wiesen-Aufnahme als Full-Bleed-Atempause.
  breather: {
    image: { src: `${IMG}/camp-wiese.webp`, alt: "Reisemobil auf der Campingwiese beim Gasthof Pichler" },
    line: "Naturbelassener Rasen, alte Bäume und der Gasthof gleich nebenan.",
  },

  // Nach-Scrape: zwei weitere eigene Fotos (Raddörfl-Holzhaus + Zimmer) provenance-gesichert
  // (camping.info / booking.com „gasthof-pichler") → zwei ehrliche Feature-Karten.
  camping: {
    heading: "Camping am Murradweg",
    intro:
      "Ebener, naturbelassener Rasenplatz direkt beim Gasthof: neu renovierte Duschen und WC, Aufenthaltsraum mit Getränke-Selbstbedienung, Trockenraum, Garage und ein Erlebnisspielplatz für die Kinder.",
    features: [
      {
        title: "Raddörfl mit Holzhäusern",
        text: "Sechs gemütliche Holzhäuser unter alten Bäumen — dein festes Dach am Murradweg, wenn du das Zelt zu Hause lassen willst.",
        image: { src: `${IMG}/raddoerfl-holzhaus.webp`, alt: "Holzhaus im Raddörfl von Landhaus-Camping Pichler" },
      },
      {
        title: "Zimmer im Landhaus",
        text: "Wer es lieber fest mag, schläft im holzvertäfelten Landhaus-Zimmer mit Balkonzugang gleich neben dem Platz.",
        image: { src: `${IMG}/zimmer.webp`, alt: "Holzvertäfeltes Landhaus-Zimmer beim Gasthof Pichler" },
      },
    ],
  },

  anreise: {
    heading: "Zwei Minuten von der Schnellstraße",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die S6 / A9 bis Bruck an der Mur, dann Richtung Leoben nach Oberaich — Auto-, Bus- und Motorradparkplätze gibt es direkt am Haus.",
      },
      {
        title: "Mit Bahn & Bus",
        text: "Bahnhof Bruck an der Mur, von dort wenige Minuten nach Oberaich — die Bushaltestelle liegt direkt vor dem Haus.",
      },
      {
        title: "Mit dem Rad",
        text: "Der Murradweg führt unmittelbar am Platz vorbei — ein ideales Etappenziel auf der Tour de Mur durch die Hochsteiermark.",
      },
    ],
  },

  // Kein Bestand an vier verwendbaren, ungenutzten Fotos → Galerie bleibt leer (blendet sich aus).
  galerie: {
    heading: "Eindrücke vom Pichler",
    headingEmphasis: "Pichler",
    intro: "Ein paar Eindrücke vom Platz, vom Gasthof und vom Raddörfl mitten im Grünen.",
    tag: "Am Murradweg",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Murradweg",
    headingEmphasis: "am Murradweg",
    intro:
      "Sag uns Zeitraum und Personenzahl — Familie Pichler bestätigt dir deinen Stellplatz persönlich, telefonisch oder per Mail.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreis für 2 Erwachsene inkl. Stellplatz · je weiterer Erwachsener € 10, Kinder € 7–8 · zzgl. Ortstaxe € 2 pro Person/Tag · Hund € 5 · Preise laut Website, bitte bestätigen.",
    highlight: {
      title: "Mitten am Murradweg",
      text: "Der Murradweg führt direkt am Platz vorbei — das perfekte Etappenziel für deine Tour.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz (Wohnwagen/Auto)", perNight: 26, perExtraGuest: 10 },
      { id: "reisemobil", label: "Reisemobil", perNight: 30, perExtraGuest: 10 },
      { id: "zelt", label: "Zeltplatz", perNight: 26, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    tel: "+43 3862 51418",
    telHref: "tel:+43386251418",
    mail: "info@gasthofpichler.at",
    adresse: "Bruckerstraße 110 · 8600 Oberaich · Österreich",
    coords: { lat: 47.402855, lng: 15.227025 },
  },

  languages: ["DE"],

  nav: [
    { label: "Der Platz", href: "#top" },
    { label: "Camping", href: "#camping" },
    { label: "Anreise", href: "#anreise" },
    { label: "Preise & Anfrage", href: "#booking" },
  ],
};

export default gasthofpichler;
