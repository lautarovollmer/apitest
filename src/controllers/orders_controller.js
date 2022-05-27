import Orders from "../models/Orders.js";

//CREATE ORDER
const createOrder = async (req, res) => {
  const newOrder = new Orders({
    title: req.body.title,
    desc: req.body.desc,
    address: req.body.address,
    phone: req.body.phone,
  });
  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//ASSIGNED ORDER
const assignedOrder = async (req, res) => {
  try {
    const assignment = await Orders.findOneAndUpdate(
      req.params.id,
      {
        $push: {
          person: req.body.personId,
          employee: req.body.employeeId,
          user: req.body.userId,
        },
      },
      { new: true }
    );
    res.status(200).json(assignment);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//GET ALL ORDERS
const getAllOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//GET ORDER BY ID
const getOrderById = async (req, res) => {
  try {
    const order = await Orders.findById(req.params.id)
      .populate("person")
      .populate("employee")
      .populate("user");
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export default {
  createOrder,
  assignedOrder,
  getAllOrders,
  getOrderById,
};
