import transactionService from '../services/transactionService.js'

async function create(req, res) {
    const body = req.body;
    const { _id: id } = res.locals.user;

    try {
        const transaction = await transactionService.create(body, id)
        return res.status(201).send(transaction);
    } catch (error) {
        return res.status(409).send(error.message);
    }
}

async function findAllByUser(req, res){
    const { _id:id } = res.locals.user

    try {
        const transactions = await transactionService.findAllByUser(id)
        return res.send(transactions);
        
    } catch (error) {
        res.status(500).send(error.message);
    }

}

export default { create , findAllByUser}