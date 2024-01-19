import transactionService from '../services/transactionService.js'

async function create(req, res) {
    const body = req.body;
    const id = "65a89d8e14b6f2a58a79e2e8"

    try {
        const transaction = await transactionService.create(body, id)
        return res.status(201).send(transaction);
    } catch (error) {
        res.status(409).send(error.message);
    }
}

export default { create }