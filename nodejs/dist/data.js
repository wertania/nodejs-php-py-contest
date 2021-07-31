"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTodos = exports.getAllUsers = void 0;
var pg_1 = require("pg");
var pg = new pg_1.Pool({
    max: 20,
    connectionString: 'postgres://postgres:secret@192.168.188.59:5432/testdb',
    idleTimeoutMillis: 30000
});
var getAllUsers = function (request, response) {
    pg.query('SELECT * FROM users ORDER BY user_name ASC', function (error, results) {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
exports.getAllUsers = getAllUsers;
var getAllTodos = function (request, response) {
    pg.query('SELECT * FROM todos ORDER BY user_id ASC', function (error, results) {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
exports.getAllTodos = getAllTodos;
