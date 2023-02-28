const Receipe = require("../models/showRecipieSchema");
const User = require("../models/userSchema");


//Show all recipie
const showAllReceipe = async (req, res) => {
  try {
    const allReceipe = await Receipe.find();
    return res.status(200).json({
      message: "Success",
      allReceipe,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const showReceipeById = async (req, res) => {
  try {
    const Myreceipe = await Receipe.findById(req.params.id);

    if (!Myreceipe) {
      return res.status(400).json({
        message: "Receipe not Available",
      });
    } else {
      return res.status(200).json({
        message: "Success",
        Myreceipe,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error or bad request",
    });
  }
};

const postMyReceipe = async (req, res) => {
  try {
    const user = await User.findById(req.userID.id);
    const newReceipe = await Receipe.create({ author: user.name}, {...req.body} );
    return res.status(200).json({
      message: "Receipe Uploaded Successfully",
      newReceipe,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { showAllReceipe, showReceipeById, postMyReceipe };