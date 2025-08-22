// routes/index.js
const express = require('express');
const { getAllUsers, addUser } = require('../controller/userController');

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', addUser);

module.exports = router;
