/** Year design/freelance career began (for “15+ years design experience”). */
export const CAREER_START_YEAR = 2011

/** Year React/frontend engineering experience began. */
export const REACT_ENGINEERING_START_YEAR = 2021

/** Years of design experience based on the current calendar year. */
export function getYearsOfExperience(now = new Date()): number {
  return now.getFullYear() - CAREER_START_YEAR
}

/** Years of React engineering experience based on the current calendar year. */
export function getReactEngineeringYears(now = new Date()): number {
  return now.getFullYear() - REACT_ENGINEERING_START_YEAR
}
