const express = require('express');
const router = express.Router();

require('../db/conn');
const Food = require('../mealschema/fooditemschema');


router.get('/', (req, res) => {
    console.log('Hello Server');
    res.send("Hello Router Js");
});

router.post('/getmealdetail', async (req, res) => {
    const { name, calories, protein, carb, fat, acceptedUnits, itemWeight } = req.body;
    if (!name || !calories || !protein || !carb || !fat || !acceptedUnits || !itemWeight) {
        return res.json({ error: "Please Fill all the details of food" });
    }
    try {
        const foodExist = await new Food.findOne({ name: name });
        if (foodExist) {
            return res.status(422).json({ error: "Food Item already exist" });
        }
        const food = new FoodSchema({ name, calories, protein, carb, fat, acceptedUnits, itemWeight });
        const foodReigister = new food.save();
        if (foodReigister) {
            res.status(201).json({ Message: "Food Item registered Successfully" });

        }
        else { res.status(500).json({ Message: "Failed to registered Food Item " }); }
    }
    catch (error) {
        console.log(error);
    }


});

module.exports = router;