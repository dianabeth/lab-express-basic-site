const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/work', (request, response) => {
  response.sendFile(__dirname + '/views/work.html');
});

app.get('/gallery', (request, response) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

app.get('*', (request, response) => {
  console.log('Request received');
  response.send('Hello, Hello, Hello');
});

app.listen(3000);
