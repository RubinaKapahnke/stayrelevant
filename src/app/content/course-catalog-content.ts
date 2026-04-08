import { CourseLandingPageContent } from './course-landing-content';
import { COURSE_OFFERS, CourseOffer } from './home-content';

export const EXTRA_COURSE_OFFERS: CourseOffer[] = [
  {
    category: 'Transformation',
    label: 'Kultur & Organisation',
    title: 'Systemische Kulturentwicklung',
    duration: '4 Wochen',
    audience: 'Für People, Führung, OE und Transformation',
    text: 'Ein Kurs für Menschen, die Kultur nicht als Kampagne, sondern als Ergebnis von Strukturen, Führungsverhalten, Ritualen und Entscheidungen verstehen wollen. Im Mittelpunkt steht, wie kulturelle Muster unter Veränderungsdruck sichtbar werden und wie systemische Kulturentwicklung konkret ansetzen kann.',
    outcomes: [
      'Kultur im Zusammenspiel mit Struktur, Führung und Routinen betrachten',
      'systemische Muster und wiederkehrende Spannungen erkennen',
      'wirksame Hebel für Kulturentwicklung im Alltag ableiten',
      'Kulturarbeit mit Veränderung und Zukunftsrobustheit verbinden'
    ]
  },
  {
    category: 'Transformation',
    label: 'Agile Prinzipien',
    title: 'Agile Prinzipien in der Praxis',
    duration: '2 Wochen',
    audience: 'Für Teams, Führung und Projektkontexte',
    text: 'Ein Kurs für Menschen, die agile Prinzipien jenseits von Ritualen und Methoden verstehen und in realer Zusammenarbeit anwenden wollen. Es geht um Feedback, Transparenz, kurze Lernzyklen, klare Priorisierung und den Umgang mit Unsicherheit.',
    outcomes: [
      'agile Prinzipien von Tool- und Framework-Denken unterscheiden',
      'Lernzyklen, Priorisierung und Transparenz im Alltag verbessern',
      'Scrum, Kanban oder OKR auf gemeinsame Prinzipien zurückführen',
      'agile Zusammenarbeit in realen Teamkontexten robuster gestalten'
    ]
  },
  {
    category: 'People',
    label: 'Teams & Zusammenarbeit',
    title: 'Dynamikresiliente Teams entwickeln',
    duration: '3 Wochen',
    audience: 'Für Führung, Teamleads und People-Verantwortliche',
    text: 'Ein Kurs für Menschen, die Teams so aufstellen wollen, dass sie unter Unsicherheit nicht in Aktionismus, Lähmung oder Verantwortungsdiffusion kippen. Im Mittelpunkt stehen psychologische Sicherheit, klare Entscheidungslogik, Selbstorganisation und belastbare Zusammenarbeit.',
    outcomes: [
      'Teamdynamiken unter Druck besser lesen',
      'Selbstorganisation mit klaren Rollen und Leitplanken verbinden',
      'Verantwortungsdiffusion und stillen Rückzug früh erkennen',
      'Teams in volatilen Kontexten arbeitsfähig halten'
    ]
  },
  {
    category: 'Leadership',
    label: 'Entscheidung & Führung',
    title: 'Ambiguitätsresilienz und Entscheiden unter Unsicherheit',
    duration: '2 Wochen',
    audience: 'Für Führung, Projektverantwortliche und Schnittstellenrollen',
    text: 'Ein Kurs für Menschen, die in mehrdeutigen Situationen entscheiden müssen, ohne auf Scheinsicherheit oder Daueranalyse auszuweichen. Ambiguitätsresilienz bedeutet hier, Widersprüche auszuhalten, Hypothesen zu bilden und trotzdem handlungsfähig zu bleiben.',
    outcomes: [
      'Ambiguität von Komplexität und Chaos unterscheiden',
      'unter Unsicherheit strukturierter entscheiden',
      'Spannungen, Zielkonflikte und unvollständige Informationen besser bearbeiten',
      'Ruhe, Urteilskraft und Handlungsfähigkeit im Wandel stärken'
    ]
  },
  {
    category: 'People',
    label: 'Ownership & Zusammenarbeit',
    title: 'Verantwortungsdiffusion vermeiden',
    duration: '2 Wochen',
    audience: 'Für Führung, Teams und funktionsübergreifende Zusammenarbeit',
    text: 'Ein Kurs für Organisationen und Teams, in denen vieles wichtig ist, aber zu vieles zwischen Rollen, Gremien und Schnittstellen hängen bleibt. Im Mittelpunkt stehen Ownership, klare Zuständigkeiten, gute Übergaben und verlässliche Entscheidungsmechaniken.',
    outcomes: [
      'unklare Verantwortungen sichtbar machen',
      'Ownership, Delegation und Entscheidungsrechte sauber klären',
      'Schnittstellen und Übergaben robuster gestalten',
      'Verantwortung im Team und zwischen Bereichen verbindlicher machen'
    ]
  }
];

