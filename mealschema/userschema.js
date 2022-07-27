const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    }
    ,

    calorieRequirement: {
        type: String,
    }
    ,
    mealPlan: [
        {
            date: Date.now(),
        }
        ,
        {
            Meals: {
                type: String,
            },
        }
    ]
})

const User= new mongoose.model("User",UserSchema );
module.exports=User;