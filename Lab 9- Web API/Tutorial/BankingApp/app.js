/*
    1. initialize the package
        npm init -y

    2. add the type module to your package
        "type" : "module"

    3. install express
       npm i express

    4. Install nodemon to automatically
       restart our sever everytime we see changes

       npm i -g nodemon [window]
       sudo npm i -g nodemon [Mac]
    5. to run the application
        nodemon OR
        nodemon app.js

    6. To get your machine IP address type
        ipconfig
 */
import express from 'express';

const app = express();
const port = process.env.PORT || 3000
    /*
    export PORT = 1200
    set PORT = 1200
 */

//middleware
app.use(express.static('public'))

app.listen(port, ()=>{
    console.log(`sever listening on http://localhost:${port}`);
})
