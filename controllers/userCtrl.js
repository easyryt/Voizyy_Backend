const User = require("../models/userModel"); 
const bcrypt = require("bcrypt");
const passport = require("passport");
const nodemailer = require("nodemailer");

// User sign-up
exports.signUp = async (req, res) => {
    let data = req.body
  let { name, email, password } = data;

  try {
   
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({status:false, message: "User already exists" });
    }

    // const newUser = new User({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(password, salt);

    const saveUser = await User.create(data)

    res.status(200).json({status:true, message: "User registered successfully", data:saveUser });
  } catch (error) {
    res.status(500).json({status:false, message: error.message });
  }
};








exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

// for jwt json web token





    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};







