const express = require('express');
const expressApp = express();
const router = express.Router();
const bodyParser = require('body-parser');

expressApp.set('view engine', 'pug');
expressApp.set('views', 'views');

expressApp.use(bodyParser.urlencoded({ extended: false }));

router.get('/', function (req, res) {
    res.render('form');
    res.end();
});

router.post('/', function (req, res) {
    console.log("Merhaba");
});

expressApp.listen(3000, () => {
    console.log('Server listening port 3000');
});