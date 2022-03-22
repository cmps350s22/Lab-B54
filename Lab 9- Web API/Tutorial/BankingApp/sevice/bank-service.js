import BankRepo from '../repository/bank-repo.js'

const bankRepo = new BankRepo();


class BankService {
    async getAccounts(req, res) {
        const accounts = await bankRepo.getAccounts(req.params.type)
        res.json(accounts)
    }

    async getAccount(req, res) {
        const account = await bankRepo.getAccount(req.params.acctNo)
        res.json(account)
    }

    async deleteAccount(req, res) {
        await bankRepo.deleteAccount(req.params.acctNo)
        res.send(`account no ${req.params.acctNo} does not exist`)
    }

    async addAccount(req, res) {
        await bankRepo.addAccount(req.body)
        res.send(`successfully added account ${req.body.accountNo}`)
    }

    async updateAccount(req, res) {
        await bankRepo.updateAccount(req.body)
        res.send(`successfully updated account ${req.body.accountNo}`)
    }
}

export default BankService
