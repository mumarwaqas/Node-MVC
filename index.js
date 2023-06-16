const express = require('express');
const app = express();

const router = express.Router();



// const {connection}    = require('./config/database');
const {PORT}          = require('./config/index');
const {HOSTNAME}      = require('./config/index');

app.listen(PORT, console.log(`Server running at ${HOSTNAME}:${PORT}/`))


const dashboardController    = require('./controllers/dashboardController');



//tell express to serve the content of public dir
app.use(express.static('public'));
app.set("view engine", "ejs");


//dashboard app route
app.get("/", function(req, res) {
    res.send("Home");
});
app.get('/dashboard', dashboardController.index);

  


  
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
