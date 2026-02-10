interface CalendarCellProps {
  value: number | null;
  isSelected: boolean;
}

export const CalendarCell = ({ value, isSelected }: CalendarCellProps) => {
  if (value === null) {
    return <div className="calendar-cell empty" />;
  }

  return (
    <div className={`calendar-cell ${isSelected ? 'selected' : ''}`}>
      {value}
    </div>
  );
};
