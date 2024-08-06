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
  date: {
    type: Date,
    required: true,
  },
});
