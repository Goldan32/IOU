const express = require('express');
const app = express();

const port_num = 3000

app.use(express.static('static'));
app.listen(port_num, function () {
    console.log(`Running on :${port_num}`);
});