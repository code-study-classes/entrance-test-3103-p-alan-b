import { hotels, guests, payers } from './data.js';

function bookRoom(hotel, room, bookingDate, arrivalDate, departureDate, payer, guests) {
  if (room.status !== 'свободен') {
    throw new Error('Номер занят');
  }

  room.status = 'занят';

  const booking = {
    bookingDate,
    arrivalDate,
    departureDate,
    payer,
    guests,
    hotel,
    room
  };

  return booking;
}

export { bookRoom };