import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
  busName: {
    type: String,
    required: true,
  },
  busNumber: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  departure: {
    type: String,
    required: true,
  },
  arrival: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const bus = mongoose.model("bus", busSchema);
export default bus;
