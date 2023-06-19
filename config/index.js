var dotenv = require('dotenv').config();

<<<<<<< HEAD
var PORT = process.env.APP_PORT || 3000;
=======
var PORT = process.env.APP_PORT || 8080;
>>>>>>> f704c9a94942c350d0b0154d822faf89bb0e1714
var HOSTNAME = process.env.APP_URL || "localhost";

module.exports = {
    PORT, HOSTNAME
}