import express, { Router, Request, Response } from 'express';


const router: Router = express.Router();
let users: any[] = require('./../../data/users.json');

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

//update exisitng user by their full name
router.delete('/:name', (req: Request, res:Response) => {
    const {name } = req.params
    users = users.filter((user) => user.name !== name)
    res.send(`${name} is deleted from the database :(`)
})

//updating an existing user



export default router;