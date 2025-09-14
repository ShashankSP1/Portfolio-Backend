const {User} = require('../models/userModel');

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  const { name, email, role } = req.body;
  try {
    const newUser = await User.create({ name, email, role });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getUsers, createUser };
