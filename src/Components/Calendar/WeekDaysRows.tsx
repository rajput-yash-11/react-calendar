const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const WeekDaysRows = () => {
  return (
    <div className="calendar-weekdays">
      {WEEK_DAYS.map((day) => (
        <div key={day} className="calendar-weekday">
          {day}
        </div>
      ))}
    </div>
  );
};
