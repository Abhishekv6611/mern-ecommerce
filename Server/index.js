const express = require('express');
const { PORT } = require('./config');
const router = require('./router');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
//Routing the admin and user 
app.use(router);

app.get('/', (req, res) => {
    res.send("Welcome to base router");
});

app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
});
