const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

class User {
    constructor(obj) {
        this.id = Math.round(Math.random() * 10000).toString();
        this.name = obj.name;
        this.surname = obj.surname;
        this.department = obj.department;
        this.email = obj.email;
        this.password = obj.password;
    }
    saveUser() {
        let list;
        if (localStorage.getItem('personels') == null) {
            list = [];
        } else {
            list = JSON.parse(localStorage.getItem("personels"));
        }
        list.push(this);
        localStorage.setItem('personels', JSON.stringify(list));
    }
}

module.exports = User;
