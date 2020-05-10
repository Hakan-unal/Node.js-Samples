var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');


exports.display = (req, res) => {
    let elemans = JSON.parse(localStorage.getItem('personels'));
    res.render('index', {
        title: 'HOMEPAGE',
        personels: elemans
    });
}