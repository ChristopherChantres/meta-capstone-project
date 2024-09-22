import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('renders the static text in the BookingForm', () => {
  // Arrange: Render the BookingForm component
  render(<BookingForm availableTimes={['17:00', '18:00']} onDateChange={() => {}} />);

  // Act & Assert: Check if specific static text is present
  expect(screen.getByText('Reserve Your Table')).toBeInTheDocument();
  expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
  expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
});
