import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";

// Create User
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check existing user
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      console.log("duplciayed items");
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Get Users
const getusers = async (req, res) => {
  try {
    const users = await userModel.find();

    return res.status(200).json({
      message: "Users fetched successfully",
      allusers: users,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Delete User
const deleteusers = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await userModel.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export { createUser, getusers, deleteusers };
