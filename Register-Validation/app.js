// Uygulama için gerekli olan modüller import edildi
const express = require('express');
const expressApp = express();
const bodyParser = require('body-parser');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

// Görünüm engine olarak pug kullanacağımız için bunu uygulamaya aşağıdaki kod bloğuyla aktardık
expressApp.set('view engine', 'pug');
// Pug dosyalarının yer alacağı views klasörünün localdeki views klasörü olduğunu tanımladık
expressApp.set('views', 'views');

expressApp.use(bodyParser.urlencoded({ extended: false }));

// URL  path'i / olduğunda ve client tarafında gerçekleşen eylem methodu get olduğunda pug
// bizim için index.pug dosyasını response cevabı olarak gösterir
expressApp.get('/', (req, res) => {
    res.render('index');
});

// URL  path'i /sign-in olduğunda ve client tarafında gerçekleşen eylem methodu get olduğunda pug
// bizim için sign-in.pug dosyasını response cevabı olarak gösterir
expressApp.get('/sign-in', (req, res) => {
    res.render('sign-in');
});

// URL  path'i /sign-up olduğunda ve client tarafında gerçekleşen eylem methodu get olduğunda pug
// bizim için sign-up.pug dosyasını response cevabı olarak gösterir
expressApp.get('/sign-up', (req, res) => {
    res.render('sign-up');
});

// Client URL path'i olarak /sign-in'de post methodunu kullandığında aşağıdaki kod bloğu çalışır.
// localStorage üzeridne yer alan person key'i ile tanımlanan veri parse edilerek bizim tanımladığımız
// person değişkeni içerisine tanımlanır
expressApp.post('/sign-in', (req, res) => {
    let person = JSON.parse(localStorage.getItem('person'));

    // Eğer localStorage üzerinden gelen name ve password değerleri post methodu sonrası sayfada yakalanan
    // name ve password değerleri ile eşleşiyorsa if koşulu sağlanır ve client ana dizine yönlendirilir
    if (person.name === req.body.name & person.password === req.body.password) {
        res.redirect("/");
    }else{

        // Eğer if içerisindeki koşul sağlanmamışsa pub bizim için response cevabı olarak error.pug dosyasını gönderir
        res.render('error'); 
    }
});

// Client URL path'i olarak /sign-up'ta post methodunu kullandığında aşağıdaki kod bloğu çalışır.
// Form üzerindeki bilgilerde herhangi bir boşluk olmaması için if bloğu eklendi
expressApp.post('/sign-up', (req, res) => {
    if (req.body.name !== '' & req.body.surname !== '' & req.body.email !== '' & req.body.password !== '') {
        
        // Eğer gerekli bilgiler boş bırakılmadıysa person objesi yaratılır ve bu obje içerisine requestle
        // gelen bilgiler eklenir ve bu bilgiler json veriye çevrilerek localStorage üzerinde eklenir
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

// Server 3000 portu üzerinden açıldı
expressApp.listen(3000, () => {
    console.log('Server listening port 3000');
});