export const LANDING_PAGE_COURSE_OFFERS: CourseOffer[] = [
  {
    category: 'Transformation',
    label: 'Agile Coaching',
    title: 'Agile Coaching mit KI in agilen Organisationen',
    duration: 'Mehrwöchig',
    audience: 'Für Agile Coaches, Scrum Master, Agile Leads und Transformation',
    text: 'Eine Weiterbildung für Agile Coaching, Scrum, Facilitation und Organisationsentwicklung unter Einbezug von KI. Im Mittelpunkt stehen lernende Organisationen, wirksame Teamarbeit und die Begleitung von Veränderungsprozessen.',
    outcomes: [
      'Agile Coaching und Facilitation in Teams und Organisationen wirksam einsetzen',
      'Retrospektiven, Workshops und Veränderungsprozesse strukturierter begleiten',
      'Kanban, Wertorientierung und Skalierung im Organisationskontext einordnen',
      'KI gezielt für Reflexion, Dokumentation und Coaching-Unterstützung nutzen'
    ]
  },
  {
    category: 'Transformation',
    label: 'Projektmanagement',
    title: 'Agiles Projektmanagement mit KI und Scrum',
    duration: '8 Wochen',
    audience: 'Für Projektleitende, Scrum Master, Product Owner und Fachführung',
    text: 'Diese Weiterbildung verbindet KI, agile Projektarbeit und Scrum in einem praxisnahen Format. Im Fokus stehen Projektsteuerung unter Unsicherheit, digitale Werkzeuge und die sinnvolle Integration von KI in Projektabläufe.',
    outcomes: [
      'KI im Projektkontext fundiert und verantwortungsvoll einsetzen',
      'Scrum als Rahmen für komplexe Projektumfelder anwenden',
      'Digitale Projektwerkzeuge in Planung, Steuerung und Dokumentation nutzen',
      'Zertifizierungsrelevante Grundlagen für Scrum.org aufbauen'
    ]
  },
  {
    category: 'Transformation',
    label: 'Projektmanagement',
    title: 'Agiles Projektmanagement und Grundlagen des Projektmanagements mit Scrum und KI',
    duration: '8 Wochen',
    audience: 'Für Projektleitende, Fachkräfte, Scrum Master und Product Owner',
    text: 'Ein praxisnaher Kurs, der klassisches Projektmanagement mit agilem Projektmanagement, Scrum und KI verbindet. Geeignet für Menschen, die Projekte strukturierter planen, steuern und in dynamischen Kontexten sicherer führen wollen.',
    outcomes: [
      'Projektmanagement-Grundlagen mit agilen Vorgehensweisen verbinden',
      'Scrum, Priorisierung und Stakeholder-Management im Projektalltag anwenden',
      'KI für Analyse, Dokumentation und Kommunikation im Projektkontext nutzen',
      'Projektarbeit in dynamischen Arbeitsumfeldern robuster strukturieren'
    ]
  },
  {
    category: 'Product',
    label: 'Product Ownership',
    title: 'Product Ownership, Backlog Management und KI in Scrum',
    duration: '8 Wochen',
    audience: 'Für angehende Product Owner, Produktmanagement und Business Analyse',
    text: 'Die Weiterbildung fokussiert die Rolle des Product Owners, strukturiertes Backlog Management und den gezielten Einsatz von KI in Scrum. Im Mittelpunkt stehen Anforderungen, Priorisierung, Stakeholder-Abstimmung und fachliche Produktverantwortung.',
    outcomes: [
      'Produktvision, Anforderungen und User Stories sauber strukturieren',
      'Product Backlogs fachlich aufbauen, pflegen und priorisieren',
      'Stakeholder und Entwicklungsteam wirksamer ausrichten',
      'KI-Werkzeuge für Anforderungen, Backlogs und Dokumentation produktiv einsetzen'
    ]
  },
  {
    category: 'Product',
    label: 'Product Ownership & Kanban',
    title: 'Product Owner, Scrum und Kanban im agilen Projektmanagement',
    duration: '10 Wochen',
    audience: 'Für Product Owner, Scrum Master und Teams im agilen Projektmanagement',
    text: 'Ein Kurs für Product Ownership, Scrum, Kanban und agiles Projektmanagement mit Fokus auf Produktverantwortung, Priorisierung und Arbeitsfluss. Vermittelt werden sowohl methodische Grundlagen als auch die praktische Verbindung von Scrum und Kanban.',
    outcomes: [
      'Product Ownership, Scrum und Kanban sicherer im Arbeitsalltag verbinden',
      'Backlogs, Prioritäten und Wertorientierung sauber steuern',
      'Arbeitsflüsse visualisieren und mit Metriken verbessern',
      'Skalierung und kontinuierliche Verbesserung im Teamkontext einordnen'
    ]
  },
  {
    category: 'Transformation',
    label: 'Scrum Master & Facilitation',
    title: 'Scrum Master: Moderationstechniken und Facilitation',
    duration: '12 Wochen',
    audience: 'Für angehende Scrum Master, Projektleitende, agile Teams und Moderationsrollen',
    text: 'Die Weiterbildung verbindet Scrum Mastery, Moderationstechniken und Facilitation in einem praxisnahen Format. Im Mittelpunkt stehen Scrum Framework, die Begleitung selbstorganisierter Teams sowie die professionelle Gestaltung von Workshops, Scrum Events und Teamprozessen.',
    outcomes: [
      'Scrum Framework, Rollen und empirische Prozesssteuerung sicher einordnen',
      'Scrum Events, Workshops und Meetings wirksam vorbereiten und moderieren',
      'Impediments, Konflikte und unterschiedliche Perspektiven konstruktiv bearbeiten',
      'Teamprozesse, Zusammenarbeit und kontinuierliche Verbesserung gezielt fördern'
    ]
  },
  {
    category: 'KI',
    label: 'Prompt Engineering',
    title: 'Prompt Engineering mit agilem Projektmanagement und Scrum',
    duration: '4 Wochen',
    audience: 'Für Projektleitende, Scrum Master, Product Owner und Wissensarbeit',
    text: 'Diese Weiterbildung verbindet Prompt Engineering mit agilem Projektmanagement und Scrum. Behandelt werden wirksame Prompts, generative KI, agile Zusammenarbeit und der verantwortungsvolle Einsatz von KI im Team.',
    outcomes: [
      'Prompts systematisch formulieren, testen und verbessern',
      'KI in agile Arbeitsweisen und Scrum-Kontexte einordnen',
      'Digitale Werkzeuge für Zusammenarbeit und Projektsteuerung produktiver nutzen',
      'Datenschutz, Grenzen und Qualitätssicherung beim KI-Einsatz berücksichtigen'
    ]
  },
  {
    category: 'KI',
    label: 'Office & Assistenz',
    title: 'KI im Assistenz- und Office-Management',
    duration: '4 Wochen',
    audience: 'Für Assistenz, Sekretariat, Sachbearbeitung und Office-Management',
    text: 'Ein praxisnaher Kurs für KI-gestützte Büroarbeit mit Microsoft 365, Aufgabenmanagement und digitaler Zusammenarbeit. Im Mittelpunkt stehen Assistenzprozesse, Dokumentation, Kommunikation und strukturierte Organisation im Arbeitsalltag.',
    outcomes: [
      'Aufgaben, Wiedervorlagen und Zusammenarbeit digital sauber strukturieren',
      'KI für Protokolle, E-Mails, Notizen und Formulare produktiv einsetzen',
      'Microsoft 365, Teams, OneNote und Forms sicherer im Alltag nutzen',
      'KI im Office-Kontext verantwortungsvoll und praxistauglich anwenden'
    ]
  }
];

