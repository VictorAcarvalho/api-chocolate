const userModel = require('../app/model/userModel');
class UserService {
    //Lista um usuário por id
     getById= async (id) => {  
    try {
        return await userModel.findById(id);
    } catch (error) {
        console.log(error);    
    }
};
    //Cria um usuário
    create = async (req) =>{
       try{ return await userModel.create(req);
       } catch(error){
           console.log(error);
       }
    };
    //Faz o update de um usuário por id
    updateByID = async (id,req) =>{
        try {
            return await userModel.findByIdAndUpdate(id,req);
        } catch (error) {
            console.log(error);
        }
    }
    //Lista todos os usuários
    find = async ()=>{
        try {
            return await userModel.find();
        } catch (error) {
            console.log(error)
        }
    };
    //deleta um usuário por id
    deleteById = async(id)=>{
        try {
            await userModel.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
        }
    }


};

module.exports= new UserService();