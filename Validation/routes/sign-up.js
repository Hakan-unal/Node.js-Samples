const express = require('express');
const router = express.Router();
const signUpController = require('../controller/sign-up');
const signUpModels = require('../models/sign-up');

router.get('/sign-up', signUpController.getPage);

router.post('/sign-up', signUpController.recorded);

module.exports = router;