const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogsubscriber = new Schema(
  {
    email: {
      type: String,
      required: true,
    }
  },
  {
    timestamp: true,
  }
);

module.exports = new mongoose.model("subscribers", blogsubscriber);
