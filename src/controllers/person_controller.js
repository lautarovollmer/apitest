import Person from "../models/Person.js";

//CREATE PERSON
const createPerson = async (req, res) => {
  const newPerson = new Person({
    name: req.body.name,
    surname: req.body.surname,
    dni: req.body.dni,
    address: req.body.address,
    phone: req.body.phone,
  });

  try {
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//GET ALL USER
const getAllPerson = async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).json(persons);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//GET PERSON BY ID
const getPersonById = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await Person.findById(id);
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export default {
  createPerson,
  getAllPerson,
  getPersonById,
};
