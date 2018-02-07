const express = require('express');

const userController = require('./controllers/usersController');

const router = express.Router();

router.post('/boda', userController.boda);





module.exports = router;
