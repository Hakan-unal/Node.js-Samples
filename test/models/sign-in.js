const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

exports.check = (name, password) => {
    let result = 'unsucces';
    let personels = JSON.parse(localStorage.getItem("personels"));
    personels.forEach(personel => {
        if (personel.name === name & personel.password === password) {
            result = 'succes';
        }
    });
    return result;
}