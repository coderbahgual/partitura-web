require('dotenv').config();

const express = require('express');
const cors  = require('cors');
const path = require('path');
const ejs = require('ejs');
const routes = require('./routes'); // .file

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public/')));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(process.env.PORT || '3000');