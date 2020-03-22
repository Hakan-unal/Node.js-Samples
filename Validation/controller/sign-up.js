const signUpModels = require('../models/sign-up');

exports.getPage = (req, res) => {
    res.render('sign-up');
}

exports.recorded = (req, res) => {
    if (req.body.name !== '' & req.body.surname !== '' & req.body.email !== '' & req.body.password !== '') {
        let result = signUpModels.signUp(req);
        res.redirect("/");
    } else {
        res.render('error');
    }
}