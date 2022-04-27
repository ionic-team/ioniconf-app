import { addMinutes, isValid, parse, parseISO } from 'date-fns';

/**
 * @param dateString - The api date string to parse
 * @returns Date object in the local timezone representing the parsed dateString; null if parsed dateString is invalid
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function parseISODate(dateString: string): Date {
  if (!dateString) {
    return null;
  }

  const date = parseISO(dateString);
  return isValid(date) ? date : null;
}

/**
 * @param dateString - The api date string to parse
 * @param dateFormat - The format of dateString
 * @returns Date object in the local timezone representing the parsed dateString; null if parsed dateString is invalid
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function parseDate(dateString: string, dateFormat: string): Date {
  if (!dateString) {
    return null;
  }

  const date = parse(dateString, dateFormat, new Date());
  return isValid(date) ? date : null;
}

/**
 * @param startDt - The start datetime
 * @param duration - Number of minutes to add to the start datetime
 * @returns Date object in the local timezone representing the time after a duration (minutes) was added;
 * null if parsed dateString is invalid
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function datetimeAfterDuration(startDt: Date, duration: number): Date {
  if (!startDt) {
    return null;
  }

  const date = addMinutes(startDt, duration);
  return isValid(date) ? date : null;
}
