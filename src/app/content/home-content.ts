export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface HeroSignal {
  title: string;
  text: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  stats: StatItem[];
  signals: HeroSignal[];
}

export interface ChallengeCard {
  title: string;
  text: string;
}

export interface ChallengeContent {
  eyebrow: string;
  title: string;
  intro: string;
  cards: ChallengeCard[];
  outcomes: string[];
}

export interface Pillar {
  label: string;
  title: string;
  text: string;
  outcomes: string[];
}

export interface FormatCard {
  title: string;
  duration: string;
  text: string;
  bullets: string[];
}

export interface AudienceCard {
  title: string;
  text: string;
  needs: string[];
}

export interface Differentiator {
  title: string;
  text: string;
}

export interface ComparisonRow {
  common: string;
  stayRelevant: string;
}

export interface ProofCard {
  title: string;
  text: string;
  points: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ContextItem {
  label: string;
}

export interface MethodStep {
  step: string;
  title: string;
  text: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface ExpertProfile {
  name: string;
  initials: string;
  role: string;
  bio: string;
  credentials?: string;
  imageSrc?: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  text: string;
}

export interface ReportContent {
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  note: string;
}

export interface PhilosophyPoint {
  title: string;
  text: string;
}

export interface PhilosophyContent {
  eyebrow: string;
  title: string;
  intro: string;
  statement: string;
  points: PhilosophyPoint[];
  closing: string;
}

export interface CourseOffer {
  category: string;
  label: string;
  title: string;
  duration: string;
  audience: string;
  text: string;
  outcomes: string[];
  featured?: boolean;
}

export const CONTACT_EMAIL = 'info@stayrelevant-academy.de';
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;
export const CONTACT_PHONE_DISPLAY = '01529 / 2623270';
export const CONTACT_PHONE_HREF = 'tel:+4915292623270';
export const CONTACT_LOCATION = 'Spiesen-Elversberg, Saarland, remote und vor Ort';
export const SITE_URL = 'https://stayrelevant-academy.de/';

export const HEADER_NAV_ITEMS: NavItem[] = [
  { label: 'Warum', href: '#warum' },
  { label: 'Lernfelder', href: '#lernfelder' },
  { label: 'Zielgruppen', href: '#zielgruppen' },
  { label: 'Formate', href: '#angebote' },
  { label: 'Kurse', href: '#kurse' },
  { label: 'FAQ', href: '#faq' }
];

export const FOOTER_NAV_ITEMS: NavItem[] = [
  { label: 'Start', href: '/' },
  { label: 'Warum', href: '/#warum' },
  { label: 'Lernfelder', href: '/#lernfelder' },
  { label: 'Zielgruppen', href: '/#zielgruppen' },
  { label: 'Formate', href: '/#angebote' },
  { label: 'Kurse', href: '/#kurse' },
  { label: 'FAQ', href: '/#faq' }
];

export const SOCIAL_LINKS: SocialLink[] = [];

export const BRAND_CONTEXTS: ContextItem[] = [
  { label: 'HR & People' },
  { label: 'Operations' },
  { label: 'Produkt & Services' },
  { label: 'Marketing & Vertrieb' },
  { label: 'Führung & Transformation' }
];

export const METHODOLOGY_STEPS: MethodStep[] = [
  {
    step: '01',
    title: 'Arbeitslogik verstehen',
    text: 'Wir starten nicht bei Trends, sondern bei Rollen, Aufgaben, Entscheidungen und den Reibungspunkten im Alltag.'
  },
  {
    step: '02',
    title: 'Mit echten Fällen lernen',
    text: 'Neue Kompetenzen werden nicht nur erklärt, sondern an konkreten Fällen, Artefakten und Routinen erprobt.'
  },
  {
    step: '03',
    title: 'Transfer systematisch sichern',
    text: 'Technologieverständnis, Zusammenarbeit und Urteilskraft werden zusammen gedacht und sauber in den Arbeitsalltag übersetzt.'
  }
];

export const TESTIMONIAL: Testimonial = {
  quote:
    'Wir hatten vorher viele einzelne Initiativen, aber keine gemeinsame Lernlogik. Nach dem Programm war klarer, welche Kompetenzen wir wirklich brauchen, wie KI sinnvoll eingesetzt wird und was davon direkt in unsere Teamarbeit gehört.',
  name: 'Nina Berger',
  role: 'People & Operations, wachsendes Technologieunternehmen'
};

export const EXPERTS: ExpertProfile[] = [
  {
    name: 'Gregor Theado',
    initials: 'GT',
    role: 'Recht, KI und Compliance',
    bio: 'Rechtsanwalt mit Schwerpunkt Kreativrecht, Datenschutz und Vertragsgestaltung. TÜV-zertifizierter Datenschutz-Auditor und erfahrener Hochschuldozent.',
    imageSrc: '/experts/gregor-theado.jpg'
  },
  {
    name: 'Kristina Muth',
    initials: 'KM',
    role: 'Leadership, Learning und innovative Organisationsentwicklung',
    bio: 'Expertin für Corporate Learning, Leadership und innovative Organisationsentwicklung. Begleitet Organisationen beim Aufbau zukunftsfähiger Lernkulturen, neuer Führungsqualitäten und moderner Zusammenarbeit.',
    imageSrc: '/experts/kristina-muth.jpg'
  },
  {
    name: 'Cansel Sörgens',
    initials: 'CS',
    role: 'Strategie, OKR, strategische Führung und wirksame Teams',
    bio: 'Begleitet Organisationen in Strategiearbeit, Leadership, Teamentwicklung und Veränderung. Verbindet OKR, strategische Führung und organisationales Coaching mit einem klaren Blick auf Umsetzung, Verantwortung und wirksame Zusammenarbeit.',
    imageSrc: '/experts/cansel-soergens.jpg'
  },
  {
    name: 'Matthias Orgler',
    initials: 'MO',
    role: 'Innovation, Automation und Softwareverständnis für Nicht-Technische',
    bio: 'Digital Innovation Manager mit Fokus auf Business Automation, messbare Innovationsprozesse, skalierbare Datenstrategien und die verständliche Übersetzung technischer Zusammenhänge für nicht-technische Rollen.',
    imageSrc: '/experts/matthias-orgler.jpeg'
  },
  {
    name: 'Patrick Kapahnke',
    initials: 'PK',
    role: 'Machine Learning und AI Systems',
    bio: 'Deep-Tech-Experte mit Fokus auf Machine Learning Engineering, den Aufbau von KI-Agenten und die intelligente Datenorchestrierung in Unternehmen.',
    imageSrc: '/experts/patrick-kapahnke.png'
  },
  {
    name: 'Rubina Kapahnke',
    initials: 'RK',
    role: 'Agile Organisationsentwicklung, Agile Leadership, Product Management und Teams',
    bio: 'Expertin für agile Organisationsentwicklung, Agile Leadership, agiles Product Management und effektive Teams. Begleitet Organisationen dabei, Zusammenarbeit, Führungsarbeit und Produktlogik so weiterzuentwickeln, dass Teams auch in dynamischen Kontexten wirksam bleiben.',
    imageSrc: '/experts/rubina-kapahnke.png'
  },
  {
    name: 'Julia Bernarding',
    initials: 'JB',
    role: 'Organisationspsychologie und systemische Beratung',
    bio: 'Expertin für Organisationspsychologie und systemische Beratung mit Fokus auf Veränderungsprozesse, Zusammenarbeit und wirksame Entwicklung in Organisationen.',
    imageSrc: '/experts/julia-bernarding.jpg'
  },
  {
    name: 'Sebastian Froede',
    initials: 'SF',
    role: 'IT-Security, Pentesting und Awareness',
    bio: 'Co-Founder, Geschäftsführer und Senior IT-Security Engineer der Pentaris Security GmbH. Seit über zehn Jahren auf ganzheitliche Sicherheitsprüfungen, Social Engineering, Penetrationstests sowie Incident Response spezialisiert.',
    credentials:
      'Referenzen u. a. IHK Bayreuth, Comconsult und BSI; TÜV-zertifizierter Awareness-Koordinator.',
    imageSrc: '/experts/sebastian-froede.jpg'
  }
];

export const LEARNER_JOURNEY: JourneyStep[] = [
  {
    step: '01',
    title: 'Ausgangslage klären',
    text: 'Zum Start wird sichtbar, welche Rollen, Aufgaben und Kompetenzlücken wirklich relevant sind und wo Lernen den größten Hebel hat.'
  },
  {
    step: '02',
    title: 'Gezielt vertiefen',
    text: 'Danach folgen kuratierte Kurse, Programme oder Sprints mit klarer fachlicher Tiefe und unmittelbarem Arbeitsbezug.'
  },
  {
    step: '03',
    title: 'In den Alltag übertragen',
    text: 'Das Gelernte bleibt nicht im Kurs. Es wird in Routinen, Entscheidungen, Artefakte und gemeinsame Standards übersetzt.'
  },
  {
    step: '04',
    title: 'Relevanz fortlaufend sichern',
    text: 'Nach dem Programm entsteht Anschlussfähigkeit durch Updates, neue Impulse und eine klarere Lernlogik für die nächsten Schritte.'
  }
];

export const PHILOSOPHY_CONTENT: PhilosophyContent = {
  eyebrow: 'Unsere Haltung',
  title: 'Fortschritt lässt sich nicht aufhalten. Aber er lässt sich besser gestalten.',
  intro:
    'Wir halten es nicht für sinnvoll, sich gegen technologische Innovation zu stemmen, als ließe sie sich zurückdrehen. KI, Automatisierung und neue Werkzeuge verändern bereits, wie Wertschöpfung, Entscheidungen und Arbeit organisiert werden. Die entscheidende Frage ist deshalb nicht, ob dieser Wandel kommt, sondern wem er nützt und wie verantwortungsvoll er begleitet wird.',
  statement:
    'Unser Anspruch ist, dass Produktivitätsgewinne nicht nur bei wenigen landen, während viele andere die Unsicherheit tragen. Wenn Technologie standardisierbare Arbeit zunehmend übernimmt, muss Wandel auch sozial, organisatorisch und bildungsseitig neu gedacht werden.',
  points: [
    {
      title: 'Innovation nicht abwehren, sondern einordnen',
      text: 'Wir helfen Menschen und Organisationen dabei, neue Technologien nüchtern zu verstehen, sinnvoll zu nutzen und ihre Wirkung auf Arbeit realistisch zu bewerten.'
    },
    {
      title: 'Fortschritt breiter wirksam machen',
      text: 'Technologischer Fortschritt sollte nicht nur Effizienz für einzelne schaffen. Er sollte dazu beitragen, dass mehr Menschen Zugang zu guter Arbeit, Entwicklung und echter Handlungsfähigkeit bekommen.'
    },
    {
      title: 'Arbeit neu verteilen und Übergänge begleiten',
      text: 'Wenn weniger menschliche Arbeit für bestimmte Aufgaben gebraucht wird, braucht es neue Antworten auf Qualifizierung, Rollenbilder, Verantwortung und die Verteilung von Arbeit. Genau diesen Übergang wollen wir mit Orientierung, Kompetenzaufbau und organisationaler Begleitung unterstützen.'
    }
  ],
  closing:
    'Darin sehen wir unsere Aufgabe: nicht Innovation zu feiern und auch nicht zu blockieren, sondern Menschen, Teams und Organisationen so durch den Wandel zu begleiten, dass aus technologischem Fortschritt mehr gesellschaftliche Anschlussfähigkeit entsteht.'
};

export const REPORT_CONTENT: ReportContent = {
  eyebrow: 'Arbeitswelt-Report',
  title: 'Woran berufliche Relevanz in den nächsten 24 Monaten hängt',
  text: 'Ein kompakter Report über Rollenverschiebungen, KI im Arbeitsalltag, neue Lernprioritäten und die Frage, welche Kompetenzen für Teams und Fachkräfte jetzt wirklich zählen.',
  cta: 'Report anfragen',
  note: 'Gedacht für Fach- und Führungskräfte, People-Verantwortliche und Unternehmen, die Kompetenzaufbau nüchtern priorisieren wollen.'
};

export const COURSE_OFFERS: CourseOffer[] = [
  {
    category: 'Transformation',
    label: 'Transformation',
    title: 'Agile Transformation Manager:in',
    duration: '6 Wochen',
    audience: 'Für Transformation, Organisation und Führung',
    text: 'Ein Rollenprogramm für Menschen, die Veränderung nicht nur moderieren, sondern in Arbeitsweisen, Verantwortung und Zusammenarbeit verankern wollen. Der Kurs zeigt, warum zukunftsrobuste Organisationen nicht nur neue Tools brauchen, sondern auch bessere Entscheidungswege, klarere Verantwortlichkeiten und kürzere Lernschleifen.',
    outcomes: [
      'agile Veränderung in reale Organisationen übersetzen',
      'Widerstände und Dynamiken besser einordnen',
      'Transformation entlang konkreter Arbeit gestalten',
      'agile Strukturen mit technologischen und fachlichen Veränderungen verbinden'
    ],
    featured: true
  },
  {
    category: 'Transformation',
    label: 'Organisation',
    title: 'Dynamikrobuste Organisationsentwicklung',
    duration: '5 Wochen',
    audience: 'Für Organisationsentwicklung, HR, Führung und Transformation',
    text: 'Ein Kurs für Menschen, die Organisationen so weiterentwickeln wollen, dass sie unter Veränderungsdruck lern- und handlungsfähig bleiben. Zukunftsrobustheit entsteht dort, wo Rollen, Entscheidungswege, Zusammenarbeit und Struktur nicht starr, aber auch nicht beliebig werden.',
    outcomes: [
      'Organisationen zwischen Stabilität und Anpassungsfähigkeit austarieren',
      'Rollen, Verantwortungen und Entscheidungslogiken klarer gestalten',
      'Veränderung entlang realer Spannungen statt abstrakter Modelle entwickeln',
      'organisationales Lernen systematischer in den Alltag übersetzen'
    ]
  },
  {
    category: 'People',
    label: 'Selbstorganisation',
    title: 'Selbstorganisation in komplexen Arbeitskontexten',
    duration: '3 Wochen',
    audience: 'Für Teams, Fachkräfte, Projektverantwortliche und Führung',
    text: 'Ein praxisnaher Kurs für Menschen, die Eigenverantwortung, Klarheit und gute Abstimmung in dynamischen Arbeitskontexten stärken wollen. Selbstorganisation ist hier kein Idealbild, sondern eine konkrete Kompetenz für Priorisierung, Transparenz und verlässliche Zusammenarbeit.',
    outcomes: [
      'Verantwortung und Selbststeuerung im Team klarer aufsetzen',
      'Prioritäten und Absprachen robuster gestalten',
      'Abhängigkeiten, Übergaben und Entscheidungsbedarf besser sichtbar machen',
      'Selbstorganisation mit realistischen Leitplanken verbinden'
    ]
  },
  {
    category: 'People',
    label: 'New Work & Collaboration',
    title: 'New Work wirksam gestalten',
    duration: '3 Wochen',
    audience: 'Für People, Kulturarbeit, Führung und moderne Teamkontexte',
    text: 'Ein Kurs für Organisationen und Verantwortliche, die New Work nicht als Schlagwort behandeln, sondern als Frage nach sinnvoller Zusammenarbeit, wirksamer Führung und zeitgemäßen Arbeitsmodellen. Im Mittelpunkt steht, was Teams heute tatsächlich produktiver, klarer und anschlussfähiger macht.',
    outcomes: [
      'New Work von Symbolik und Oberflächenrhetorik unterscheiden',
      'Zusammenarbeit, Hybridität und Verantwortung neu justieren',
      'Arbeitsmodelle an reale Anforderungen statt Moden koppeln',
      'moderne Arbeitskonzepte mit Zukunftsrobustheit verbinden'
    ]
  },
  {
    category: 'KI',
    label: 'KI & Automation',
    title: 'AI Agent Specialist:in',
    duration: '4 Wochen',
    audience: 'Für Produkt, Prozesse und Wissensarbeit',
    text: 'Ein Kurs für den sinnvollen Einsatz von AI Agents in wiederkehrenden Abläufen, Recherche, Koordination und Entscheidungsunterstützung.',
    outcomes: [
      'Agenten-Logiken und Einsatzfelder verstehen',
      'Workflows strukturiert automatisieren',
      'Qualität, Kontrolle und Grenzen sauber definieren'
    ],
    featured: true
  },
  {
    category: 'KI',
    label: 'KI & Automation',
    title: 'Business Automation Manager:in',
    duration: '5 Wochen',
    audience: 'Für Operations, Prozesse und Fachbereiche',
    text: 'Ein Rollenpfad für Menschen, die Geschäftsprozesse mit Automatisierung, KI und klaren Verantwortlichkeiten effizienter aufsetzen wollen.',
    outcomes: [
      'Automatisierungspotenziale systematisch erkennen',
      'Prozesse robuster und effizienter gestalten',
      'Mensch und Technologie sinnvoll zusammendenken'
    ]
  },
  {
    category: 'People',
    label: 'People & Learning',
    title: 'Corporate Learning Expert:in',
    duration: '4 Wochen',
    audience: 'Für L&D, HR und interne Akademien',
    text: 'Ein Programm für Menschen, die Lernen im Unternehmen wirksamer, arbeitsnäher und anschlussfähiger gestalten wollen.',
    outcomes: [
      'Lernarchitekturen mit Arbeitsbezug entwickeln',
      'Transfer statt reiner Wissensvermittlung sichern',
      'Programme an echte Kompetenzbedarfe koppeln'
    ],
    featured: true
  },
  {
    category: 'Data',
    label: 'Data & Analytics',
    title: 'Data & Analytics Expert:in',
    duration: '6 Wochen',
    audience: 'Für Fachbereiche, Analyse und Entscheidungsvorbereitung',
    text: 'Ein Kurs für Menschen, die Daten nicht nur auswerten, sondern in verständliche Entscheidungsgrundlagen und bessere Arbeitsroutinen übersetzen wollen.',
    outcomes: [
      'Datenkompetenz arbeitsnah aufbauen',
      'Analysen klarer strukturieren und kommunizieren',
      'Entscheidungen mit belastbaren Daten stützen'
    ]
  },
  {
    category: 'Transformation',
    label: 'Transformation',
    title: 'Digital Innovation & Transformation Manager:in',
    duration: '6 Wochen',
    audience: 'Für Innovation, Strategie und Transformation',
    text: 'Ein Rollenprogramm für die Verbindung aus Innovationsarbeit, digitalem Wandel und umsetzbarer Veränderung im Unternehmen.',
    outcomes: [
      'Innovationsfelder realistisch priorisieren',
      'Veränderung in tragfähige Initiativen übersetzen',
      'Technologie- und Geschäftsbezug verbinden'
    ]
  },
  {
    category: 'Product',
    label: 'Product',
    title: 'Digital Product Manager:in',
    duration: '5 Wochen',
    audience: 'Für Produktteams und digitale Geschäftsentwicklung',
    text: 'Ein Programm für Produktverantwortliche, die digitale Produkte mit Nutzerfokus, Datenverständnis und technologischem Realismus weiterentwickeln wollen.',
    outcomes: [
      'Produktentscheidungen besser priorisieren',
      'Nutzer-, Markt- und Technologielogik verbinden',
      'Produktentwicklung im Wandel stabil führen'
    ]
  },
  {
    category: 'People',
    label: 'People & Culture',
    title: 'Diversity & Inclusion Manager:in',
    duration: '4 Wochen',
    audience: 'Für HR, People und Kulturarbeit',
    text: 'Ein praxisnaher Kurs für Menschen, die Vielfalt und Inklusion nicht nur als Haltung, sondern als konkrete Führungs- und Organisationsaufgabe gestalten wollen.',
    outcomes: [
      'Inklusion in Prozesse und Führung übersetzen',
      'kulturelle Reibungen besser verstehen',
      'diversitätssensible Zusammenarbeit stärken'
    ]
  },
  {
    category: 'KI',
    label: 'KI & Strategy',
    title: 'KI-Manager:in',
    duration: '5 Wochen',
    audience: 'Für Fach- und Führungskräfte mit KI-Verantwortung',
    text: 'Ein Kurs für Menschen, die KI-Einsatz, Priorisierung, Einführung und interne Orientierung im Unternehmen verantworten oder vorbereiten.',
    outcomes: [
      'KI-Initiativen realistisch priorisieren',
      'Risiken, Nutzen und Reifegrade einordnen',
      'gemeinsame Standards für den Einsatz aufbauen'
    ]
  },
  {
    category: 'KI',
    label: 'KI & Engineering',
    title: 'Machine Learning Engineer',
    duration: '8 Wochen',
    audience: 'Für technische Rollen und datennahe Teams',
    text: 'Ein vertiefender Kurs für den Aufbau belastbarer ML-Workflows mit Fokus auf Anwendbarkeit, Qualität und verantwortungsvolle Implementierung.',
    outcomes: [
      'ML-Modelle strukturiert entwickeln',
      'Trainings- und Evaluationslogik beherrschen',
      'Anwendungen sauber in Prozesse integrieren'
    ]
  },
  {
    category: 'Data',
    label: 'Data & Revenue',
    title: 'Marketing & Sales Analyst:in',
    duration: '4 Wochen',
    audience: 'Für Marketing, Vertrieb und Revenue-Teams',
    text: 'Ein Kurs für Menschen, die Markt-, Funnel- und Vertriebsdaten wirksamer nutzen wollen, um bessere Entscheidungen zu treffen.',
    outcomes: [
      'relevante KPIs sicher lesen und priorisieren',
      'Daten in Maßnahmen übersetzen',
      'Marketing- und Sales-Logik enger verbinden'
    ]
  },
  {
    category: 'Innovation',
    label: 'Emerging Tech',
    title: 'Metaverse & Immersive Experience Manager:in',
    duration: '4 Wochen',
    audience: 'Für Innovation, Experience und neue digitale Formate',
    text: 'Ein Zukunftsprogramm für immersive Formate, räumliche Interfaces und neue Erlebnisräume jenseits bloßer Schlagworte.',
    outcomes: [
      'immersive Use Cases realistisch bewerten',
      'Technologiepotenziale mit Geschäftslogik verbinden',
      'neue Experience-Formate einordnen'
    ]
  },
  {
    category: 'Strategy',
    label: 'Strategy & Execution',
    title: 'Strategische Führung mit OKR',
    duration: '3 Wochen',
    audience: 'Für Führung, Strategie, Produkt und funktionsübergreifende Teams',
    text: 'Ein Kurs für Organisationen und Verantwortliche, die strategische Ziele nicht nur formulieren, sondern in überprüfbare Prioritäten, gemeinsame Ausrichtung und belastbare Umsetzung übersetzen wollen. Gerade in volatilen Umfeldern schafft OKR keine zusätzliche Bürokratie, sondern mehr Fokus, klarere Entscheidungen und bessere Lernzyklen. Das Format knüpft an den Arbeitskontext von Cansel Sörgens an.',
    outcomes: [
      'Objectives und Key Results sauber formulieren',
      'Prioritäten von Aktivität und Wunschlisten trennen',
      'OKR-Zyklen mit Teamarbeit, Review und Lernen verbinden',
      'strategische Ausrichtung in veränderlichen Kontexten stabilisieren'
    ]
  },
  {
    category: 'Strategy',
    label: 'Strategy & Risk',
    title: 'New Business & Risk Strategist',
    duration: '5 Wochen',
    audience: 'Für Strategie, Innovation und risikobezogene Rollen',
    text: 'Ein Kurs für Menschen, die neue Geschäftschancen entwickeln und zugleich Unsicherheit, Risiko und Verantwortung sauber bewerten müssen.',
    outcomes: [
      'neue Geschäftsfelder strukturierter prüfen',
      'Risiken im Wandel besser bewerten',
      'Strategie mit Umsetzung und Governance verbinden'
    ]
  },
  {
    category: 'Product',
    label: 'Product',
    title: 'Product Owner',
    duration: '4 Wochen',
    audience: 'Für agile Produkt- und Entwicklungsteams',
    text: 'Ein Grundlagen- und Vertiefungskurs für die Rolle zwischen Produktvision, Priorisierung, Stakeholdern und Lieferfähigkeit. Gerade in dynamischen Märkten entsteht Zukunftsrobustheit dort, wo Teams schneller lernen, sauber priorisieren und fachliche Anforderungen klar in umsetzbare Arbeit übersetzen.',
    outcomes: [
      'Backlogs klarer priorisieren',
      'Anforderungen sauber übersetzen',
      'Zusammenarbeit zwischen Fachbereich und Entwicklung verbessern',
      'Produktentscheidungen auch unter Unsicherheit tragfähig treffen'
    ]
  },
  {
    category: 'Product',
    label: 'Tech Collaboration',
    title: 'Softwareentwicklung für Nicht-Technische',
    duration: '4 Wochen',
    audience: 'Für Product Owner, Scrum Master, Agile Leader und alle, die mit Entwicklerteams arbeiten',
    text: 'Ein Kurs für Menschen, die Softwareprojekte besser verstehen und mit technischen Teams klarer zusammenarbeiten wollen, ohne selbst Entwickler:in zu sein. Im Mittelpunkt stehen Begriffe, Architektur, Qualität, technische Schulden, Delivery und Zusammenarbeit an der Schnittstelle von Fachbereich, Produkt und Entwicklung. Das Format knüpft an den Arbeitskontext von Matthias Orgler an.',
    outcomes: [
      'zentrale Konzepte der Softwareentwicklung verständlich einordnen',
      'Anforderungen, Abhängigkeiten und technische Risiken besser kommunizieren',
      'Architektur, Qualität und technische Schulden in Entscheidungen berücksichtigen',
      'Delivery, DevOps, Monitoring und Incident Management aus Zusammenarbeitssicht verstehen'
    ]
  },
  {
    category: 'Transformation',
    label: 'Scrum & Delivery',
    title: 'Scrum Master:in & agile Teamsteuerung',
    duration: '4 Wochen',
    audience: 'Für Scrum Master, Delivery-Verantwortliche und agile Teams',
    text: 'Ein praxisnaher Kurs für Menschen, die Teams nicht nur durch Rituale führen, sondern durch wirksame Zusammenarbeit, gute Moderation und belastbare Lieferfähigkeit. Zukunftsrobuste Teams entstehen dort, wo Transparenz, Fokus und kontinuierliche Verbesserung im Alltag funktionieren.',
    outcomes: [
      'Scrum-Ereignisse mit echtem Mehrwert moderieren',
      'Teamdynamiken, Blockaden und Reibungen wirksamer bearbeiten',
      'kontinuierliche Verbesserung im Arbeitsalltag verankern',
      'Lieferfähigkeit und Zusammenarbeit unter Veränderungsdruck stabilisieren'
    ]
  },
  {
    category: 'Operations',
    label: 'Service & Operations',
    title: 'IT Service Owner',
    duration: '4 Wochen',
    audience: 'Für IT, Serviceverantwortung und Plattformbetrieb',
    text: 'Ein Kurs für Menschen, die Services stabil, kundenorientiert und anschlussfähig an neue technologische Anforderungen weiterentwickeln wollen.',
    outcomes: [
      'Serviceverantwortung klarer strukturieren',
      'Qualität, Betrieb und Weiterentwicklung verbinden',
      'Schnittstellen zwischen IT und Business verbessern'
    ]
  },
  {
    category: 'Sustainability',
    label: 'Sustainability',
    title: 'Sustainability Manager:in',
    duration: '4 Wochen',
    audience: 'Für Nachhaltigkeit, Strategie und Umsetzung',
    text: 'Ein Programm für Menschen, die Nachhaltigkeit nicht nur berichten, sondern in Entscheidungen, Prozesse und Kompetenzaufbau übersetzen wollen.',
    outcomes: [
      'Nachhaltigkeit arbeitsnah operationalisieren',
      'Regulatorik und Wirkung besser einordnen',
      'Transformation mit Substanz steuern'
    ]
  },
  {
    category: 'Product',
    label: 'Experience & Design',
    title: 'UX Manager:in',
    duration: '4 Wochen',
    audience: 'Für UX, Produkt und digitale Services',
    text: 'Ein Kurs für die Verbindung aus Nutzerverständnis, Produktlogik und technologischer Machbarkeit in veränderten digitalen Kontexten.',
    outcomes: [
      'UX-Entscheidungen fundierter treffen',
      'Research, Design und Produkt besser verzahnen',
      'Nutzerbedürfnisse in robuste Lösungen übersetzen'
    ]
  },
  {
    category: 'KI',
    label: 'KI & Haltung',
    title: 'KI-Mindset: Mensch und Maschine im Einklang',
    duration: '2 Wochen',
    audience: 'Für gemischte Kohorten und Einstiegssituationen',
    text: 'Ein Einstiegskurs für den reflektierten Umgang mit KI zwischen Produktivität, Verantwortung und menschlicher Urteilskraft.',
    outcomes: [
      'KI nüchtern und ohne Angst einordnen',
      'eigene Haltung und Nutzung klären',
      'Zusammenspiel von Mensch und Maschine besser verstehen'
    ]
  },
  {
    category: 'Leadership',
    label: 'Agile Leadership',
    title: 'Die Rolle des Agile Leaders',
    duration: '8 Wochen',
    audience: 'Für Agile Leader, Führungskräfte, Scrum Master, Product Leads und Transformationsverantwortliche',
    text: 'Ein vertiefendes Programm für Menschen, die Führung in agilen Organisationen nicht nur methodisch, sondern wirksam verstehen wollen. Der Kurs verbindet Führungsmodelle, psychologische Sicherheit, Delegation, Stakeholderführung, Vision, OKR, Organisationsentwicklung, Change, Produktlogik und Teamentwicklung zu einem klaren Rollenbild für dynamische Arbeitskontexte. Das Format knüpft an den Arbeitskontext von Rubina Kapahnke an.',
    outcomes: [
      'die Rolle des Agile Leaders gegenüber Scrum Master, Agile Coach und klassischem Management klar einordnen',
      'Führung, Delegation, psychologische Sicherheit und Stakeholderarbeit in agilen Kontexten wirksam gestalten',
      'Vision, OKR, Produktziele, Organisationsentwicklung und Change zusammen denken',
      'Teams, Selbstorganisation, Performance und Zusammenarbeit unter Dynamik robuster entwickeln'
    ],
    featured: true
  },
  {
    category: 'Leadership',
    label: 'Leadership & Innovation',
    title: 'Innovatives Leadership',
    duration: '4 Monate',
    audience: 'Für neue und erfahrene Führungskräfte',
    text: 'Ein vertiefendes Programm für Führung in Arbeitskontexten, die von Agilität, Innovation und Veränderung geprägt sind. Im Mittelpunkt stehen nicht Schlagworte, sondern die Frage, wie Führung Vertrauen, Befähigung, Fehlerkultur und handlungsfähige Teams so gestaltet, dass Organisationen auch unter Dynamik robust bleiben. Das Format knüpft an den Arbeitskontext von Kristina Muth an.',
    outcomes: [
      'die eigene Führungsrolle im agilen und innovativen Umfeld schärfen',
      'Agilität, Innovation und Kultur mit realem Arbeitskontext verbinden',
      'Methoden wie OKR, Scrum und Design Thinking sinnvoll einordnen',
      'ein eigenes Praxisprojekt für den beruflichen Kontext entwickeln'
    ],
    featured: true
  },
  {
    category: 'Leadership',
    label: 'Leadership & KI',
    title: 'Ready for KI: Kompetenzprogramm für Führungskräfte',
    duration: '4 Wochen',
    audience: 'Für erfahrene und aufstrebende Führungskräfte',
    text: 'Ein Führungsprogramm für die Frage, was Leitung in einer Arbeitswelt mit KI, Automatisierung und neuen Entscheidungslogiken konkret braucht.',
    outcomes: [
      'KI im Führungsalltag sinnvoll einordnen',
      'Teams bei Veränderung besser begleiten',
      'Orientierung statt Alarmismus schaffen'
    ],
    featured: true
  },
  {
    category: 'Leadership',
    label: 'Leadership',
    title: 'Leadership Performance für erfahrene Führungskräfte',
    duration: '5 Wochen',
    audience: 'Für erfahrene Führungskräfte',
    text: 'Ein Qualifizierungsprogramm für wirksamere Führung unter komplexeren Bedingungen, mit Fokus auf Priorisierung, Kommunikation und Verantwortung.',
    outcomes: [
      'Führung in dynamischen Kontexten schärfen',
      'Entscheidungsqualität verbessern',
      'Leistungsfähigkeit ohne Aktionismus sichern'
    ]
  },
  {
    category: 'Leadership',
    label: 'Leadership',
    title: 'Leadership für neue Führungskräfte',
    duration: '4 Wochen',
    audience: 'Für neue oder angehende Führungskräfte',
    text: 'Ein Grundlagenprogramm für den Übergang in Führung mit klarem Fokus auf Rolle, Kommunikation, Teamführung und Selbststeuerung.',
    outcomes: [
      'die eigene Führungsrolle sicherer ausfüllen',
      'Feedback und Kommunikation verbessern',
      'Teams klarer führen und priorisieren'
    ]
  },
  {
    category: 'Transformation',
    label: 'Projektarbeit',
    title: 'Agiles Projektmanagement: Basics',
    duration: '2 Wochen',
    audience: 'Für Projektverantwortliche und Einsteiger:innen',
    text: 'Ein kompakter Basiskurs für agile Projektlogik, Zusammenarbeit in Iterationen und realistische Steuerung unter Unsicherheit. Der Kurs macht deutlich, warum Zukunftsrobustheit nicht nur an Technologie hängt, sondern auch daran, wie Projekte priorisiert, abgestimmt und lernfähig geführt werden.',
    outcomes: [
      'agile Grundlagen sicher verstehen',
      'Projekte besser strukturieren',
      'Abstimmungen und Verantwortlichkeiten klären',
      'mit kurzen Feedbackschleifen verlässlicher steuern'
    ]
  },
  {
    category: 'KI',
    label: 'KI Basics',
    title: 'KI Basics & Prompt Engineering',
    duration: '2,5 Stunden',
    audience: 'Für Einsteiger:innen, Creator, Selbstständige und Wissensarbeit',
    text: 'Ein kompakter Einstieg in ChatGPT, Prompting und eine kuratierte Auswahl an KI-Tools für Text, Audio, Präsentationen, Visuals und einfache Automatisierung. Der Kurs zeigt, wie man Modelle gezielt steuert, Ergebnisse besser prüft und sinnvolle Workflows für Alltag, Projekte und Content-Arbeit aufsetzt.',
    outcomes: [
      'ChatGPT gezielt einsetzen und Prompts klar strukturieren',
      'mehrstufige Prompts entwickeln und schwache Ergebnisse verbessern',
      'Tools für Audio, Video, Avatare, Bilder und 3D passend zum Anwendungsfall auswählen',
      'eine kuratierte Auswahl von KI-Tools sinnvoll in den eigenen Workflow integrieren'
    ],
    featured: true
  },
  {
    category: 'Data',
    label: 'Data & Decision',
    title: 'Data Literacy für Fach- und Führungskräfte',
    duration: '2 Wochen',
    audience: 'Für Führung, Fachbereiche und Schnittstellen',
    text: 'Ein Ergänzungsprogramm für den besseren Umgang mit Daten, Metriken und Entscheidungsvorbereitung jenseits von Buzzwords.',
    outcomes: [
      'Kennzahlen sicherer lesen',
      'Datenqualität besser einschätzen',
      'datenbasierte Entscheidungen klarer vorbereiten'
    ]
  },
  {
    category: 'KI',
    label: 'Governance',
    title: 'KI-Governance und verantwortlicher Einsatz',
    duration: '3 Wochen',
    audience: 'Für Führung, Compliance und Programmverantwortung',
    text: 'Ein ergänzender Kurs für Organisationen, die KI nicht nur einführen, sondern verantwortungsvoll, nachvollziehbar und belastbar steuern wollen.',
    outcomes: [
      'Leitplanken und Verantwortlichkeiten definieren',
      'Risiken und Qualitätsanforderungen strukturieren',
      'Governance mit realer Nutzung verbinden'
    ]
  },
  {
    category: 'Cybersecurity',
    label: 'Cybersecurity',
    title: 'Darknet Essentials',
    duration: '1 Tag',
    audience: 'Für Security, Compliance, Forensik und Risikoverantwortung',
    text: 'Ein kompakter Workshop für ein fundiertes Verständnis von Darknet-Strukturen, technischen Grundlagen, kriminellen Ökosystemen sowie deren Relevanz für Unternehmensschutz und Threat Intelligence.',
    outcomes: [
      'Darknet, Deep Web und Surface Web sauber unterscheiden',
      'Risiken, Marktmechanismen und Bedrohungslagen besser einordnen',
      'Darknet-bezogene Funde im Unternehmenskontext strukturierter bewerten'
    ]
  },
  {
    category: 'Cybersecurity',
    label: 'Incident Response',
    title: 'Incident Response Essentials',
    duration: '2 Tage',
    audience: 'Für IT, First Responder und technische Verantwortung',
    text: 'Ein praxisorientiertes Training für den strukturierten Umgang mit Cybervorfällen von Erkennung und Sofortmaßnahmen bis zu Übergabe, Dokumentation und Eskalation.',
    outcomes: [
      'typische Angriffsszenarien früher erkennen',
      'erste Maßnahmen bei Incidents strukturiert einleiten',
      'Spuren, Kommunikation und Eskalation professioneller handhaben'
    ]
  },
  {
    category: 'Cybersecurity',
    label: 'OT / ICS',
    title: 'OT/ICS Security Bootcamp',
    duration: '3 Tage',
    audience: 'Für OT, Industrial Security, Produktion und Audit',
    text: 'Ein intensives Bootcamp zu industriellen Netzwerken, Steuerungssystemen und OT-Security mit Fokus auf Angriffssimulationen, Härtung und Incident Response in produktionsnahen Umgebungen.',
    outcomes: [
      'OT- und ICS-Architekturen technisch besser verstehen',
      'typische OT-Angriffsvektoren und Schwachstellen erkennen',
      'Sicherheitsmaßnahmen für industrielle Umgebungen gezielter ableiten'
    ]
  },
  {
    category: 'Cybersecurity',
    label: 'Awareness',
    title: 'Security Awareness: Think Before You Click',
    duration: '1,5 bis 4 Stunden',
    audience: 'Für Mitarbeitende, Onboarding und sensible Funktionen',
    text: 'Ein alltagstaugliches Awareness-Training für Phishing, Social Engineering, Passwortsicherheit, sichere Datennutzung und praktische Cyberhygiene im Unternehmen.',
    outcomes: [
      'Phishing und Social Engineering verlässlicher erkennen',
      'sicherer mit Passwörtern, Daten und Unternehmenssystemen umgehen',
      'menschliche Risiken im Arbeitsalltag deutlich reduzieren'
    ]
  },
  {
    category: 'Cybersecurity',
    label: 'Bootcamp',
    title: 'Cyber Bootcamp: Einstieg ins Ethical Hacking',
    duration: '5 Tage',
    audience: 'Für IT-Fachkräfte, Security-Einstieg und Quereinstieg',
    text: 'Ein intensives Einsteigerseminar in Ethical Hacking und IT-Sicherheit mit Fokus auf Reconnaissance, Exploitation, Web-Security, Post-Exploitation und Reporting.',
    outcomes: [
      'Schwachstellen systematischer erkennen und bewerten',
      'Methodik und Mindset des Ethical Hackings verstehen',
      'Angriffsszenarien praktisch nachvollziehen und besser absichern'
    ]
  }
];

export const HERO_CONTENT: HeroContent = {
  eyebrow: 'Praxisnahe Weiterbildung für eine veränderte Arbeitswelt',
  title: 'Kompetenzen, die Menschen und Teams',
  accent: 'relevant halten.',
  description:
    'Stay Relevant Academy hilft Menschen und Organisationen dabei, in einer sich wandelnden Arbeitswelt anschlussfähig, handlungsfähig und wertvoll zu bleiben. Mit klaren Lernpfaden, echter Praxisnähe und einem nüchternen Blick auf KI, Automatisierung und neue Formen der Arbeit.',
  primaryCta: {
    label: 'Programme entdecken',
    href: '#angebote'
  },
  secondaryCta: {
    label: 'Gespräch anfragen',
    href: '#kontakt'
  },
  stats: [
    {
      value: '90 Min bis 8 Wochen',
      label: 'Formate mit passender Tiefe',
      detail: 'Vom kompakten Impuls bis zum strukturierten Lernpfad.'
    },
    {
      value: 'Rollenorientiert',
      label: 'Lernen entlang realer Aufgaben',
      detail: 'Nicht abstrakt, sondern nah an Verantwortung und Arbeitsalltag.'
    },
    {
      value: 'Mensch plus Technologie',
      label: 'Kompetenzaufbau mit Augenmaß',
      detail: 'Weder Technikromantik noch Abwehrhaltung.'
    }
  ],
  signals: [
    {
      title: 'Praxisnah statt Trendfolie',
      text: 'Die entscheidende Frage ist nicht, ob sich Arbeit verändert. Sondern ob Lernen endlich konkret genug wird.'
    },
    {
      title: 'Technologie mit Augenmaß',
      text: 'Wo Technologie hilft, wie Qualität gesichert wird und welche Verantwortung bei Menschen bleibt.'
    },
    {
      title: 'Wirkung im Arbeitsalltag',
      text: 'Mit Kompetenzen, die heute nützlich sind und morgen nicht sofort veralten.'
    }
  ]
};

export const CHALLENGE_CONTENT: ChallengeContent = {
  eyebrow: 'Warum das wichtig ist',
  title: 'Viele spüren den Wandel. Wenige bekommen klare Lernorientierung.',
  intro:
    'KI, Automatisierung und veränderte Anforderungen verschieben Aufgabenprofile schneller, als viele Weiterbildungen darauf reagieren. Zwischen Hype, Unsicherheit und Tool-Flut fehlt oft die einfache Antwort auf die Frage: Was sollte ich jetzt konkret lernen, damit meine Arbeit anschlussfähig bleibt? Genau in dieser Lücke entstehen der Druck, technologisch nichts verpassen zu dürfen, und die Sorge, mit der eigenen Rolle beruflich an Bedeutung zu verlieren.',
  cards: [
    {
      title: 'Arbeit verändert sich im Detail',
      text: 'Nicht nur Berufe verändern sich, sondern Tätigkeiten, Verantwortungen, Entscheidungswege und Qualitätsstandards innerhalb bestehender Rollen.'
    },
    {
      title: 'Zwischen Veränderungsdruck und Zukunftssorge',
      text: 'Viele erleben den Wandel entweder als Druck, ständig noch ein Tool lernen zu müssen, oder als diffuse Angst, mit der eigenen Rolle nicht mehr gebraucht zu werden. Beides erschwert klare Lernentscheidungen.'
    },
    {
      title: 'Weiterbildung bleibt häufig zu abstrakt',
      text: 'Zu viel Theorie, zu wenig Arbeitsbezug. Genau dort entsteht die Lücke zwischen gut gemeinter Bildung und echter beruflicher Wirkung.'
    }
  ],
  outcomes: [
    'welche Kompetenzen in realen Rollen an Gewicht gewinnen',
    'wie aus Veränderungsdruck und Zukunftssorge wieder Orientierung und Handlungsfähigkeit werden',
    'wie Menschen mit KI sinnvoll arbeiten, ohne Spezialfall zu werden',
    'wie digitale Zusammenarbeit, Veränderungsfähigkeit und Urteilskraft aufgebaut werden'
  ]
};

export const PILLARS: Pillar[] = [
  {
    label: 'AI Readiness',
    title: 'Souverän mit KI arbeiten',
    text: 'Verstehen, wo KI produktiv hilft, wo Grenzen liegen und wie Qualität, Verantwortung und Arbeitsabläufe sauber gesteuert werden.',
    outcomes: [
      'KI in Wissensarbeit sinnvoll einsetzen',
      'Prompts, Prüfmechanismen und Routinen aufbauen',
      'Chancen und Risiken realistisch einordnen'
    ]
  },
  {
    label: 'Human Skills',
    title: 'Menschliche Stärken systematisch ausbauen',
    text: 'Kommunikation, Urteilskraft, Zusammenarbeit und Lernfähigkeit bleiben nicht abstrakt, sondern werden konkret trainierbar gemacht.',
    outcomes: [
      'Klarer kommunizieren und besser priorisieren',
      'Komplexität strukturieren',
      'Mit Unsicherheit professionell umgehen'
    ]
  },
  {
    label: 'Digital Work',
    title: 'Digitale Zusammenarbeit verbessern',
    text: 'Moderne Arbeit braucht saubere Übergaben, klare Informationsflüsse und einen produktiven Umgang mit Tools, Kanälen und Wissensarbeit.',
    outcomes: [
      'Meetings und Abstimmungen wirksamer gestalten',
      'Informationsarbeit reduzieren',
      'Digitale Routinen robust aufsetzen'
    ]
  },
  {
    label: 'Change Competence',
    title: 'Veränderung handhabbar machen',
    text: 'Menschen und Teams lernen, Wandel nicht nur zu verstehen, sondern ihn in Entscheidungen, Kommunikation und Verhalten zu übersetzen.',
    outcomes: [
      'Veränderung verständlich machen',
      'Widerstände besser einordnen',
      'Transfer in den Alltag sichern'
    ]
  },
  {
    label: 'Future Skills',
    title: 'Berufliche Anschlussfähigkeit sichern',
    text: 'Welche Fähigkeiten langfristig tragfähig bleiben und wie man sie sinnvoll in die eigene Rolle integriert, statt blind Trends hinterherzulaufen.',
    outcomes: [
      'Rollenveränderungen früh erkennen',
      'Lernprioritäten sauber setzen',
      'Beschäftigungsfähigkeit aktiv sichern'
    ]
  }
];

export const FORMATS: FormatCard[] = [
  {
    title: 'Lernpfade',
    duration: 'Mehrwöchig',
    text: 'Strukturierte Programme für Menschen, die sich in einem Themenfeld fundiert weiterentwickeln und das Gelernte direkt auf ihre eigene Arbeit übertragen wollen.',
    bullets: [
      'Für Einzelpersonen oder definierte Zielgruppen',
      'Mit klaren Lernzielen statt losem Kurskatalog',
      'Geeignet für systematischen Kompetenzaufbau'
    ]
  },
  {
    title: 'Rollenbasierte Programme',
    duration: '2 bis 6 Wochen',
    text: 'Formate für Rollen, die sich spürbar verändern, etwa in Führung, Produkt, Transformation, HR oder Wissensarbeit.',
    bullets: [
      'Berücksichtigt reale Aufgabenprofile und Verantwortungen',
      'Verbindet Fachkontext mit Zukunftskompetenzen',
      'Hilft bei klarer Priorisierung'
    ]
  },
  {
    title: 'Unternehmensprogramme',
    duration: 'Modular',
    text: 'Für Unternehmen, die Kompetenzaufbau nicht als Einzelmaßnahme behandeln, sondern mit Rollen, Prioritäten, Führung und Umsetzung verbinden wollen.',
    bullets: [
      'Von kompakten Programmen bis zur internen Lernarchitektur',
      'Mit Fokus auf Transfer in Prozesse, Zusammenarbeit und Entscheidungen',
      'Inhalte abgestimmt auf Kontext, Zielbild und Reifegrad'
    ]
  },
  {
    title: 'Beratung & Standortbestimmung',
    duration: '90 Min bis 2 Tage',
    text: 'Kompakte Beratungsformate für Organisationen, die erst klären müssen, wo sie stehen, welche Kompetenzlücken relevant sind und was der richtige nächste Schritt ist.',
    bullets: [
      'Ideal für Startpunkte, Priorisierung und Entscheidungsreife',
      'Gut geeignet bei unklaren Erwartungen, vielen Einzelinitiativen oder diffusem KI-Druck',
      'Schafft Orientierung für Programm, Beratung oder beides'
    ]
  },
  {
    title: 'Praxisnahe Lernformate',
    duration: 'Flexibel',
    text: 'Workshops, Cases, Sparring und Übungen mit direktem Bezug zu realer Arbeit, nicht zu Lehrbuchszenarien.',
    bullets: [
      'Weniger Folien, mehr Anwendung',
      'Mit Artefakten, Vorlagen und Routinen',
      'So gebaut, dass Lernen im Alltag anschlussfähig bleibt'
    ]
  },
  {
    title: 'Beratung & Sparring',
    duration: 'Projektbezogen',
    text: 'Für Unternehmen, Führungsteams und Verantwortliche, die nicht nur schulen wollen, sondern Unterstützung bei Zielbild, Rollen, Lernarchitektur, KI-Einordnung oder Veränderungsbegleitung brauchen.',
    bullets: [
      'Zum Beispiel bei Kompetenzstrategie, Programmaufbau oder Führungsfragen',
      'Verbindet Diagnose, Priorisierung und konkrete nächste Schritte',
      'Kann eigenständig laufen oder mit Programmen kombiniert werden'
    ]
  }
];

export const AUDIENCES: AudienceCard[] = [
  {
    title: 'Einzelpersonen',
    text: 'Für Menschen, die ihre Beschäftigungsfähigkeit bewusst sichern und verstehen wollen, welche Kompetenzen in ihrer Rolle jetzt wirklich zählen.',
    needs: [
      'Klarheit, welche Kompetenzen sich lohnen',
      'Praxisnahe Lernformate statt Stofffülle',
      'Orientierung für den eigenen nächsten Schritt'
    ]
  },
  {
    title: 'Fach- und Führungskräfte',
    text: 'Für Rollen, in denen Entscheidungen, Zusammenarbeit, Führungslogik und technologische Anforderungen spürbar in Bewegung geraten.',
    needs: [
      'KI und neue Arbeitsweisen sinnvoll einordnen',
      'Teams im Wandel besser führen',
      'Zwischen Fachlichkeit und Zukunftsfähigkeit navigieren'
    ]
  },
  {
    title: 'Unternehmen',
    text: 'Für Organisationen, die merken, dass sich Arbeit schneller verändert als interne Qualifizierung, Führung und Zusammenarbeit hinterherkommen. Oft gibt es bereits Initiativen, Tools oder Schulungen, aber noch keine gemeinsame Richtung.',
    needs: [
      'KI wird bereits genutzt, aber Standards, Prioritäten und Verantwortlichkeiten sind unklar',
      'Führungskräfte sollen Wandel begleiten, ohne ein gemeinsames Bild davon zu haben, was jetzt wichtig ist',
      'Es gibt Schulungen, aber kaum Transfer in Rollen, Prozesse und Zusammenarbeit',
      'HR, Fachbereiche und Führung brauchen Beratung, welche Kompetenzen jetzt wirklich relevant sind',
      'Einzelne Teams arbeiten vor, aber eine anschlussfähige Lern- und Umsetzungslogik fehlt'
    ]
  },
  {
    title: 'Menschen in Neuorientierung',
    text: 'Für Menschen, die sich beruflich neu aufstellen und marktrelevante Weiterbildung suchen, die nicht an der Realität bestehender Rollen vorbeigeht.',
    needs: [
      'Konkrete, arbeitsmarktnahe Lernprioritäten',
      'Bessere Einordnung eigener Stärken',
      'Mehr Anschlussfähigkeit statt blindem Umschulen'
    ]
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: 'Kompetenzbedarf klären',
    text: 'Welche Rollen verändern sich wirklich, welche Kompetenzen fehlen schon heute und wo lohnt sich Qualifizierung tatsächlich?'
  },
  {
    title: 'KI sinnvoll einordnen',
    text: 'Wo schafft KI echte Entlastung, wo braucht es Standards, Qualitätssicherung und klare Verantwortung und was ist im jeweiligen Kontext nur Ablenkung?'
  },
  {
    title: 'Führung und Teams ausrichten',
    text: 'Wenn sich Arbeit verändert, müssen auch Rollen, Entscheidungswege, Zusammenarbeit und Führung nachziehen. Genau dabei unterstützen wir.'
  },
  {
    title: 'Lernen mit Umsetzung verbinden',
    text: 'Wir helfen dabei, aus einzelnen Kursen, Programmen oder Beratungsformaten eine Logik zu machen, die im Arbeitsalltag tatsächlich Wirkung entfaltet.'
  }
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    common: 'Tool-Hype ohne Bezug zur eigentlichen Arbeit',
    stayRelevant: 'Lernen entlang realer Aufgaben, Entscheidungen und Teamkontexte'
  },
  {
    common: 'Allgemeine Future-Skills-Listen ohne Priorität',
    stayRelevant: 'Klarer Fokus auf die Kompetenzen, die in konkreten Rollen Wirkung entfalten'
  },
  {
    common: 'Einmalige Wissensvermittlung ohne Transfer',
    stayRelevant: 'Formate mit Anwendung, Reflexion und Übertragung in den Alltag'
  },
  {
    common: 'Entweder Technik-Euphorie oder Technik-Abwehr',
    stayRelevant: 'Nüchterner Umgang mit Technologie und bewusste Stärkung menschlicher Fähigkeiten'
  }
];

export const PROOF_STATS: StatItem[] = [
  {
    value: 'Vom Sprint bis zum Rollenprogramm',
    label: 'Passende Tiefe statt Einheitsformat',
    detail: 'Je nach Zielbild als kompakter Einstieg, mehrwöchiger Lernpfad oder modularer Unternehmensbaustein.'
  },
  {
    value: 'Einzelne Rollen oder ganze Teams',
    label: 'Skalierbar im Zuschnitt',
    detail: 'Vom individuellen Kompetenzaufbau bis zur teamweiten Lernarchitektur mit gemeinsamer Sprache.'
  },
  {
    value: 'Artefakte statt Absicht',
    label: 'Konkrete Ergebnisse im Prozess',
    detail: 'Zum Beispiel Arbeitsroutinen, Anwendungsfälle, Leitplanken, Vorlagen und gemeinsame Begriffe.'
  }
];

export const PROOF_CARDS: ProofCard[] = [
  {
    title: 'Ein realistischer Einstieg: KI in der Wissensarbeit',
    text: 'Ein typischer Pfad für Fachbereiche, die verstehen wollen, wo KI produktiv unterstützt und wo menschliche Prüfung entscheidend bleibt.',
    points: [
      'Aufgabenanalyse entlang realer Arbeitsprozesse',
      'Übungen für Prompting, Bewertung und Qualitätssicherung',
      'Transfer in eigene Routinen und Teamstandards'
    ]
  },
  {
    title: 'Was nach einem guten Programm sichtbar wird',
    text: 'Nicht nur mehr Wissen, sondern eine bessere Handhabung von Veränderung, Tools und Arbeitsentscheidungen.',
    points: [
      'Klarere Lernprioritäten und gemeinsames Vokabular',
      'Bessere Routinen in digitaler Zusammenarbeit',
      'Mehr Sicherheit im Umgang mit neuen Technologien'
    ]
  },
  {
    title: 'Wie das in Teams und Organisationen wirkt',
    text: 'Teams gewinnen nicht nur Orientierung, sondern eine belastbare Grundlage für Entscheidungen und Kompetenzentwicklung.',
    points: [
      'Weniger Reibung durch unklare Erwartungen',
      'Realistische Einordnung von KI-Anwendungsfällen',
      'Mehr Anschlussfähigkeit zwischen Strategie und Alltag'
    ]
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Muss ich bereits mit KI arbeiten, um von den Programmen zu profitieren?',
    answer:
      'Nein. Die Programme sind so angelegt, dass Menschen auch ohne tiefe Vorerfahrung einen fundierten Zugang bekommen. Entscheidend ist nicht Techniknähe, sondern die Bereitschaft, die eigene Arbeit neu einzuordnen und sinnvoll weiterzuentwickeln.'
  },
  {
    question: 'Geht es eher um technische Skills oder eher um Soft Skills?',
    answer:
      'Beides greift ineinander. Stay Relevant Academy trennt Technologieverständnis nicht von Urteilskraft, Kommunikation oder Veränderungsfähigkeit. Relevanz entsteht dort, wo Werkzeuge, Arbeitsweise und menschliche Fähigkeiten zusammenpassen.'
  },
  {
    question: 'Wie konkret sind die Inhalte auf unseren Arbeitsalltag zugeschnitten?',
    answer:
      'Gerade das ist ein Kernunterschied. Inhalte werden nicht als allgemeiner Trendvortrag angelegt, sondern entlang von Rollen, Aufgaben, Entscheidungslogiken und typischen Reibungspunkten in der Arbeit.'
  },
  {
    question: 'Sind die Angebote für Einzelpersonen und Unternehmen gleichermaßen gedacht?',
    answer:
      'Ja. Die Grundlogik bleibt gleich, der Zuschnitt verändert sich. Einzelpersonen brauchen meist Orientierung und priorisierte Lernpfade. Unternehmen brauchen darüber hinaus oft Beratung zu Kompetenzbedarf, Rollen, Prioritäten, Führung und der Frage, wie Lernen tatsächlich in den Arbeitsalltag übersetzt wird.'
  },
  {
    question: 'Gibt es Zertifikate?',
    answer:
      'Wenn sinnvoll, können Teilnahme- oder Abschlussnachweise ergänzt werden. Im Zentrum steht jedoch nicht das Zertifikat, sondern die Frage, ob Menschen danach relevanter arbeiten, klarer entscheiden und besser mit Wandel umgehen können.'
  },
  {
    question: 'Wie startet eine Zusammenarbeit typischerweise?',
    answer:
      'Oft beginnt sie mit einem strukturierten Gespräch oder einer kompakten Standortbestimmung. Daraus wird sichtbar, ob ein Kurs, ein Programm, ein Beratungsformat oder eine Kombination daraus der sinnvollste nächste Schritt ist.'
  }
];
