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
import fs from 'fs-extra'

const filePath = './data/accounts.json'
const app = express();
const port = process.env.PORT || 3000
/*
export PORT = 1200
set PORT = 1200
*/

//middleware
app.use(express.static('public'))

//API

//http://localhost:3000/api/accounts?type=Saving
//http://localhost:3000/api/accounts?type=Current

app.get('/api/accounts', async (req, res) => {
    const accounts = await fs.readJson(filePath)
    const acctType = req.query.type
    let filteredAccounts = accounts
    if (acctType)
        filteredAccounts = accounts.filter(account => account.acctType == acctType)

    res.json(filteredAccounts)
})

//http://localhost:3000/api/accounts/3333
app.get('/api/accounts/:acctNo', async (req, res) => {
    const accounts = await fs.readJson(filePath)
    const account = accounts.find(account => account.accountNo == req.params.acctNo)
    res.json(account)
})


// app.post()
// app.put()
// app.delete()


app.listen(port, () => {
    console.log(`sever listening on http://localhost:${port}`);
})
