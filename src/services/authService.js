import bcrypt from "bcrypt"
import authRepository from "../repositories/authRepository.js";

async function signup(body){
   
const hashPassword = bcrypt.hashSync(body.password, 10);

const userExists = await authRepository.findByEmail(body.email);
if(userExists) throw new Error("usuario ja existe!!!")

return await authRepository.create({...body, password: hashPassword})

}

async function signin(body){

    const userExists = await authRepository.findByEmail(body.email);
    if(!userExists) throw new Error("email ou senha inválidos!");
    
    const passwordOk = bcrypt.compareSync(body.password, userExists.password)
    if(!passwordOk) throw new Error("email ou senha inválidos!");

    return authRepository.generateToken(userExists._id);
}

async function userLogged(id){
    const user = await authRepository.findById(id)
    if(!user) throw new Error ("Usuário não encontrado");
    return user
}


export default {signup,signin,userLogged}