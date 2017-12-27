const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/chats', express.static(path.join(__dirname, './html')));

app.get('/', function(req, res) {
    res.redirect('/chats/');
});

require('./route')(app);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

const server = http.createServer(app);
server.listen(8088);
server.on('error', err => {
    console.log(err);
    process.exit(1);
});
