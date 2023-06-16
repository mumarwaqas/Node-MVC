const mysql = require('mysql')
require('dotenv').config();

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
    timezone: 'gmt+6'  //<-here this line was missing 'utc'
});


// pool.on('acquire', function (connection) {
//     console.log('Connection %d acquired', connection.threadId);
// });

// pool.on('release', function (connection) {
//     console.log('Connection %d released', connection.threadId);
// });


// pool.connect((e) => {
//     if (e) {
//         console.log("conection failed! error: " + e.message);
//         return;
//     }
//     console.log("conection success");
// });

module.exports = pool
