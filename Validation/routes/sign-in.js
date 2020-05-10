const express = require('express');
const router = express.Router();
const signInController = require('../controller/sign-in');

router.get('/sign-in', signInController.getPage);

router.post('/sign-in', signInController.check);




module.exports = router;
