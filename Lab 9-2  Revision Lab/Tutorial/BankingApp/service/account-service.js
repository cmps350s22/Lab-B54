import fs from 'fs-extra'
const filePath = './data/accounts.json'

export default class AccountService {
    async getAccounts(req, res) {
        const accounts = await getAccounts(req.query.type)
        res.json(accounts)
    }

    getAccount(req, res) {
        res.send(req.params.acctNo)
    }

    deleteAccount(req, res) {
        res.send(req.params.acctNo)
    }

    addAccount(req, res) {
        res.send(req.body)
    }

    updateAccount(req, res) {
        res.send(req.body)
    }

    addTransaction(req, res) {
        res.send(req.body)
    }
}

async function getAccounts(acctType) {
    let accounts = await fs.readJson(filePath)
    if(acctType && acctType!='All')
        accounts = accounts.filter(account => account.acctType == acctType)

    return accounts
}
