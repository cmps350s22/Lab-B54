/*
     npm i express fs-extra morgan
 */
import express from 'express';

const app = express();
const port = process.env.PORT || 3000

// /api/accounts/?type=acctType

//middleware
app.use(express.json())

app.get('/api/accounts', getAccounts)
app.get('/api/accounts/:acctNo', getAccount)
app.delete('/api/accounts/:acctNo', deleteAccount)
app.post('/api/accounts', addAccount)
app.put('/api/accounts', updateAccount)
app.post('/api/accounts/:acctNo/trans', addTransaction)

function getAccounts(req, res) {
    const accounts = [{name : 'Abdulahi'}, {name: 'Tooba'}]
    res.json(accounts)
}
function getAccount(req, res) {
    res.send(req.params.acctNo)
}
function deleteAccount(req, res) {
    res.send(req.params.acctNo)
}
function addAccount(req, res) {
    res.send(req.body)
}
function updateAccount(req, res) {
    res.send(req.body)
}
function addTransaction(req, res) {
    res.send(req.body)
}

app.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`)
})

