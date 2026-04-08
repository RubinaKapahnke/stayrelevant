export interface CourseLandingFact {
  label: string;
  value: string;
}

export interface CourseLandingSection {
  title: string;
  intro?: string;
  body?: string[];
  bullets?: string[];
}

export interface CourseLandingPageContent {
  title: string;
  lead: string;
  metaTitle?: string;
  metaDescription?: string;
  chips: string[];
  facts: CourseLandingFact[];
  sections: CourseLandingSection[];
}
