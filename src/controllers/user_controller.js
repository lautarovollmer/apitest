import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const { sign } = jwt;

//REGISTER USER
const register = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    fullName: req.body.fullName,
    phone: req.body.phone,
    role: req.body.role,
    division: req.body.division,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.HASH_SECRET_KEY
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//LOGIN USER
const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    const decode = CryptoJS.AES.decrypt(
      user.password,
      process.env.HASH_SECRET_KEY
    );
    const descryptedPassword = decode.toString(CryptoJS.enc.Utf8);

    const accessToken = sign(
      {
        id: user._id,
        employee: user.employee,
        isAdming: user.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    !user || descryptedPassword !== req.body.password
      ? res.status(401).json("Wrong invalid credentials")
      : res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//GET ALL USER
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//GET USER BY ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//UPDATE USER
const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.HASH_SECRET_KEY
    ).toString();
  }
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export default {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
};
