const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/chats', express.static(path.join(__dirname, './html')));
app.use('/live', express.static(path.join(__dirname, './live')));

app.get('/', function(req, res) {
    res.redirect('/chats/');
});

require('./route')(app);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

const PORT = 8088;
const server = http.createServer(app);
server.listen(PORT);
console.log('server is listening on port : ' + PORT);
server.on('error', err => {
    console.log(err);
    process.exit(1);
});
