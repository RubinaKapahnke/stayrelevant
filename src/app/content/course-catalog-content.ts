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
          'Diese Landing-Page wird direkt aus dem aktuellen Kursportfolio abgeleitet und bietet einen kompakten Überblick über Ausrichtung, Nutzen und Einordnung des Angebots.'
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

export const ALL_COURSE_OPTIONS = [...ALL_COURSE_OFFERS]
  .sort((left, right) => left.title.localeCompare(right.title, 'de'))
  .map((course) => ({
    value: course.title,
    label: course.title
  }));
