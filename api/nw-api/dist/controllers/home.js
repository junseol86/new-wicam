"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
exports.index = (req, res) => {
    res.send('HOME');
};
exports.postgresTest = (req, res) => {
    const pool = new pg_1.Pool({
        connectionString: process.env.DB_CONNECT
    });
    pool.query('SELECT * FROM public."test-table"', (error, response) => {
        console.log(error, response);
        res.send(response);
        pool.end();
    });
};
//# sourceMappingURL=home.js.map