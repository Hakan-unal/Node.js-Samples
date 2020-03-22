const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');
let array = JSON.parse(localStorage.getItem('persons'));

exports.signUp = (req) => {
    const person = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password
    }
    array.push(person);
    localStorage.setItem("persons", JSON.stringify(array));
}

