// Returns formatted month and year label (e.g. "October 2022")
export function getMonthYearLabel(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(date);
}

// Returns total number of days in a given month
// Month is 0-based (0 = January)
export function getDaysInMonth(year: number, month: number): number {
  // Setting day = 0 gives last day of previous month
  return new Date(year, month + 1, 0).getDate();
}

// Returns the weekday index (0 = Sunday, 6 = Saturday)
// for the first day of the given month
export function getStartDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

// Builds a fixed 6x7 (42 cells) calendar grid for a month
// Valid dates are numbers, empty cells are null
export function buildCalendarCells(
  year: number,
  month: number
): (number | null)[] {
  const daysInMonth = getDaysInMonth(year, month);
  const startDay = getStartDayOfMonth(year, month);

  const totalCells = 42; // 6 rows × 7 columns

  return Array.from({ length: totalCells }, (_, index) => {
    // Calculate date number based on start day offset
    const dayNumber = index - startDay + 1;

    // Return valid date or null for empty cells
    return dayNumber > 0 && dayNumber <= daysInMonth
      ? dayNumber
      : null;
  });
}
