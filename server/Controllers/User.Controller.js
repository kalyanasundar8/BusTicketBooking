// Models
import user from "../Models/User.Model.js";

// Services
import { generateToken } from "../Services/Authentication.services.js";

// Packages
import bcrypt from "bcryptjs";

// Request      POST
// Route        /api/users/register
// Description  Register a new user
const register = async (req, res) => {
  // Destructure the input data from the body
  const { name, phoneNumber, password } = req.body;

  // Check all fields
  if (!name || !phoneNumber || !password) {
    return res.status(400).json({ mssg: "All fields are mandatory" });
  }

  // Check the mobile number format
  const mobFormat = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
  const validPhoneNumber = mobFormat.test(phoneNumber);

  if (!validPhoneNumber) {
    return res.status(400).json({ mssg: "Enter a valid phoneNumber" });
  }

  // Check the user already exists
  const userExists = await user.findOne({ phoneNumber });

  // Hash the password
  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a user if user not exists
  if (!userExists) {
    const newUser = await user.create({
      name,
      phoneNumber,
      password: hashedPassword,
    });

    return res.status(201).json({
      id: newUser._id,
      name: newUser.name,
      phoneNumber: newUser.phoneNumber,
      token: generateToken(newUser._id),
    });
  }

  return res
    .status(400)
    .json({ mssg: "Oops!, Something went wrong, Please try again later" });
};

export { register };
