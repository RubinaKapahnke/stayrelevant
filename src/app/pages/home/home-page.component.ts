import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AUDIENCES,
  AudienceCard,
  CHALLENGE_CONTENT,
  COMPARISON_ROWS,
  COURSE_OFFERS,
  CourseOffer,
  DIFFERENTIATORS,
  FAQ_ITEMS,
  FORMATS,
  HERO_CONTENT,
  LEARNER_JOURNEY,
  PHILOSOPHY_CONTENT,
  PILLARS,
  Pillar,
  PROOF_CARDS,
  PROOF_STATS
} from '../../content/home-content';
import { PageShellComponent } from '../../shared/page-shell/page-shell.component';
import { AudienceSectionComponent } from '../../sections/audience/audience-section.component';
import { ChallengeSectionComponent } from '../../sections/challenge/challenge-section.component';
import { ContextStripSectionComponent } from '../../sections/context-strip/context-strip-section.component';
import { CoursesSectionComponent } from '../../sections/courses/courses-section.component';
import { CtaSectionComponent } from '../../sections/cta/cta-section.component';
import { FaqSectionComponent } from '../../sections/faq/faq-section.component';
import { FormatsSectionComponent } from '../../sections/formats/formats-section.component';
import { HeroSectionComponent } from '../../sections/hero/hero-section.component';
import { JourneySectionComponent } from '../../sections/journey/journey-section.component';
import { PillarsSectionComponent } from '../../sections/pillars/pillars-section.component';
import { PhilosophySectionComponent } from '../../sections/philosophy/philosophy-section.component';
import { ProofSectionComponent } from '../../sections/proof/proof-section.component';
import { WhyUsSectionComponent } from '../../sections/why-us/why-us-section.component';

const HOME_HERO_SIGNALS = [
  {
    title: 'Lernen entlang echter Aufgaben',
    text: 'Ausgangspunkt sind keine Trendbegriffe, sondern reale Aufgaben, Entscheidungen und Reibungen im Arbeitsalltag.'
  },
  {
    title: 'KI dort einsetzen, wo sie Arbeit besser macht',
    text: 'Wir arbeiten daran, wo Technologie tatsächlich entlastet, wie Qualität gesichert wird und welche Verantwortung bewusst bei Menschen bleibt.'
  },
  {
    title: 'Am Ende muss etwas anders laufen',
    text: 'Gute Weiterbildung zeigt sich daran, dass Entscheidungen klarer werden, Zusammenarbeit besser funktioniert und neue Werkzeuge sinnvoll genutzt werden.'
  }
];

const HOME_PILLARS: Pillar[] = [
  PILLARS[0],
  {
    ...PILLARS[1],
    text: 'Kommunikation, Urteilskraft, Selbstorganisation, Ambiguitätsresilienz und Zusammenarbeit bleiben nicht abstrakt, sondern werden konkret trainierbar gemacht.',
    outcomes: [
      'Klarer kommunizieren und besser priorisieren',
      'Komplexität strukturieren',
      'Mit Unsicherheit und Mehrdeutigkeit professionell umgehen'
    ]
  },
  {
    ...PILLARS[2],
    text: 'Moderne Arbeit braucht saubere Übergaben, klare Informationsflüsse, Ownership und einen produktiven Umgang mit Tools, Kanälen und Wissensarbeit.',
    outcomes: [
      'Meetings und Abstimmungen wirksamer gestalten',
      'Verantwortungsdiffusion in Zusammenarbeit reduzieren',
      'digitale Routinen robust aufsetzen'
    ]
  },
  {
    ...PILLARS[3],
    text: 'Menschen und Teams lernen, Wandel nicht nur zu verstehen, sondern Führung, Kultur und Zusammenarbeit so weiterzuentwickeln, dass sie unter Dynamik tragfähig bleiben.',
    outcomes: [
      'Veränderung verständlich machen',
      'Widerstände und kulturelle Muster besser einordnen',
      'Transfer in den Alltag sichern'
    ]
  },
  PILLARS[4]
];

const HOME_AUDIENCES: AudienceCard[] = AUDIENCES.map((audience) =>
  audience.title === 'Unternehmen'
    ? {
        ...audience,
        needs: [
          ...audience.needs.slice(0, 3),
          'Verantwortung diffundiert zwischen HR, Führung, Fachbereichen und Teams',
          'Teams arbeiten unter Unsicherheit, aber gemeinsame Prinzipien, Ownership und Selbstorganisation fehlen',
          ...audience.needs.slice(3)
        ]
      }
    : audience
);

