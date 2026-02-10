import { CalendarHeader } from './CalendarHeader';
import { WeekDaysRows } from './WeekDaysRows';
import { CalendarGrid } from './CalendarGrid';

import './calendar.css';


interface CalendarProps {
  date: Date;
}

export const Calendar = ({ date }: CalendarProps) => {
  return (
    <div className="calendar">
      <CalendarHeader date={date} />
      <WeekDaysRows />
      <CalendarGrid date={date} />
    </div>
  );
};
