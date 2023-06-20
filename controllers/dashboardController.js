// dashboard.js
const dashboardController = {
    index: (req, res) => {
        res.render("dashboard.ejs", { title: "Dashboard", description: "Dashboard" });
    }
}

//export controller functions
module.exports = dashboardController