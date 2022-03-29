/*
     npm i express fs-extra morgan
 */
import express from 'express';
import morgan from 'morgan'
import router from './router.js'

const app = express();
const port = process.env.PORT || 3000

//middleware
//combined
app.use(morgan('combined'))
app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`)
})

