
// testing server
// BE, 2021

import express from 'express';
import { getAllTodos, getAllUsers } from './data';
const app = express();

const BASE_API_PATH = '/';
const PORT = 8001;


app.get(BASE_API_PATH + 'hello', (req, res) => {
    // return res.send("Hello!");
    return res.json();
    // error: return res.status(400).send(e.message);
});

app.get('/users', getAllUsers);
app.get('/todos', getAllTodos);

// serve some static content!
// not needed at the moment...
// app.use(express.static('public'));
// app.use('/static', express.static(__dirname + '/static'));

console.log(`webserver started on http://localhost:${PORT}`);
const server = app.listen(PORT);
