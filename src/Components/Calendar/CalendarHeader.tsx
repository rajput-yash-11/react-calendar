import { getMonthYearLabel } from './utils';

interface CalendarHeaderProps {
  date: Date;
}

export const CalendarHeader = ({ date }: CalendarHeaderProps) => {
  return (
    <div className="calendar-header">
      {getMonthYearLabel(date)}
    </div>
  );
};
