// Gerekli modüller uygualamaya import edildi
const express = require('express');
const expressApp = express();
const bodyParser = require('body-parser');
const fs = require("fs");

// Görünüm engine olarak pug kullanacağımız için bunu uygulamaya aşağıdaki kod bloğuyla aktardık
expressApp.set('view engine', 'pug');
// Pug dosyalarının yer alacağı views klasörünün localdeki views klasörü olduğunu tanımladık
expressApp.set('views', 'views');

expressApp.use(bodyParser.urlencoded({ extended: false }));

// URL  path'i / olduğunda ve client tarafında gerçekleşen eylem methodu get olduğunda pug
// bizim için form.pug dosyasını response cevabı olarak gösterir
expressApp.get('/', (req, res) => {
    res.render('form');
});

// URL  path'i / olduğunda ve client tarafında gerçekleşen eylem methodu post olduğunda requestin
// üzeridne yer alan metnin alınması lazım bu yüzden uygulamaya import ettiğimiz bodyparser modülü
// ile sayfa üzerinden post edilen bilginin içeriğine ulaşabiliyoruz. Ulaştığımız bilgiyi formText
// değişkeni içerisine attık
expressApp.post('/', (req, res) => {
    var formText = req.body.text;

    // fs modülü ile yeni bir dosya oluşturacağız.İlk parametre yeni dosyanın adı ikinci parametre
    // dosyanın içerisinde yer alacak bilgi 3. parametre ise callback fonksiyonu
    fs.writeFile("form.txt", formText, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("File created");
        }
    });

    // Yukarıdaki işlemler bittikten sonra response olarak client'ı ana dizine yönlendir
    res.redirect("/");
});

// Server 3000 portu üzerinden açıldı
expressApp.listen(3000, () => {
    console.log('Server listening port 3000');
});