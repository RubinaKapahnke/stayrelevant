export interface CourseScheduleDate {
  start: string;
  end?: string;
}

export interface CourseSchedule {
  title: string;
  slug: string;
  flexibleStart?: boolean;
  flexibleStartLabel?: string;
  starts: CourseScheduleDate[];
}

export const COURSE_SCHEDULES_UPDATED_AT = '08.04.2026';

export const COURSE_SCHEDULES: CourseSchedule[] = [
  {
    title: 'Agile Coaching mit KI in agilen Organisationen',
    slug: 'agile-coaching-mit-ki-in-agilen-organisationen',
    flexibleStart: true,
    flexibleStartLabel: 'Regelmaessiger Start moeglich',
    starts: []
  },
  {
    title: 'Agiles Projektmanagement mit KI und Scrum',
    slug: 'agiles-projektmanagement-mit-ki-und-scrum',
    starts: [
      { start: '20.04.2026', end: '14.06.2026' },
      { start: '18.05.2026', end: '12.07.2026' }
    ]
  },
  {
    title: 'Agiles Projektmanagement und Grundlagen des Projektmanagements mit Scrum und KI',
    slug: 'agiles-projektmanagement-und-grundlagen-des-projektmanagements-mit-scrum-und-ki',
    starts: [
      { start: '20.04.2026', end: '14.06.2026' },
      { start: '18.05.2026', end: '12.07.2026' }
    ]
  },
  {
    title: 'Product Ownership, Backlog Management und KI in Scrum',
    slug: 'product-ownership-backlog-management-und-ki-in-scrum',
    starts: [
      { start: '27.04.2026', end: '21.06.2026' },
      { start: '25.05.2026', end: '19.07.2026' }
    ]
  },
  {
    title: 'Product Owner, Scrum und Kanban im agilen Projektmanagement',
    slug: 'product-owner-scrum-und-kanban-im-agilen-projektmanagement',
    starts: [
      { start: '20.04.2026', end: '28.06.2026' },
      { start: '18.05.2026', end: '26.07.2026' }
    ]
  },
  {
    title: 'Prompt Engineering mit agilem Projektmanagement und Scrum',
    slug: 'prompt-engineering-mit-agilem-projektmanagement-und-scrum',
    starts: [
      { start: '27.04.2026', end: '24.05.2026' },
      { start: '11.05.2026', end: '07.06.2026' }
    ]
  }
];

function normalizeCourseTitle(title: string): string {
  return title.trim().replace(/\s+/g, ' ').toLowerCase();
}

export function getCourseScheduleByTitle(title: string | null | undefined): CourseSchedule | null {
  if (!title) {
    return null;
  }

  const normalizedTitle = normalizeCourseTitle(title);

  return (
    COURSE_SCHEDULES.find((schedule) => normalizeCourseTitle(schedule.title) === normalizedTitle) ??
    null
  );
}

