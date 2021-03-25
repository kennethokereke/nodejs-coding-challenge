import { Switch } from '@material-ui/core';
import express, { Router, Request, Response } from 'express';
import {createUser, deleteUser, FindAllUser, updatedUser} from '../Controllers/users'




const router: Router = express.Router();


//viewing all the users 
router.get('/', FindAllUser)

//create a user 
router.post('/', createUser )



//deleting users 
router.delete('/:name', deleteUser)


//updating an existing user using Dateofbirth as
// the dependant since it can never changes
router.patch('/:dateOfBirth',updatedUser)



export default router;