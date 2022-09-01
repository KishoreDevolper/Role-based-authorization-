const mongoose = require("mongoose");
const address = mongoose.model(
  "Address",
  new mongoose.Schema({
      user_id:String,
    address: String
  })
);
module.exports = address;