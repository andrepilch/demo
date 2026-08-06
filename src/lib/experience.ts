/** Year professional design career began. */
export const CAREER_START_YEAR = 2011

/** Years of experience based on the current calendar year. */
export function getYearsOfExperience(now = new Date()): number {
  return now.getFullYear() - CAREER_START_YEAR
}
