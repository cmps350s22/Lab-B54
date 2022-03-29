const baseUrl = '/api/accounts'

class AccountRepo {
    //returns all the accounts depending on the type the user selected
    async getAccounts(acctType) {
        const url = `/api/accounts?type=${acctType}`
        const accounts = await fetch(url)
        return accounts.json()
    }

    async deleteAccount(accountNo) {
        const url = `/api/accounts/${accountNo}`
        const init = {
            method : 'DELETE'
        }
        await fetch(url, init)
    }

    async addAccount(account) {
        const url = `/api/accounts`
        const init = {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(account)
        }
        await fetch(url, init)
    }

    async updateAccount(account) {
        const url = `/api/accounts`
        const init = {
            method : 'PUT',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(account)
        }
        await fetch(url, init)
    }

    async addTrans(trans) {
        const url = `/api/accounts/${trans.accountNo}/trans`
        const init = {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(trans)
        }
        await fetch(url, init)
    }
}

export default new AccountRepo()
