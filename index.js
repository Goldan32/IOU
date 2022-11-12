const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const ejs = require("ejs");

const port_num = 3000

app.set("view engine", "ejs");

app.use(express.static('static'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing
require('./route/index')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

app.listen(port_num, function () {
    console.log(`Running on :${port_num}`);
});
