/**
 * @design by Umar Waqas
 */
const bcryptjs = require('bcryptjs')
//const AuthModel = require('../models/auth/AuthModel')
const Response = require('../models/Response')
const DB_Define = require('../utils/DB_Define')
const Define = require('../utils/Define')
const Helper = require('../utils/Helper')

const AuthController = {
    login: async (req, res) => {
        res.render("login.ejs", { title: "Dashboard", description: "Dashboard" });
    },//login

}

module.exports = AuthController