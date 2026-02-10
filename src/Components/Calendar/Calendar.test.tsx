import { render, screen } from '@testing-library/react';
import { Calendar } from './Calendar';

describe('Calendar component', () => {
  const calendarProps = {
    date: new Date('2022-10-03'),
  };

  test('renders correct month and year', () => {
    render(<Calendar {...calendarProps} />);
    expect(screen.getByText('October 2022')).toBeInTheDocument();
  });

  test('highlights the selected date', () => {
    render(<Calendar {...calendarProps} />);
    const selectedCell = screen.getByText('3');
    expect(selectedCell).toHaveClass('selected');
  });

  test('renders weekdays starting from Sunday', () => {
    render(<Calendar {...calendarProps} />);
    expect(screen.getByText('Su')).toBeInTheDocument();
    expect(screen.getByText('Sa')).toBeInTheDocument();
  });
});
