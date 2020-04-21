const signUpModel = require('../../models/sign-up');

exports.display = (req, res) => {
    res.render('sign-up', {
        title: 'SIGN-UP',
    });
}

exports.register = (req, res) => {
    if (req.body.name !== "" & req.body.surname !== "" & req.body.department !== "" & req.body.email !== "" & req.body.password !== "") {
        let newP = new signUpModel(req.body);
        newP.saveUser();
    }
    res.redirect('/');
}