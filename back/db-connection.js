require('dotenv').config();
const mysql = require("mysql2");

const {DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME} = process.env;

const config = {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    multipleStatements: true,
};

const connection = mysql.createPool(config);

module.exports = connection;