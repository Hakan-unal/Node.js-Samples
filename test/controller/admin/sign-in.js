signInModel = require('../../models/sign-in');

exports.display = (req, res) => {
    res.render('sign-in', {
        title: 'SIGN-IN'
    });
}

exports.check = (req, res) => {
    let name = req.body.name;
    let password = req.body.password;
    let result = signInModel.check(name, password);
    console.log(result);
    res.redirect('/');
}