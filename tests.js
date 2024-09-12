import { bookRoom } from './booking.js';
import { hotels, guests, payers } from './data.js';

describe('bookRoom', () => {
  it('should change the room status to "занят"', () => {
    const hotel = hotels;
    const room = hotel.rooms;
    const bookingDate = new Date('2024-09-12');
    const arrivalDate = new Date('2024-09-15');
    const departureDate = new Date('2024-09-18');
    const payer = payers;
    const guestsList = [guests, guests];

    bookRoom(hotel, room, bookingDate, arrivalDate, departureDate, payer, guestsList);
    assert.strictEqual(room.status, 'занят');
  });

  it('should throw an error if the room is already booked', () => {
    const hotel = hotels;
    const room = hotel.rooms;
    room.status = 'занят';
    const bookingDate = new Date('2024-09-12');
    const arrivalDate = new Date('2024-09-15');
    const departureDate = new Date('2024-09-18');
    const payer = payers;
    const guestsList = [guests, guests];

    assert.throws(() => bookRoom(hotel, room, bookingDate, arrivalDate, departureDate, payer, guestsList), Error);
  });
});