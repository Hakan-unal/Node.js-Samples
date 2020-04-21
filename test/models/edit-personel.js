const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

exports.get = (id) => {
    let result;
    let personels = JSON.parse(localStorage.getItem('personels'));
    personels.forEach(personel => {
        if (personel.id === id) {
            result = personel;
        }
    });
    return result;
}

exports.post = (id) => {
    let personels = JSON.parse(localStorage.getItem('personels'));
    personels.forEach(personel => {
        if (personel.id === id) {
            let index = personels.indexOf(personel);
            personels.splice(index, index+1);
        }
    });
    localStorage.setItem('personels', JSON.stringify(personels));
}