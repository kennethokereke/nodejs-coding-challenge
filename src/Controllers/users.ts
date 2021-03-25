import {Request, Response} from 'express'
let users: any[] = require('./../data/users.json');

// find users
export const FindAllUser = (req: Request, res: Response) => {
    console.log(users)
    res.send(users)
}

//create users
export const createUser =  (req: Request, res: Response) => {
    const user: any = req.body
    users.push(user)
    res.send(`User with the name ${user.name} was added to the database `)

}

export const deleteUser = (req: Request, res:Response) => {
    const {name } = req.params
    users = users.filter((user) => user.name !== name)
    res.send(`${name} is deleted from the database :(`)
}

export const updatedUser =  (req:Request, res:Response) => {
    const {dateOfBirth} = req.params;
    const {name, email, phoneNumber, address: {street, city, state, country, zipCode,}} = req.body;
    const user = users.find((user) => user.dateOfBirth === dateOfBirth)
    if(name) user.name = name;
    if(email) user.email = email;
    if(dateOfBirth) user.dateOfBirth = dateOfBirth;
    if(phoneNumber) user.phoneNumber = phoneNumber;
    if(street) user.street = street;
    if(city) user.city = city;
    if(state) user.state = state;
    if(country) user.country = country
    if(zipCode) user.zipCode = zipCode;

    res.send(`${user.name} updated their profile`)

}



