const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');
let array = [];

exports.check = (req) => {
    const person = {
        name: req.body.name,
        password: req.body.password
    }

    const persons = JSON.parse(localStorage.getItem('persons'));
    let count = 0;
    persons.forEach(element => {
        if (element.name === person.name & element.password === person.password) {
            count++;
        }

    });
    if (count === 1) {
        return true;
    } else {
        return false;
    }
}