const EXTRA_COURSES: CourseOffer[] = [
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

@Component({
  selector: 'app-home-page',
  imports: [
    AudienceSectionComponent,
    ChallengeSectionComponent,
    ContextStripSectionComponent,
    CoursesSectionComponent,
    CtaSectionComponent,
    FaqSectionComponent,
    FormatsSectionComponent,
    HeroSectionComponent,
    JourneySectionComponent,
    PageShellComponent,
    PillarsSectionComponent,
    PhilosophySectionComponent,
    ProofSectionComponent,
    WhyUsSectionComponent
  ],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  protected readonly heroContent = {
    ...HERO_CONTENT,
    signals: HOME_HERO_SIGNALS,
    eyebrow: 'Die Zukunft der Arbeit beginnt jetzt',
    title: 'Relevanz ist',
    accent: 'erlernbar.',
    legacyDescription:
      'Die Arbeitswelt wird durch KI, Automatisierung und veränderte Marktanforderungen neu sortiert. Wir helfen Menschen und Organisationen dabei, die Kompetenzen aufzubauen, die sie handlungsfähig, anschlussfähig und wertvoll halten.',
    primaryCta: {
      label: 'Programme ansehen',
      href: '#angebote'
    },
    legacySecondaryCta: {
      label: 'Für Unternehmen',
      href: '#zielgruppen'
    },
    legacyStats: [
      {
        value: 'Praxisnah statt abstrakt',
        label: 'Weiterbildung mit Arbeitsbezug',
        detail: 'Lernen entlang echter Aufgaben, Rollen und Entscheidungssituationen.'
      },
      {
        value: 'Mensch plus Technologie',
        label: 'Kein Entweder-oder',
        detail: 'KI sinnvoll einordnen und zugleich menschliche Stärken gezielt ausbauen.'
      },
      {
        value: 'Orientierung, Transfer, Wirkung',
        label: 'Relevanz als Zielbild',
        detail: 'Nicht mehr Wissen um des Wissens willen, sondern echte Anschlussfähigkeit.'
      }
    ],
    description:
      'Die Arbeitswelt wird durch KI, Automatisierung und veränderte Marktanforderungen neu sortiert. Wir beraten und qualifizieren Menschen und Organisationen dabei, Kompetenzen, Rollen und Arbeitsweisen so weiterzuentwickeln, dass sie handlungsfähig und anschlussfähig bleiben.',
    secondaryCta: {
      label: 'Beratung anfragen',
      href: '#kontakt'
    },
    stats: [
      {
        value: 'Rollen, Aufgaben, Entscheidungen',
        label: 'Unser Startpunkt',
        detail: 'Wir beginnen dort, wo Arbeit konkret anders wird.'
      },
      {
        value: 'Schulung und Beratung',
        label: 'Unser Angebot',
        detail: 'Von Lernformaten bis Sparring zu Kompetenzaufbau, Rollen und Veränderung.'
      },
      {
        value: 'Einzelpersonen bis Unternehmen',
        label: 'Unser Zuschnitt',
        detail: 'Vom kompakten Einstieg bis zur längeren Lern- und Beratungsarchitektur.'
      }
    ]
  };
  protected readonly challengeContent = {
    ...CHALLENGE_CONTENT,
    title: 'Die Spielregeln der Arbeit haben sich verändert. Die meisten Weiterbildungen nicht.'
  };
  protected readonly pillars = HOME_PILLARS;
  protected readonly formats = FORMATS;
  protected readonly courses = [...COURSE_OFFERS, ...EXTRA_COURSES];
  protected readonly audiences = HOME_AUDIENCES;
  protected readonly differentiators = DIFFERENTIATORS;
  protected readonly comparisonRows = COMPARISON_ROWS;
  protected readonly philosophyContent = PHILOSOPHY_CONTENT;
  protected readonly learnerJourney = LEARNER_JOURNEY;
  protected readonly proofStats = PROOF_STATS;
  protected readonly proofCards = PROOF_CARDS;
  protected readonly faqItems = FAQ_ITEMS;
}
