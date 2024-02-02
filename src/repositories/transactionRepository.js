import TransactionSchema from '../schemas/Transaction.js';

async function create(data){
    return TransactionSchema.create(data);
}

async function findAllByUser(id){
    return await TransactionSchema.find({ userId: id });
}

async function updateTransaction(idTransaction, updateItems){
    return await TransactionSchema.findOneAndUpdate({_id: idTransaction}, {$set: updateItems}, { new: true})
}

async function deleteTransaction(idTransaction){
    return await TransactionSchema.findByIdAndDelete({_id: idTransaction})
}

export default { create , findAllByUser, updateTransaction, deleteTransaction }