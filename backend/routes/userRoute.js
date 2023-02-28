// const express = require('express');
// const { User } = require('../models/userSchema');
// const jwt = require('jsonwebtoken');
// const secret = process.env.JWT_SECRET;

// const router = express.Router();

// router.post('/register', async (req, res) => {
//   const data = req.body;
//   try {
//     const existingUser = await User.findOne({ email: data.email });
//     if (existingUser) {
//       return res.status(401).json({ message: 'User already exists' });
//     }
//     const newUser = await User.create(req.body);
//     return res.status(201).json({ message: 'User Created Successfully', newUser });
//   } catch (error) {
//     return res.status(500).json({ message: 'Bad Request', errorMessage: error.message });
//   }
// });

// router.post('/login', async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       return res.status(401).json({ message: 'User not found' });
//     }
//     if (user.password === req.body.password) {
//       const token = jwt.sign({
//         exp: Math.floor((Date.now() / 1000) + (60 * 60)),
//         id: user.id,
//       }, secret);
//       return res.status(200).json({ message: 'Login Successfully', user, token });
//     } else {
//       return res.status(400).json({ message: 'Incorrect Password' });
//     }
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;

// =====================WC============================================

const express = require("express");
const router=express.Router();

const {registerUser, logInUser} = require("../controllers/userController.js")

router.post("/login", logInUser);
router.post("/register", registerUser);


module.exports = router;

//============================WCE======================================



// routes.js

// const express = require('express');
// const router = express.Router();
// const { loginUser } = require('../controllers/');

// // Route for user login
// router.post('/api/v1/user/login', loginUser);

// module.exports = router;
