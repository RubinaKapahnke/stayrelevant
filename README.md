# Stay Relevant Academy

Marketing-Website für die Weiterbildungsmarke **Stay Relevant Academy** auf Basis von Angular, Angular Material und Tailwind CSS.

## Stack

- Angular 21 mit Standalone Components
- Angular Material mit angepasstem Marken-Theme
- Tailwind CSS für Layout, Responsive Design und visuelles Finishing
- SCSS für Theme-Tokens und globale Stilregeln

## Setup

```bash
npm install
npm start
```

Die App läuft lokal unter `http://localhost:4200/`.

## Build

```bash
npm run build
```

## Projektstruktur

- `src/app/pages` enthält Seitenkomponenten wie Startseite und rechtliche Platzhalter
- `src/app/sections` enthält modulare Homepage-Sections
- `src/app/shared` enthält wiederverwendbare UI-Bausteine wie Section-Heading, Brand-Mark und Page-Shell
- `src/app/content` trennt Texte und inhaltliche Daten von den Layout-Komponenten
- `src/styles` enthält das Angular-Material-Theme

## Design-System

- Markenfarben und zentrale Tokens liegen in `src/styles/_material-theme.scss`
- Globale Stilregeln, Material-Overrides und Bewegungslogik liegen in `src/styles.scss`
- Tailwind ist über `tailwind.config.js` und `.postcssrc.json` eingebunden

## Hinweise zur Erweiterung

- Die Homepage ist in eigenständige Sections aufgeteilt und kann leicht um weitere Seiten ergänzt werden.
- Impressum und Datenschutz sind bewusst als strukturelle Platzhalter angelegt und sollten vor Livegang rechtlich finalisiert werden.
