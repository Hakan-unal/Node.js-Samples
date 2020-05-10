const express = require('express');
const app = express();
const port = 3000;

const adminRoute = require('./routes/admin');
const userRoute = require('./routes/user');
const errorController = require('./controller/error');

const bodyParser = require('body-parser');


app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoute);
app.use(userRoute);
app.use(errorController.display404Page);

app.listen(port, (error) => {
    if (error) {
        console.log(`${error}`);
    } else {
        console.log(`Listen port: ${port} `);
    }
});


