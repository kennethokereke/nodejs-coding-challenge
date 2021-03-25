"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users = require('../data/users.json');
var router = express_1.default.Router();
//viewing all the users 
router.get('/', function (req, res) {
    console.log(users);
    //adding pagination http://localhost:5000/users?page=1&limit=5
    var _a = req.query, page = _a.page, limit = _a.limit;
    var startIndex = (page - 1) * limit;
    var endIndex = page * limit;
    var resultUsers = users.slice(startIndex, endIndex);
    res.send(resultUsers);
});
//create a user 
router.post('/', function (req, res) {
    users.push(req.body);
    res.send("User with the name [" + req.body.name + "] was added to the database ");
});
//deleting users 
router.delete('/:name', function (req, res) {
    var name = req.params.name;
    users = users.filter(function (user) { return user.name !== name; });
    res.send(name + " is deleted from the database :(");
});
//updating an existing user using Dateofbirth as the dependant
// since it can never changes
router.patch('/:dateOfBirth', function (req, res) {
    var user = users.find(function (user) { return user.dateOfBirth === req.params.dateOfBirth; });
    user.name = req.body.name;
    user.email = req.body.email;
    user.dateOfBirth = req.body.dateOfBirth;
    user.phoneNumber = req.body.phoneNumber;
    user.street = req.body.address.street;
    user.city = req.body.address.city;
    user.state = req.body.address.state;
    user.country = req.body.address.country;
    user.zipCode = req.body.address.zipCode;
    res.send(req.body.name + " updated their profile");
});
exports.default = router;
