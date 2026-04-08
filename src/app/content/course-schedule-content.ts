import { ALL_COURSE_OFFERS, courseSlugFromTitle } from './course-catalog-content';

export interface CourseScheduleDate {
  start: string;
  end?: string;
}

export interface CourseSchedule {
  title: string;
  slug: string;
  starts: CourseScheduleDate[];
  statusLabel?: string;
}

const EXPLICIT_COURSE_SCHEDULES: CourseSchedule[] = [
  {
    title: 'Agile Coaching mit KI in agilen Organisationen',
    slug: 'agile-coaching-mit-ki-in-agilen-organisationen',
    statusLabel: 'Regelmäßiger Start möglich',
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

function buildFallbackSchedule(title: string): CourseSchedule {
  return {
    title,
    slug: courseSlugFromTitle(title),
    starts: [],
    statusLabel: 'Coming soon'
  };
}

function compareSchedules(left: CourseSchedule, right: CourseSchedule): number {
  const leftHasDates = left.starts.length > 0;
  const rightHasDates = right.starts.length > 0;

  if (leftHasDates !== rightHasDates) {
    return leftHasDates ? -1 : 1;
  }

  if (left.statusLabel === 'Regelmäßiger Start möglich' && right.statusLabel !== 'Regelmäßiger Start möglich') {
    return -1;
  }

  if (right.statusLabel === 'Regelmäßiger Start möglich' && left.statusLabel !== 'Regelmäßiger Start möglich') {
    return 1;
  }

  return left.title.localeCompare(right.title, 'de');
}

export const COURSE_SCHEDULES: CourseSchedule[] = [...ALL_COURSE_OFFERS]
  .map((course) => {
    const explicitSchedule =
      EXPLICIT_COURSE_SCHEDULES.find(
        (schedule) => normalizeCourseTitle(schedule.title) === normalizeCourseTitle(course.title)
      ) ?? null;

    return explicitSchedule ?? buildFallbackSchedule(course.title);
  })
  .sort(compareSchedules);

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
