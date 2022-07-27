const mongoose = require('mongoose');
const FoodItem = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  }
  ,

  calories: {
    type: Number,
    required:true,
  }
  ,

  protein: {
    type: Number,
    required:true,
  }
  ,

  carb: {
    type: Number,
    required:true,
  }
  ,

  fat: {
    type: Number,
    required:true,
  }
  ,

  acceptedUnits: {
    type: Number,
    required:true,
    enum: ['ml', 'litre', 'Kg', 'g', 'item']
  }
  ,
  itemWeight: {
    type: Number,
    required:true
  }
})


const FoodItemSchema = new mongoose.model("FoodItem", FoodItem);

module.exports = FoodItemSchema;

