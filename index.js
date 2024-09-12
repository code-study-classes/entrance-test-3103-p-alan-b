import { bookRoom } from './booking.js';
import { hotels, guests, payers } from './data.js';

const hotel = hotels;
const room = hotel.rooms;
const bookingDate = new Date('2024-09-12');
const arrivalDate = new Date('2024-09-15');
const departureDate = new Date('2024-09-18');
const payer = payers;
const guestsList = [guests, guests];

try {
  const booking = bookRoom(hotel, room, bookingDate, arrivalDate, departureDate, payer, guestsList);
  console.log(booking);
} catch (error) {
  console.error(error.message);
}