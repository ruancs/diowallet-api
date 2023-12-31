import authService from "../services/authService.js";

async function signup(req , res){
    const body = req.body;

    try{
        const resService = await authService.signup(body);
        res.status(201).send(resService)
    }catch (err){
        res.status(409).send(err.message)
    }
}

export default {signup}