import bus from "../Models/Bus.Model.js";

// Services
import { convertTime } from "../Services/ConvertTime.Services.js";

// Request      POST
// Route        /api/buses/createBus
// Description  Creating bus
const createBus = async (req, res) => {
  const {
    busName,
    busNumber,
    seats,
    source,
    destination,
    departure,
    arrival,
    date,
  } = req.body;

  // Convert time
  const departureTime = convertTime(departure);
  const arrivalTime = convertTime(arrival);

  // Find busnumber already exists
  const busNumberExists = await bus.findOne({ busNumber });
  if (busNumberExists) {
    if (
      busNumberExists.source === source &&
      busNumberExists.destination === destination
    ) {
      return res
        .status(400)
        .json({ message: "Already travel created for this bus" });
    }
  }

  // Create a bus
  try {
    const Bus = await bus.create({
      busName,
      busNumber,
      seats,
      source,
      destination,
      departure: departureTime,
      arrival: arrivalTime,
      date,
    });

    if (Bus) {
      return res.status(200).json({
        id: Bus._id,
        busName: Bus.busName,
        busNumber: Bus.busNumber,
        source: Bus.source,
        destination: Bus.destination,
        departure: Bus.departure,
        arrival: Bus.arrival,
        date: Bus.date,
      });
    }

    return res.status(400).json({ message: "Something went wrong!" });
  } catch (error) {
    console.log(error);
  }
};

// Request      GET
// Route        /api/buses/getBus
// Description  Getting bus
const getBus = async (req, res) => {
  const { source, destination, date } = req.body;

  const busExists = await bus.find({
    source: source,
    destination: destination,
    date: date,
  });

  if (busExists.length === 0) {
    return res.status(400).json({ message: "No bus found!" });
  }

  return res.status(200).json(busExists);
};

export { createBus, getBus };
