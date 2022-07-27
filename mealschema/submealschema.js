const mongoose = require('mongoose');
const SubMealSchema = new mongoose.Schema({


    Category: {
        type: String,
        enum: ["Breakfast", "Lunch", "Evening Snack", "Dinner"]
    }
    ,

    name: {
        type: String,
    }
    ,

    fooditems: {
        type: String,
    }






})
const MealSchema2 = new mongoose.model("MealSchema2",SubMealSchema);
module.exports=MealSchema2;