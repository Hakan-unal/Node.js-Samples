const express = require('express')
const router = express.Router();
const signInController = require('../controller/admin/sign-in');
const signUpController = require('../controller/admin/sign-up');
const editPersonelController = require('../controller/admin/edit-personel');

router.get('/sign-up', signUpController.display);
router.post('/sign-up', signUpController.register);

router.get('/sign-in', signInController.display);
router.post('/sign-in', signInController.check);

router.get('/edit-personel/:id', editPersonelController.display);
router.post('/edit-personel/:id', editPersonelController.edit);

module.exports = router;



