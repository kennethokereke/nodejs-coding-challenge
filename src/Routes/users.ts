import express, { Router, Request, Response } from 'express';

interface users {
    email: string;
    name: string;
    dateOfBirth:string;
    phoneNumber: string;
    address: address;
    
}

interface address extends users {
   street: string;
   city: string;
   state: string;
   zipCode: string;
   county: string;
   
}
const router: Router = express.Router();
const users: any[] = require('./../../data/users.json');

//viewing all the users 
router.get('/', (req: Request, res: Response) => {
    console.log(users)
    res.send(users)
})

//create a user 
router.post('/', (req: Request, res: Response) => {
    const user: any = req.body
    users.push(user)
    res.send(`User with the name ${user.name} was added to the database `)

})

export default router;