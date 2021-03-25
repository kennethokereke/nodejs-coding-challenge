//loading up the frameworks and bodyParser helper
import express, {Application, Request, Response} from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './Routes/users'

//create an instance of express to serve our end points
const app: Application = express();
const PORT: number = 5000;

//configure our express instance with some body-parser settings
app.use(bodyParser.json());

app.use('/users', usersRoutes)

//Get Request
app.get('/' , (req: Request, res: Response) => {
    console.log('[test]')

    res.send('Whassup MRP!')
})

//listening to incoming events
app.listen(PORT, () => console.log(`Server running on PORT: http://localhost:${PORT}`))

