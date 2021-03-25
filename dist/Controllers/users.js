"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedUser = exports.deleteUser = exports.createUser = exports.FindAllUser = void 0;
var users = require('./../data/users.json');
// find users
var FindAllUser = function (req, res) {
    console.log(users);
    res.send(users);
};
exports.FindAllUser = FindAllUser;
//create users
var createUser = function (req, res) {
    var user = req.body;
    users.push(user);
    res.send("User with the name " + user.name + " was added to the database ");
};
exports.createUser = createUser;
var deleteUser = function (req, res) {
    var name = req.params.name;
    users = users.filter(function (user) { return user.name !== name; });
    res.send(name + " is deleted from the database :(");
};
exports.deleteUser = deleteUser;
var updatedUser = function (req, res) {
    var dateOfBirth = req.params.dateOfBirth;
    var _a = req.body, name = _a.name, email = _a.email, phoneNumber = _a.phoneNumber, _b = _a.address, street = _b.street, city = _b.city, state = _b.state, country = _b.country, zipCode = _b.zipCode;
    var user = users.find(function (user) { return user.dateOfBirth === dateOfBirth; });
    if (name)
        user.name = name;
    if (email)
        user.email = email;
    if (dateOfBirth)
        user.dateOfBirth = dateOfBirth;
    if (phoneNumber)
        user.phoneNumber = phoneNumber;
    if (street)
        user.street = street;
    if (city)
        user.city = city;
    if (state)
        user.state = state;
    if (country)
        user.country = country;
    if (zipCode)
        user.zipCode = zipCode;
    res.send(user.name + " updated their profile");
};
exports.updatedUser = updatedUser;
