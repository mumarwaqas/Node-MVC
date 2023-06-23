require('dotenv').config();
const mysql = require('mysql')

const express = require('express');

const fs = require('fs');
const cors = require('cors')
const path = require('path')

const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");

const {PORT}          = require('./config/index');
const {HOSTNAME}      = require('./config/index');

app.listen(PORT, () => console.log(`Server running at ${HOSTNAME}:${PORT}/`))


app.get('/', (req, res) => {

//joining path of directory 

const directoryPath = path.join(__dirname, 'config');
console.log(directoryPath); 

//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});
global.__configs = {};

        var value = eval("__configs." + "Name");

    res.send(value);

})

