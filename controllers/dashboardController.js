// dashboard.js
const index = (req, res, next) => {
    console.log(req.hostname);
    res.render("dashboard.ejs", { title: "Dashboard", description: "Dashboard" });
};

//export controller functions
module.exports = {
    index,
};