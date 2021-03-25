import express, { Router } from 'express';
let users: any[] = require('../data/users.json')


const router: Router = express.Router();


//viewing all the users 
router.get('/', (req: any, res: any) => {
    console.log(users)
    //adding pagination
    const page = req.query.page
    const limit = req.query.limit

    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const resultUsers = users.slice(startIndex, endIndex)

    res.send(resultUsers)
}
)

//create a user 
router.post('/', (req: any, res:any) => {
    
    users.push(req.body)
    res.send(`User with the name [${req.body.name}] was added to the database `)

})


//deleting users 
router.delete('/:name',  (req: any, res:any) => {
    const {name } = req.params
    users = users.filter((user) => user.name !== name)
    res.send(`${name} is deleted from the database :(`)
})


//updating an existing user using Dateofbirth as the dependant
// since it can never changes
router.patch('/:dateOfBirth',(req:any, res:any) => {
    const user = users.find((user) => user.dateOfBirth === req.params.dateOfBirth)
    user.name = req.body.name;
    user.email = req.body.email;
    user.dateOfBirth = req.body.dateOfBirth;
    user.phoneNumber = req.body.phoneNumber;
    user.street = req.body.address.street;
     user.city = req.body.address.city;
    user.state = req.body.address.state;
    user.country = req.body.address.country
    user.zipCode = req.body.address.zipCode;

    res.send(`${req.body.name} updated their profile`)

})



export default router;