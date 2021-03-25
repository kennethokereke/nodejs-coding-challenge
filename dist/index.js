"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//loading up the frameworks and bodyParser helper
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var users_1 = __importDefault(require("./Routes/users"));
//create an instance of express to serve our end points
var app = express_1.default();
var PORT = 5000;
//configure our express instance with some body-parser settings
app.use(body_parser_1.default.json());
app.use('/users', users_1.default);
//Get Request
app.get('/', function (req, res) {
    console.log('[test]');
    res.send('Whassup MRP!');
});
//listening to incoming events
app.listen(PORT, function () { return console.log("Server running on PORT: http://localhost:" + PORT); });
