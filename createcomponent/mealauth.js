const express = require('express');
const router = express.Router();

require('../db/conn');

router.get('/', (req, res) => {
    console.log('Hello Server');
    res.send("Hello Router Js");
});

router.post('/getmealdetail', async (req, res) => {
    const { category, name} = req.body;
    if (!category || !name ) {
        return res.json({ error: "Please Fill all the details of meal" });
    }
    try {

        const meal = new FoodSchema({ category, name });
        const mealReigister = new meal.save();
        if (mealReigister) {
            res.status(201).json({ Message: "Meal created Successfully" });

        }
        else { res.status(500).json({ Message: "Failed to create meal " }); }
    }
    catch (error) {
        console.log(error);
    }


});

module.exports = router;