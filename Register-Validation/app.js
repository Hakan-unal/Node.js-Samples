const express = require('express');
const expressApp = express();
const bodyParser = require('body-parser');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

expressApp.set('view engine', 'pug');
expressApp.set('views', 'views');

expressApp.use(bodyParser.urlencoded({ extended: false }));


expressApp.get('/', (req, res) => {
    res.render('index');
});

expressApp.get('/sign-in', (req, res) => {
    res.render('sign-in');
});

expressApp.get('/sign-up', (req, res) => {
    res.render('sign-up');
});

expressApp.post('/sign-in', (req, res) => {
    let person = JSON.parse(localStorage.getItem('person'));
    if (person.name === req.body.name & person.password === req.body.password) {
        res.redirect("/");
    }else{
        res.render('error'); 
    }
});

expressApp.post('/sign-up', (req, res) => {
    if (req.body.name !== '' & req.body.surname !== '' & req.body.email !== '' & req.body.password !== '') {
        const person = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password
        }
        let json = JSON.stringify(person);
        localStorage.setItem('person', json);
        res.redirect("/");
    } else {
        res.render('error');
    }
});

expressApp.listen(3000, () => {
    console.log('Server listening port 3000');
});