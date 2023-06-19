var dotenv = require('dotenv').config();

var PORT = process.env.APP_PORT || 3000;
var HOSTNAME = process.env.APP_URL || "localhost";

module.exports = {
    PORT, HOSTNAME
}