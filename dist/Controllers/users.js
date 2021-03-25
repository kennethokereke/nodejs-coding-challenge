"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllUser = void 0;
var users = require('../data/users.json');
// find users
var FindAllUser = function (req, res) {
    console.log(users);
    res.send(users);
};
exports.FindAllUser = FindAllUser;
