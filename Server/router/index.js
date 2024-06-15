const express = require('express');
const router = express.Router();
const User = require('./user');
const Admin=require('./admin')

router.use('/user', User);
router.use('/admin',Admin)

module.exports = router;
