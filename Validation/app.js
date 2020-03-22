const express = require('express');
const expressApp = express();
const bodyParser = require('body-parser');

const signInRoute = require('./routes/sign-in');
const signUpRoute = require('./routes/sign-up');

expressApp.set('view engine', 'pug');
expressApp.set('views', 'views');

expressApp.use(bodyParser.urlencoded({ extended: false }));

expressApp.get('/', (req, res) => {
    res.render('index');
});

expressApp.use('/validation', signInRoute);

expressApp.use('/validation', signUpRoute);


expressApp.listen(3000, () => {
    console.log('Server listening port 3000');
});