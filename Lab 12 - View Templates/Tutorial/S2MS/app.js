import express from 'express'
import router from './router.js'
import morgan from 'morgan'
import {engine} from "express-handlebars";

//port number
const port = 5000
const app = express()

//two types [dynamic , static]
app.engine('hbs', engine({extname: 'hbs'}))
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.use(morgan('dev'))
app.use(express.json())
app.use('/', router)

//CRUD operations on
app.listen(port, () => {
    console.log(`Server started @http://localhost:${port}`)
})

//a middleware
///import {engine} from "express-handlebars"
// app.engine("hbs",
//     engine({
//         extname: "hbs",
//         defaultLayout: "main",
//         layoutsDir: "views/layouts/",
//     }));
//
// app.set('view engine','hbs');
// app.set('views', 'views');

