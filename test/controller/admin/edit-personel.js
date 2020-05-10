editPersonelModel = require('../../models/edit-personel');
const signUpModel = require('../../models/sign-up');

exports.display = (req, res) => {
    const personel = editPersonelModel.get(req.params.id);
    res.render('edit-personel', { title: 'Edit Personel', personel: personel });
}


exports.edit = (req, res) => {
    if (req.body.name !== "" & req.body.surname !== "" & req.body.department !== "" & req.body.email !== "" & req.body.password !== "") {
        editPersonelModel.post(req.params.id);
        let newP = new signUpModel(req.body);
        newP.saveUser();
        res.redirect('/');
    }
}