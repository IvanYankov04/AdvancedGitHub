// class flightBookingSystem {
//     constructor(agencyName) {
//         this.agencyName = agencyName;
//         this.flights = [];
//         this.bookings = [];
//         this.bookingsCount = 0
//     }
//     addFlight(flightNumber, destination, departureTime, price) {
//         if (this.flights[flightNumber] === flightNumber) {
//             return `Flight ${flightNumber} to ${destination} is already available.`
//         } else {
//             return `Flight ${flightNumber} to ${destination} has been added to the system.`
//         }
//     }
//     bookFlight(passengerName, flightNumber) {

//         if (!this.flights[flightNumber]) {
//             return `Flight ${flightNumber} is not available for booking.`
//         }
//         this.bookingsCount++;
//         return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
//     }

//     cancelBooking(passengerName, flightNumber) {
//         if (!this.bookings[passengerName] || !this.flightNumber[flightNumber]) {
//             throw new Error`Flight ${flightNumber} is not available for booking.`
//         }

//     }  
// }



// const system = new flightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303"));


// class BookingSystem {
//     constructor(agencyName) {
//       this.agencyName = agencyName;
//       this.flights = [];
//       this.bookings = [];
//       this.bookingsCount = 0;

//     }
   
//     addFlight(flightNumber, destination, departureTime, price) {
//       if (this.flights.some((flight) => flight.flightNumber === flightNumber)) {
//         return `Flight ${flightNumber} to ${destination} is already available.`;
//       }
   
//       this.flights.push({
//         flightNumber,
//         destination,
//         departureTime,
//         price,
//       });
   
//       return `Flight ${flightNumber} to ${destination} has been added to the system.`;
//     }
   
//     bookFlight(passengerName, flightNumber) {
//       const flight = this.flights.find(
//         (flight) => flight.flightNumber === flightNumber
//       );
   
//       if (!flight) {
//         return `Flight ${flightNumber} is not available for booking.`

//       }
   
//       this.bookings.push({
//         passengerName,
//         flightNumber,
//       });
   
//       this.bookingsCount++
   
//       return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
//     }
   
//     cancelBooking(passengerName, flightNumber) {
//       const bookingIndex = this.bookings.findIndex(
//         (booking) =>
//           booking.passengerName === passengerName &&
//           booking.flightNumber === flightNumber

//       );
   
//       if (bookingIndex === -1){
//         throw new Error(
//           `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
//         );
//       }
   
//       this.bookings.splice(bookingIndex, 1);
   
//       this.bookingsCount--;
   
//       return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
//     }
   
//     showBookings(criteria) {
//       if (this.bookingsCount === 0) {
//         throw new Error(`No bookings have been made yet.`);
//       }
   
//       if (criteria === 'all') {
//         const allBookings = this.bookings.map(
//           (booking) =>
//             `${booking.passengerName} booked for flight ${booking.flightNumber}.`
//         );
   

//         return [`All bookings(${this.bookingsCount}):`, ...allBookings].join('\n');
   
//       } else if (criteria === 'cheap') {
//         const cheapBookings = this.bookings.filter((booking) => {
//           const flight = this.flights.find(
//             (flight) => flight.flightNumber === booking.flightNumber
//           );
//           return flight.price <= 100
//         });
   
//         if (cheapBookings.length === 0) {
//           return 'No cheap bookings found.'
//         }
   
//         return [
//           'Cheap bookings:',
//           ...cheapBookings.map(
//             (booking) =>
//               `${booking.passengerName} booked for flight ${booking.flightNumber}.`
//           ),
//         ].join('\n');
//       } else if (criteria === 'expensive') {
//         const expensiveBookings = this.bookings.filter((booking) => {
//           const flight = this.flights.find(
//             (flight) => flight.flightNumber === booking.flightNumber
//           );
//           return flight.price > 100;
//         });
   
//         if (expensiveBookings.length === 0) {
//           return 'No expensive bookings found.';
//         }
   
//         return [
//           'Expensive bookings:',
//           ...expensiveBookings.map(
//             (booking) =>
//               `${booking.passengerName} booked for flight ${booking.flightNumber}.`
//           ),
//         ].join('\n');
//       } else {
//         throw new Error(`Invalid criteria: ${criteria}`)
//       }

//     }

// }

