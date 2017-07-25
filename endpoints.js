var express = require('express');
var app = express();

// GET method route
app.get('/yo', function(req, res) {
    res.send('GET request to the homepage');
});

// POST method route
app.post('/', function(req, res) {
    res.send('POST request to the homepage');
});

app.listen(8080);
