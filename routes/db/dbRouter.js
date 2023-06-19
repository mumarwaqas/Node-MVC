/**
 * @design by Umar Waqas
 */
const express = require('express')
const DbController = require('../../controllers/db/DbController')
const router = express.Router()

/**
 * @description 1. create users table
 * @endpoint http://localhost:3000/db/create-table/users
 * @example http://localhost:3000/db/create-table/users
 */
router.get('/create-table/users', DbController.create_users_table)

/**
 * @description 1. create data table
 * @endpoint http://localhost:3000/db/create-table/data
 * @example http://localhost:3000/db/create-table/data
 */
router.get('/create-table/data', DbController.create_data_table)


module.exports = router