"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = require("../Controllers/users");
var router = express_1.default.Router();
//viewing all the users 
router.get('/', users_1.FindAllUser);
//create a user 
router.post('/', users_1.createUser);
//deleting users 
router.delete('/:name', users_1.deleteUser);
//updating an existing user using Dateofbirth as
// the dependant since it can never changes
router.patch('/:dateOfBirth', users_1.updatedUser);
exports.default = router;