export const ALL_COURSE_OFFERS: CourseOffer[] = [
  ...new Map(
    [...COURSE_OFFERS, ...EXTRA_COURSE_OFFERS, ...LANDING_PAGE_COURSE_OFFERS].map((course) => [
      course.title,
      course
    ])
  ).values()
];

export function courseSlugFromTitle(title: string): string {
  return title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function findCourseOfferBySlug(slug: string): CourseOffer | null {
  return ALL_COURSE_OFFERS.find((course) => courseSlugFromTitle(course.title) === slug) ?? null;
}

const COURSE_CATEGORY_TOPICS: Record<string, string[]> = {
  Transformation: [
    'Veränderung in reale Rollen, Entscheidungswege und Zusammenarbeit übersetzen',
    'Spannungen zwischen Stabilität, Geschwindigkeit und Anpassungsfähigkeit bearbeiten',
    'Strukturen, Verantwortungen und Lernschleifen im Arbeitsalltag wirksamer gestalten'
  ],
  People: [
    'Zusammenarbeit, Ownership und Selbstorganisation im Alltag robuster aufsetzen',
    'Kommunikation, Abstimmung und Verantwortungsübernahme gezielt weiterentwickeln',
    'Teamdynamiken, Kulturarbeit und Lernfähigkeit in bewegten Kontexten stärken'
  ],
  KI: [
    'KI-Werkzeuge sinnvoll, verantwortungsvoll und qualitätsgesichert einsetzen',
    'Arbeitsabläufe, Wissensarbeit und Routinen mit KI produktiver gestalten',
    'Nutzen, Grenzen und sinnvolle Einsatzfelder im jeweiligen Kontext einordnen'
  ],
  Data: [
    'Daten strukturieren, lesen und für Entscheidungen nutzbar machen',
    'Analyse, Reporting und Interpretation in reale Arbeitsfragen übersetzen',
    'Datenkompetenz mit Verständlichkeit und Umsetzbarkeit verbinden'
  ],
  Product: [
    'Produktverantwortung, Priorisierung und Nutzerorientierung sauber ausbalancieren',
    'Backlogs, Ziele und Stakeholder-Abstimmung im Produktalltag strukturieren',
    'Produktarbeit zwischen Business, Tech und Organisation belastbarer aufsetzen'
  ],
  Leadership: [
    'Führung unter Unsicherheit, Widersprüchen und Veränderungsdruck bewusster gestalten',
    'Entscheidungen, Orientierung und Verantwortung in anspruchsvollen Situationen stärken',
    'Führungsarbeit mit Zusammenarbeit, Klarheit und Zukunftsrobustheit verbinden'
  ],
  Operations: [
    'Abläufe, Übergaben und operative Zusammenarbeit klarer strukturieren',
    'Effizienz, Qualität und Verantwortlichkeiten im laufenden Betrieb verbessern',
    'Operative Routinen so gestalten, dass Teams auch unter Druck arbeitsfähig bleiben'
  ],
  Strategy: [
    'Strategische Zielbilder mit Prioritäten, Entscheidungen und Umsetzung verknüpfen',
    'Orientierung in komplexen Märkten und Veränderungssituationen verbessern',
    'Strategiearbeit mit konkreter Handlungsfähigkeit im Alltag verbinden'
  ],
  Innovation: [
    'Innovationsideen in sinnvolle Prioritäten und belastbare Umsetzungslogiken übersetzen',
    'Technologische Möglichkeiten mit Marktrelevanz und Arbeitsrealität verbinden',
    'Innovation so gestalten, dass sie nicht nur Impulse, sondern Wirkung erzeugt'
  ],
  Sustainability: [
    'Nachhaltigkeit mit Verantwortung, Steuerung und realer Umsetzung verbinden',
    'Regulatorische, operative und kulturelle Anforderungen zusammenführen',
    'Nachhaltigkeitsthemen in Prozesse, Entscheidungen und Zusammenarbeit integrieren'
  ],
  Cybersecurity: [
    'Risiken, Angriffsszenarien und Schutzlogiken praxisnah einordnen',
    'Sicherheitsbewusstsein, Incident Response und technische Resilienz stärken',
    'Sicherheitsmaßnahmen in reale Betriebs- und Entscheidungskontexte übersetzen'
  ]
};

const COURSE_KEYWORD_TOPICS: Array<{ pattern: RegExp; bullet: string; chip?: string }> = [
  {
    pattern: /\bscrum\b/i,
    bullet: 'Rollen, Ereignisse und Artefakte im Scrum-Kontext sicher einordnen',
    chip: 'Scrum'
  },
  {
    pattern: /\bkanban\b/i,
    bullet: 'Arbeitsflüsse visualisieren, Engpässe erkennen und Fluss verbessern',
    chip: 'Kanban'
  },
  {
    pattern: /\bki\b|\bai\b|künstliche intelligenz/i,
    bullet: 'KI-Anwendungen mit Verantwortung, Qualität und praxistauglichen Leitplanken nutzen',
    chip: 'KI'
  },
  {
    pattern: /\bdata\b|analytics|analyse/i,
    bullet: 'Daten und Analysen in verständliche Entscheidungsgrundlagen übersetzen',
    chip: 'Data'
  },
  {
    pattern: /\bproduct\b|produkt/i,
    bullet: 'Produktlogik, Nutzerbedarf und Priorisierung im Alltag sauber verbinden',
    chip: 'Product'
  },
  {
    pattern: /leadership|führung/i,
    bullet: 'Führungsverhalten, Orientierung und Entscheidungsfähigkeit gezielt weiterentwickeln',
    chip: 'Leadership'
  },
  {
    pattern: /security|cyber|incident|pentest|darknet/i,
    bullet: 'Sicherheitsrisiken, Schutzmaßnahmen und Reaktionsmuster fundiert bewerten',
    chip: 'Security'
  }
];

const COURSE_CATEGORY_APPLICATIONS: Record<string, string[]> = {
  Transformation: [
    'Transformationsvorhaben, Bereichsentwicklung und neue Formen der Zusammenarbeit',
    'Rollen- und Verantwortungsdesign in bewegten Organisationskontexten',
    'Veränderungsprozesse, die Technologie, Kultur und Umsetzung zusammen denken'
  ],
  People: [
    'Teamarbeit, Schnittstellen und gemeinsame Verantwortungsübernahme',
    'People- und Kulturarbeit mit stärkerem Praxis- und Transferbezug',
    'Selbstorganisation, Kommunikationsqualität und belastbare Zusammenarbeit'
  ],
  KI: [
    'Einführung, Nutzung und Bewertung von KI im Arbeitsalltag',
    'Wissensarbeit, Dokumentation, Analyse und Automatisierung',
    'Aufbau gemeinsamer Routinen für produktiven und verantwortungsvollen KI-Einsatz'
  ],
  Data: [
    'Reporting, Analysen und datenbasierte Entscheidungsvorbereitung',
    'Fachliche Kommunikation komplexer Datenlagen',
    'Arbeitskontexte, in denen Daten sicher interpretiert und genutzt werden müssen'
  ],
  Product: [
    'Backlog- und Priorisierungsarbeit in Produkt- und Projektkontexten',
    'Abstimmung zwischen Stakeholdern, Business, Tech und Delivery',
    'Produktziele, Roadmaps und wertorientierte Entscheidungen'
  ],
  Leadership: [
    'Führungssituationen mit Unsicherheit, Zielkonflikten und Veränderungsdruck',
    'Teamorientierung, Priorisierung und Entscheidungsarbeit im Alltag',
    'Kontexte, in denen Urteilskraft und Handlungsfähigkeit gestärkt werden müssen'
  ],
  Operations: [
    'Operative Steuerung, Übergaben und Zusammenarbeit im Tagesgeschäft',
    'Prozessverbesserung und klare Verantwortung in Schnittstellenkontexten',
    'Strukturen, die Verlässlichkeit und Anpassungsfähigkeit zusammenbringen'
  ],
  Strategy: [
    'Strategische Klarheit in unsicheren und dynamischen Umfeldern',
    'Verbindung von Zielbild, Prioritätensetzung und konkreten Entscheidungen',
    'Arbeitskontexte, in denen Strategie im Alltag wirksam werden soll'
  ],
  Innovation: [
    'Validierung, Priorisierung und Umsetzung neuer Ideen',
    'Verbindung von Innovation, Geschäftsnutzen und Arbeitsrealität',
    'Kontexte, in denen Veränderung nicht nur gestartet, sondern getragen werden muss'
  ],
  Sustainability: [
    'Nachhaltigkeitsarbeit an der Schnittstelle von Regulierung, Organisation und Umsetzung',
    'Praktische Integration von Nachhaltigkeitsanforderungen in Abläufe und Entscheidungen',
    'Zusammenarbeit zwischen Fachbereichen, Steuerung und Verantwortungsträgern'
  ],
  Cybersecurity: [
    'Schutz sensibler Systeme, Prozesse und Unternehmenswerte',
    'Awareness, Incident Response und technische Resilienz im Alltag',
    'Kontexte, in denen Risiken früh erkannt und sauber bearbeitet werden müssen'
  ]
};

function stripAudiencePrefix(audience: string): string {
  return audience.replace(/^für\s+/i, '').trim();
}

function buildCourseChips(course: CourseOffer): string[] {
  const content = `${course.title} ${course.label} ${course.text}`;
  const keywordChips = COURSE_KEYWORD_TOPICS
    .filter((entry) => entry.chip && entry.pattern.test(content))
    .map((entry) => entry.chip as string);

  return [...new Set([course.category, course.label, course.duration, ...keywordChips])].slice(0, 5);
}

function buildCourseTopics(course: CourseOffer): string[] {
  const categoryTopics = COURSE_CATEGORY_TOPICS[course.category] ?? [
    'Fachliche Orientierung mit praxistauglicher Anwendung verbinden',
    'Kompetenzen entlang realer Aufgaben und Entscheidungen weiterentwickeln',
    'Zusammenarbeit, Verantwortung und Umsetzung im Alltag stärken'
  ];
  const keywordTopics = COURSE_KEYWORD_TOPICS
    .filter((entry) => entry.pattern.test(`${course.title} ${course.label} ${course.text}`))
    .map((entry) => entry.bullet);

  return [...new Set([...categoryTopics, ...keywordTopics])].slice(0, 6);
}

function buildApplicationBullets(course: CourseOffer): string[] {
  const applications = COURSE_CATEGORY_APPLICATIONS[course.category] ?? [
    'Arbeitskontexte, in denen Klarheit, Priorisierung und Umsetzung verbessert werden sollen',
    'Rollen, die sich fachlich weiterentwickeln und anschlussfähig bleiben müssen',
    'Team- und Organisationssituationen mit konkretem Entwicklungsbedarf'
  ];

  return applications.slice(0, 3);
}

export function buildCourseLandingPageFromOffer(course: CourseOffer): CourseLandingPageContent {
  return {
    title: course.title,
    lead: course.text,
    metaTitle: `${course.title} | Stay Relevant Academy`,
    metaDescription: course.text,
    chips: [course.category, course.label, course.duration],
    facts: [
      {
        label: 'Format',
        value: course.label
      },
      {
        label: 'Dauer',
        value: course.duration
      },
      {
        label: 'Zielgruppe',
        value: course.audience
      }
    ],
    sections: [
      {
        title: 'Kursprofil',
        body: [
          course.text,
          'Diese Kursseite wird direkt aus dem aktuellen Kursportfolio abgeleitet und bietet einen kompakten Überblick über Ausrichtung, Nutzen und Einordnung des Angebots.'
        ]
      },
      {
        title: 'Schwerpunkte',
        intro: 'Im Fokus stehen insbesondere diese Lern- und Entwicklungsziele.',
        bullets: course.outcomes
      },
      {
        title: 'Einordnung im Portfolio',
        body: [
          `Der Kurs ist im Themenfeld ${course.category} verortet und als ${course.label} im Portfolio gekennzeichnet.`,
          `Das Format ist auf ${course.audience} ausgerichtet und im aktuellen Portfolio mit einer typischen Dauer von ${course.duration} angelegt.`
        ]
      }
    ]
  };
}

export function buildDetailedCourseLandingPageFromOffer(course: CourseOffer): CourseLandingPageContent {
  const audience = stripAudiencePrefix(course.audience);

  return {
    title: course.title,
    lead: course.text,
    metaTitle: `${course.title} | Stay Relevant Academy`,
    metaDescription: course.text,
    chips: buildCourseChips(course),
    facts: [
      {
        label: 'Themenfeld',
        value: course.category
      },
      {
        label: 'Schwerpunkt',
        value: course.label
      },
      {
        label: 'Dauer',
        value: course.duration
      },
      {
        label: 'Zielgruppe',
        value: course.audience
      },
      {
        label: 'Abschluss',
        value: 'Teilnahmebescheinigung'
      }
    ],
    sections: [
      {
        title: 'Kursprofil',
        body: [
          course.text,
          `${course.title} ist im Themenfeld ${course.category} verortet und auf ${audience} ausgerichtet. Der Kurs verbindet fachliche Orientierung mit konkreter Anwendung im Arbeitsalltag und ist so aufgebaut, dass Inhalte nicht abstrakt bleiben, sondern in reale Aufgaben, Rollen und Entscheidungen übersetzt werden.`
        ]
      },
      {
        title: 'Inhalte und Schwerpunkte',
        intro:
          'Im Mittelpunkt stehen fachliche Orientierung, anwendungsnahe Umsetzung und konkrete Weiterentwicklung im jeweiligen Arbeitskontext.',
        bullets: buildCourseTopics(course)
      },
      {
        title: 'Typische Einsatzfelder',
        intro:
          'Besonders sinnvoll ist der Kurs in Konstellationen, in denen Klarheit, Priorisierung und wirksame Umsetzung gefragt sind.',
        bullets: buildApplicationBullets(course)
      },
      {
        title: 'Kompetenzen und Nutzen',
        intro: 'Diese Ergebnisse stehen im Vordergrund.',
        bullets: course.outcomes
      },
      {
        title: 'Für wen der Kurs geeignet ist',
        body: [
          `Der Kurs richtet sich an ${audience}.`,
          `Er ist besonders passend für Menschen, die ihre Rolle im Feld ${course.category} strukturierter ausfüllen, ihre Arbeitsweise weiterentwickeln und konkrete nächste Schritte für ihren Verantwortungsbereich ableiten möchten.`
        ]
      },
      {
        title: 'Transfer in den Arbeitsalltag',
        body: [
          'Die Weiterbildung ist so angelegt, dass Methoden, Werkzeuge und Denkweisen nicht nur verstanden, sondern in den eigenen Arbeitskontext übertragen werden können. Im Fokus stehen deshalb nicht nur Inhalte, sondern auch deren Nutzen für Zusammenarbeit, Priorisierung, Kommunikation und Umsetzung.',
          `${course.title} eignet sich, um Orientierung aufzubauen, Kompetenzen systematisch zu vertiefen und das Gelernte direkt in laufende Aufgaben, Projekte oder Rollenanforderungen zu überführen.`
        ]
      }
    ]
  };
}

export const ALL_COURSE_OPTIONS = [...ALL_COURSE_OFFERS]
  .sort((left, right) => left.title.localeCompare(right.title, 'de'))
  .map((course) => ({
    value: course.title,
    label: course.title
  }));
