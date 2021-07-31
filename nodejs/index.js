"use strict";
// testing server
// BE, 2021
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var BASE_API_PATH = '/';
var PORT = 8001;
app.get(BASE_API_PATH + 'hello', function (req, res) {
    return res.send("Hello!");
    // error: return res.status(400).send(e.message);
});
// serve some static content!
// not needed at the moment...
// app.use(express.static('public'));
// app.use('/static', express.static(__dirname + '/static'));
console.log("webserver started on http://localhost:" + PORT);
var server = app.listen(PORT);
