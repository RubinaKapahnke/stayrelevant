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

const REGULAR_START_LABEL = 'Regelmäßiger Start möglich';

function createExplicitSchedule(
  title: string,
  starts: CourseScheduleDate[],
  statusLabel?: string
): CourseSchedule {
  return {
    title,
    slug: courseSlugFromTitle(title),
    starts,
    statusLabel
  };
}

const EXPLICIT_COURSE_SCHEDULES: CourseSchedule[] = [
  createExplicitSchedule('Agile Coaching mit KI in agilen Organisationen', [], REGULAR_START_LABEL),
  createExplicitSchedule('Agiles Projektmanagement mit KI und Scrum', [
      { start: '20.04.2026', end: '14.06.2026' },
      { start: '18.05.2026', end: '12.07.2026' }
    ]),
  createExplicitSchedule('Agiles Projektmanagement und Grundlagen des Projektmanagements mit Scrum und KI', [
      { start: '20.04.2026', end: '14.06.2026' },
      { start: '18.05.2026', end: '12.07.2026' }
    ]),
  createExplicitSchedule('Product Ownership, Backlog Management und KI in Scrum', [
      { start: '27.04.2026', end: '21.06.2026' },
      { start: '25.05.2026', end: '19.07.2026' }
    ]),
  createExplicitSchedule('Product Owner, Scrum und Kanban im agilen Projektmanagement', [
      { start: '20.04.2026', end: '28.06.2026' },
      { start: '18.05.2026', end: '26.07.2026' }
    ]),
  createExplicitSchedule('Prompt Engineering mit agilem Projektmanagement und Scrum', [
      { start: '27.04.2026', end: '24.05.2026' },
      { start: '11.05.2026', end: '07.06.2026' }
    ]),
  createExplicitSchedule('Scrum Master:in & agile Teamsteuerung', [
      { start: '04.05.2026', end: '31.05.2026' },
      { start: '18.05.2026', end: '14.06.2026' }
    ]),
  createExplicitSchedule('Scrum Master: Moderationstechniken und Facilitation für Scrum Teams', [
      { start: '04.05.2026', end: '26.07.2026' },
      { start: '15.06.2026', end: '06.09.2026' }
    ])
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

  if (left.statusLabel === REGULAR_START_LABEL && right.statusLabel !== REGULAR_START_LABEL) {
    return -1;
  }

  if (right.statusLabel === REGULAR_START_LABEL && left.statusLabel !== REGULAR_START_LABEL) {
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
