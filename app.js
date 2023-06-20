require('dotenv').config();
const mysql = require('mysql')

const express = require('express');

const fs = require('fs');
const cors = require('cors')
const cookieparser = require('cookie-parser')
const ratelimiter = require('express-rate-limit')
const helmet = require('helmet');

const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");
const Response = require('./models/Response')

const {PORT}          = require('./config/index');
const {HOSTNAME}      = require('./config/index');

app.listen(PORT, () => console.log(`Server running at ${HOSTNAME}:${PORT}/`))

const host = (`${process.env.APP_ENV}` === "dev") ? `${process.env.DB_HOST2}` : `${process.env.DB_HOST}`;//private field
const user = (`${process.env.APP_ENV}` === "dev") ? `${process.env.DB_USERNAME2}` : `${process.env.DB_USERNAME}`;//private field
const pass = (`${process.env.APP_ENV}` === "dev") ? `${process.env.DB_PASSWORD2}` : `${process.env.DB_PASSWORD}`;//private field
const database = (`${process.env.APP_ENV}` === "dev") ? `${process.env.DB_DATABASE2}` : `${process.env.DB_DATABASE}`;//private field

console.log(host, user, pass, database);

//database: database connection via pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: host,
    user: user,
    password: pass,
    database: database,
    timezone: 'utc'  //<-here this line was missing 'utc'
});

pool.getConnection((err) => {
    console.log('Connected to MySQL Server!');
});



app.get('/', (req, res) => {

    pool.query("SELECT * FROM users", (err, results, fields) => {
        // rows fetch
        //console.log(results);
        if (err) 
        {
            let response = new Response(500, err.message, err);
            res.send(response);
        } 
        else 
        {
            if (results && results.length > 0) {
                let response = new Response(false, " Data list get Successfully", results);
                res.status(200).send(response);
            } 
            else 
            {
                let response = new Response(true, " Data list NOT FOUND", []);
                res.status(200).send(response);
            }
        }

        // res.render("employees.ejs", { title: "Employees", description: "Employees", data: data});
    });
    // res.send('home');

})
