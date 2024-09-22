import { initializeTimes } from '../components/BookingPage'; // Adjust import as needed

test('initializeTimes returns the correct initial times', () => {
  // Act: Call the initializeTimes function
  const times = initializeTimes();

  // Assert: Verify the returned array matches the expected initial times
  expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});
