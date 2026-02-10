import { buildCalendarCells } from './utils';
import { CalendarCell } from './CalendarCell';

interface CalendarGridProps {
  date: Date;
}

export const CalendarGrid = ({ date }: CalendarGridProps) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const selectedDay = date.getDate();

  const cells = buildCalendarCells(year, month);

  return (
    <div className="calendar-grid">
      {cells.map((cell, index) => (
        <CalendarCell
          key={index}
          value={cell}
          isSelected={cell === selectedDay}
        />
      ))}
    </div>
  );
};
