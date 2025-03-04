const express = require('express');
const session = require('express-session');
const passport = require("./config/passportConfig");
require("dotenv").config();
const path = require('path');

const app = express();

require('dotenv').config();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

const router = require('./routes/routes.js');
app.use('/', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
