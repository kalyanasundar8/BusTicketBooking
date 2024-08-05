import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    pnrNumber: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    seats: [{ type: String, required: true }],
    source: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    busNumber: {
      type: String,
      required: true,
    },
    busName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const ticket = mongoose.model("ticket", ticketSchema);
export default ticket;
