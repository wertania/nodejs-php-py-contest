
import { Pool } from 'pg';
import { Request, Response } from 'express';

const pg = new Pool({
    max: 20,
    connectionString: 'postgres://postgres:secret@192.168.188.59:5432/testdb',
    idleTimeoutMillis: 30000
});

export const getAllUsers = (request: Request, response: Response) => {
    pg.query('SELECT * FROM users ORDER BY user_name ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

export const getAllTodos = (request: Request, response: Response) => {
    pg.query('SELECT * FROM todos ORDER BY user_id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}