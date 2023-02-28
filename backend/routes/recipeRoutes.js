// const express = require('express');
// const { Recipe } = require('../models/recipeSchema');

// const router = express.Router();

// router.get('/', async (req, res) => {
//   try {
//     const recipes = await Recipe.find({});
//     res.status(200).json(recipes);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.post('/', async (req, res) => {
//   const recipe = new Recipe(req.body);
//   try {
//     const newRecipe = await recipe.save();
//     res.status(201).json(newRecipe);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// module.exports = router;




// // recipes.js

// const express = require('express');
// // const router = express.Router();
// const { verifyToken } = require('./authMiddleware');

// router.get('/', verifyToken, (req, res) => {
//   // Access the authenticated user via req.user
//   res.send(`Hello, ${req.user.username}!`);
// });

// module.exports = router;





const express = require("express")
const auth = require("../middleware/auth");




const router = express.Router();

const {showAllReceipe, showReceipeById, postMyReceipe,} = require("../controllers/showRecipieController");




router.get("/", showAllReceipe);
router.get("/:id", showReceipeById);
router.post("/postrecipe",auth, postMyReceipe );


module.exports=router;