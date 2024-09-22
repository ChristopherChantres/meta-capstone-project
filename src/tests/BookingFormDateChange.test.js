import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('calls onDateChange when the date is changed', () => {
  // Arrange: Mock the onDateChange function
  const mockOnDateChange = jest.fn();
  
  // Render the BookingForm component
  render(<BookingForm availableTimes={['17:00', '18:00']} onDateChange={mockOnDateChange} />);

  // Act: Change the date
  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput, { target: { value: '2024-09-25' } });

  // Assert: Ensure that onDateChange is called with the selected date
  expect(mockOnDateChange).toHaveBeenCalledWith('2024-09-25');
});
