const express = require('express');
const router = express.Router();

require('../db/conn');


router.get('/', (req, res) => {
    console.log('Hello Server');
    res.send("Hello Router Js");
});

router.post('/getmealdetail', async (req, res) => {
    const { name, calorieRequirement} = req.body;
    if (!name || !calorieRequirement) {
        return res.json({ error: "Please Fill all the details of user" });
    }
    try {
     
        const User = new FoodSchema({ name, calorieRequirement});
        const userReigister = new User.save();
        if (userReigister) {
            res.status(201).json({ Message: "User created Successfully" });

        }
        else { res.status(500).json({ Message: "Failed to create user " }); }
    }
    catch (error) {
        console.log(error);
    }


});

module.exports = router;