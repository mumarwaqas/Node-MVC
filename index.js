/**
 * @design by Umar Waqas
 */
require('dotenv').config();
const express = require('express');
const cors = require('cors')
const cookieparser = require('cookie-parser')
const ratelimiter = require('express-rate-limit')
const helmet = require('helmet');
const csrf_mid = require('./routes/middleware/csrf_mid');
const error_mid = require('./routes/middleware/error_mid');

const app = express();

/**
 * @middleware
 */
//url encode + json encode
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieparser());
//enable cros 
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }))
app.use(helmet());
//csrf
app.use(csrf_mid.csrfInit);
app.use(csrf_mid.csrfToken);

//tell express to serve the content of public dir
app.use(express.static('public'));
app.set("view engine", "ejs");

//rate limiter

// /**
//  * @routers
//  */
// app.get('/', (req, res) => {
//     res.send('home')
// })

//description use for all type DB tables @author Umar Waqas
app.use('/db', require('./routes/db/dbRouter'));
//@description auth (signup,login,logout,isLoggedIn) @author Umar Waqas
app.use('/auth', require('./routes/auth/authRouter'));
//@description use for all type of CRUD operation @author Umar Waqas 
app.use('/data', csrf_mid.csrfProtection, require('./routes/data/dataRouter'));

//@description use for all type of CRUD operation @author Umar Waqas 
app.get('/dashboard', require('./routes/dashboard/dashboardRouter'));

//catch all error
app.use(error_mid);
const port = process.env.PORT || 2828;

// const {connection}    = require('./config/database');
const {PORT}          = require('./config/index');
const {HOSTNAME}      = require('./config/index');

app.listen(PORT, () => console.log(`Server running at ${HOSTNAME}:${PORT}/`))

//app.listen(port, () => console.log(`running at http://localhost:${port} `))


  
// /fallinlove route
// app.get("/fallinlove/:thing", function(req, res) {
//     var thing = req.params.thing;
//     //rendering love.ejs and passing variable to template
//     res.render("love.ejs", {thingVar:thing});
// });

// /post route
// app.get("/posts", function(req, res) {
//     var posts = [
//             {title: "Post 1 ", author: "Charlie"},
//             {title: "My adorable pet bunny", author: "Susy"},
//             {title: "Can you believe this pomsky?", author: "Colt"}
//         ]
//     res.render("posts.ejs", {posts: posts});
// });


//start server
// app.listen(process.env.PORT, process.env.IP, function() {
//     console.log("server started!..");
// });
