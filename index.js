const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const pathToFile = path.join(__dirname, 'counters.json');
const data = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));

app.get('/', (req, res) => {
    res.send(`<h1>Main page</h1><a href="/about">About page</a> <p>${++data.counterMain}</p>`)
    fs.writeFileSync(pathToFile, JSON.stringify(data, null, 2))
});
app.get('/about', (req, res) => {
    res.send(`<h1>About page</h1><a href="/">Main page</a> <p>${++data.counterAbout}</p>`)
    fs.writeFileSync(pathToFile, JSON.stringify(data, null, 2))
});

app.listen(3000);
