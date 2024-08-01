import mongoose from "mongoose";

export const btbConnection = async () => {
  const DbUri = process.env.MONGO_URI;

  try {
    await mongoose.connect(DbUri);
    console.log(`App connected to BTBDB`.blue);
  } catch (error) {
    throw new Error(`Something went wrong! While connecting to BTBDB ${error}`.red);
  }
};
