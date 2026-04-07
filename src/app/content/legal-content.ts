import { CONTACT_EMAIL, CONTACT_LOCATION, CONTACT_PHONE_DISPLAY, SITE_URL } from './home-content';

export interface LegalSection {
  title: string;
  body: string[];
}

export interface LegalPageContent {
  title: string;
  lead: string;
  sections: LegalSection[];
}

export const LEGAL_PAGES = {
  impressum: {
    title: 'Impressum',
    lead:
      'Angaben gemäß § 5 DDG und § 18 Abs. 2 MStV.',
    sections: [
      {
        title: 'Anbieter',
        body: [
          'Stay Relevant Academy',
          'Einzelunternehmen',
          'Inhaber und vertretungsberechtigte Person: Patrick Kapahnke',
          'Schmalwiese 27',
          '66583 Spiesen-Elversberg',
          'Deutschland'
        ]
      },
      {
        title: 'Kontakt',
        body: [
          `E-Mail: ${CONTACT_EMAIL}`,
          `Telefon: ${CONTACT_PHONE_DISPLAY}`
        ]
      },
      {
        title: 'Registereintrag',
        body: [
          'Es besteht kein Eintrag im Handelsregister.'
        ]
      },
      {
        title: 'Verantwortlich für den Inhalt',
        body: [
          'Verantwortlich nach § 18 Abs. 2 MStV: Patrick Kapahnke',
          'Schmalwiese 27, 66583 Spiesen-Elversberg'
        ]
      }
    ]
  },
  datenschutz: {
    title: 'Datenschutz',
    lead:
      'Diese Datenschutzerklärung beschreibt die Verarbeitung personenbezogener Daten auf dieser Website nach dem aktuell technisch erkennbaren Stand vom 7. April 2026.',
    sections: [
      {
        title: 'Verantwortliche Stelle',
        body: [
          'Verantwortlich für die Datenverarbeitung auf dieser Website ist:',
          'Patrick Kapahnke',
          'Stay Relevant Academy',
          'Schmalwiese 27',
          '66583 Spiesen-Elversberg',
          'Deutschland',
          `E-Mail: ${CONTACT_EMAIL}`,
          `Telefon: ${CONTACT_PHONE_DISPLAY}`
        ]
      },
      {
        title: 'Hosting',
        body: [
          'Diese Website wird bei STRATO in Deutschland gehostet.',
          'Beim Aufruf der Website können technisch erforderliche Server-Logfiles verarbeitet werden. Dazu gehören insbesondere Datum und Uhrzeit des Zugriffs, angeforderte Seiten oder Dateien, Referrer, Browsertyp, Betriebssystem sowie vom Hoster bereitgestellte IP-bezogene Angaben.',
          'Nach dem aktuell dokumentierten Stand stellt STRATO Logfiles für die letzten sechs Wochen bereit. Die Verarbeitung erfolgt zur Gewährleistung von Stabilität, Sicherheit und technischem Betrieb der Website.',
          'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.'
        ]
      },
      {
        title: 'Kontaktaufnahme',
        body: [
          'Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben ausschließlich zur Bearbeitung Ihrer Anfrage und für mögliche Anschlusskommunikation.',
          'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vertragsbezogenen Anfragen sowie Art. 6 Abs. 1 lit. f DSGVO bei sonstigen Anfragen.',
          'Es besteht aktuell kein Kontaktformular auf dieser Website.'
        ]
      },
      {
        title: 'Google Fonts',
        body: [
          'Diese Website bindet Schriftarten derzeit über die Google Fonts Web API ein.',
          'Beim Aufruf der Seite wird eine Verbindung zu Servern von Google aufgebaut. Dabei können technische Verbindungsdaten wie IP-Adresse, Browserinformationen, Referrer und die angeforderte URL an Google übermittelt werden.',
          'Nach den von Google veröffentlichten Informationen setzt die Google Fonts Web API keine Cookies. Rechtsgrundlage für die Nutzung ist Art. 6 Abs. 1 lit. f DSGVO, solange die externe Einbindung beibehalten wird.'
        ]
      },
      {
        title: 'Analyse und Cookies',
        body: [
          'Nach dem aktuellen technischen Stand werden auf dieser Website keine eigenen Analyse- oder Marketing-Tools eingesetzt.',
          'Es werden derzeit keine bewusst eingebundenen Tracking-Cookies oder vergleichbaren Marketing-Technologien verwendet.'
        ]
      },
      {
        title: 'Ihre Rechte',
        body: [
          'Sie haben nach Maßgabe der gesetzlichen Vorschriften das Recht auf Auskunft über die Sie betreffenden personenbezogenen Daten sowie auf Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit.',
          'Sofern eine Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruht, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, Widerspruch gegen die Verarbeitung einzulegen.',
          'Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.'
        ]
      },
      {
        title: 'Stand',
        body: [
          'Stand dieser Datenschutzerklärung: 7. April 2026.',
          `Aktuelle Website-Adresse: ${SITE_URL}`,
          `Standortangabe auf der Website: ${CONTACT_LOCATION}.`
        ]
      }
    ]
  }
} satisfies Record<'impressum' | 'datenschutz', LegalPageContent>;
