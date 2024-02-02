import transactionRepository from '../repositories/transactionRepository.js'

async function create(body, id){
    if(!id) throw new Error("User id is required")

    return await transactionRepository.create({...body, userId: id});
} 

async function findAllByUser(id){
    if(!id) throw new Error("Usuário necessário!")
    return await transactionRepository.findAllByUser(id)
}

async function updateTransaction(idTransaction, updateItems){
    if(!idTransaction || !updateItems) throw new Error("id e campo necessários!")
    return await transactionRepository.updateTransaction(idTransaction, updateItems)
}

async function deleteTransaction(idTransaction){
    if(!idTransaction)throw new Error("id necessário!");
    return await transactionRepository.deleteTransaction(idTransaction)
}

export default { create, findAllByUser, updateTransaction, deleteTransaction }