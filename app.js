const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;
require('./db/conn');

app.use(express.json());

app.use(require('./createcomponent/foodauth'),
    require('./createcomponent/mealauth'),
    require('./createcomponent/userauth'));


app.get('/about', (req, res) => {
    res.send('Hello World about from the Server');

});
console.log('Response from server');
app.listen(PORT, () => {
    console.log(`Server is running on Port No: ${PORT}`);
})
