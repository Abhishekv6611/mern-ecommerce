const express = require('express');

const user = express.Router();

user.get('/userHome', (req, res) => {
    res.send("This is the UserHome");
});

module.exports = user;
