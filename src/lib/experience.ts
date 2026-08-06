/** Year professional design career began (see CareerTimeline). */
export const CAREER_START_YEAR = 2009

/** Years of experience based on the current calendar year. */
export function getYearsOfExperience(now = new Date()): number {
  return now.getFullYear() - CAREER_START_YEAR
}
