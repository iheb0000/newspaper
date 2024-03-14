const mongoose = require("mongoose");
const db = require("./index.js");

const itemSchema =new mongoose.Schema({
  name:{
    type: String},
  title: {
      type: String,
      minLength: [3, "{PATH} must contain 3 characters!"]
  
  },
  body: {
      type: String,
      
  }
 
}
  );

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;