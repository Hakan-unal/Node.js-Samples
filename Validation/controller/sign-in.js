const signInModels = require('../models/sign-in');

exports.getPage = (req, res) => {
    res.render('sign-in');
}

exports.check = (req, res) => {
    if (req.body.name !== '' & req.body.password !== '') {
        let result = signInModels.check(req);
        if (result) {
            res.render('validation');
        } else {
            res.redirect('/')
        }
    } else {
        res.render('error');
    }
}