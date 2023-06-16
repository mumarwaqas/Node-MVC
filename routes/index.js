const express = require('express');

const app = express();

const router = express.Router();

//tell express to serve the content of public dir
app.use(express.static('public'));
app.set("view engine", "ejs");


//dashboard app route
app.get("/", function(req, res) {
    res.send("Home");
});

app.get('/dashboard', dashboardController.index);

  
app.listen(PORT, console.log(`Server running at ${HOSTNAME}:${PORT}/`))



module.exports = {
    router
}