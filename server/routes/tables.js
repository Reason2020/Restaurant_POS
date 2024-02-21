const express = require('express');
const db = require('../db')
const {
    addNewTable,
    getAllTables,
    handleTableAction
} = require('../controllers/tables')

const tablesRoute = express.Router();

tablesRoute.get('/', getAllTables)
tablesRoute.post('/', addNewTable)
tablesRoute.patch('/:id', handleTableAction)

module.exports = tablesRoute