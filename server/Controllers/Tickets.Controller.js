import ticket from "../Models/Ticket.Booking.Model.js";
import { generatePnrNumber } from "../Services/Pnr.Number.Generator.js";

// Request      POST
// Route        /api/tickets/bookTicket
// Description  Ticket booking
const bookTicket = async (req, res) => {
  const { userId, userName, email, seats, source, destination, busId, date } =
    req.body;

  // PNR number generator
  const pnr = generatePnrNumber();

  // Book a ticket
  try {
    const booking = await ticket.create({
      userId,
      pnrNumber: pnr,
      userName,
      email,
      seats,
      source,
      destination,
      busId,
      date,
    });

    if (booking) {
      return res.status(200).json({
        bookingId: booking._id,
        pnrNumber: booking.pnrNumber,
        userName: booking.userName,
        email: booking.email,
        seats: booking.seats,
        source: booking.source,
        destination: booking.destination,
        busNumber: booking.busNumber,
        busName: booking.busName,
        date: booking.date,
      });
    } else {
      return res.status(400).json({ message: "Something went wrong!" });
    }
  } catch (error) {
    throw new Error("Something went wrong! While booking", error);
  }
};

export { bookTicket };
