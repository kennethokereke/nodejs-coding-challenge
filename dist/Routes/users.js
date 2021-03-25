"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var users = require('./../../data/users.json');
//viewing all the users 
router.get('/', function (req, res) {
    console.log(users);
    res.send(users);
});
//create a user 
router.post('/', function (req, res) {
    var user = req.body;
    users.push(user);
    res.send("User with the name " + user.name + " was added to the database ");
});
exports.default = router;
