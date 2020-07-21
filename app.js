const express = require('express');
const hbs = require('hbs');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

hbs.registerPartials(__dirname + '/views/partials');
app.locals.title = 'Default title...';

app.get('/home', (request, response) => {
  response.render('main', { title: 'Home', message: 'This is the home page' });
  //response.sendFile(__dirname + '/views/home.html');
});

app.get('/work', (request, response) => {
  response.render('main', { title: 'Work', message: 'Display content about her career here!' });
  //response.sendFile(__dirname + '/views/work.html');
});

app.get('/gallery', (request, response) => {
  response.render('main', { title: 'Gallery', message: 'Display some images here!' });
  //response.sendFile(__dirname + '/views/gallery.html');
});

app.get('/about', (request, response) => {
  response.render('about', {
    name: 'Ngozi Okonjo-Iweala',
    age: 66,
    location: { city: 'New York', country: 'USA' },
    husband: 'Dr. Ikemba Iweala',
    children: [
      { name: 'Okechukwu Iweala', isMale: true, graduated: 'Harvard' },
      { name: 'Uzodinma Iweala', isMale: true, graduated: 'Harvard' },
      { name: 'Onyinye Iweala', isMale: false, graduated: 'Harvard' },
      { name: 'Uchechi Iweala', isMale: true, graduated: 'Harvard' }
    ]
  });
});

app.get('*', (request, response) => {
  //console.log('Request received');
  response.send('Hello, Hello, Hello');
});

app.listen(3000);
