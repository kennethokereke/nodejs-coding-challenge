import express, { Router, Request, Response } from 'express';
const router: Router = express.Router();
const users: any[] = require('./../../data/users.json');

//viewing all the users 
router.get('/', (req: Request, res: Response) => {
    console.log(users)
    res.send(users)
})

export default router;