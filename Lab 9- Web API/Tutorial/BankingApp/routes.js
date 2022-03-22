import express from 'express';
import BankService from './sevice/bank-service.js'

const router = express.Router();
const bankService = new BankService()

router.route('/accounts')
    .get(bankService.getAccounts)
    .post(bankService.addAccount)
    .put(bankService.updateAccount)

router.route('/accounts/:acctNo')
    .get(bankService.getAccount)
    .delete(bankService.deleteAccount)











// router.get('/api/accounts', bankService.getAccounts)
// router.post('/api/accounts', bankService.addAccount)
// router.put('/api/accounts', bankService.updateAccount)


// router.get('/api/accounts/:acctNo', bankService.getAccount)
// router.delete('/api/accounts/:acctNo', bankService.deleteAccount)


export default router

