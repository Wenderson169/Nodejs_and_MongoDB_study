const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const path = require('path');

const linkRoute = require('./routes/linkRoute')
const Link = require('./models/Link')

mongoose.connect('mongodb://localhost/newlinks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = mongoose.connection;

db.on("error", () => { console.log("There's an error") });
db.once("open", () => { console.log("The Bank's loaded")});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'))

app.use('/', linkRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))