import { updateTimes } from '../components/BookingPage'; // Adjust import as needed

test('updateTimes returns the same times regardless of the date', () => {
  // Act: Call the updateTimes function with a sample date
  const times = updateTimes('2024-09-25');

  // Assert: Verify the returned array matches the expected times
  expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});
