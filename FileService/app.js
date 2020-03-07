const express = require('express');
const expressApp = express();
const eventEmitter = require('events');
const router = express.Router();

expressApp.set('view engine', 'pug');
expressApp.set('views', 'views');

expressApp.use('/form', function (req, res) {
    res.render('form');
    res.end();
});

expressApp.use('/', function (req, res) {
    res.send('Merhaba devam etmek için URL adresinizin sonuna form ekleyin<br /> örnek:<br />http://localhost:3000/form ');
    res.end();
});






expressApp.listen(3000, () => {
    console.log('Server listening port 3000');
});


