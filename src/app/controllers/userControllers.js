const userModel = require('../model/userModel');
const bcrypt =require ('bcryptjs');
const userServices = require('../../services/userService');
const emailConfig = require('../../config/email');


class UserControllers{
 
    //user list
    async index(req,res){
        const user = await userServices.find();
      return res.json({user});
    };

    async store(req,res){
        const user = await userServices.create(req.body);
        const {email:to,name}=req.body;
        user.password= undefined;

       await emailConfig.sendMail({
            to,
            from:"carvalho.victorfa@gmail.com ",
            subject:"cadastro usuário",
            template:"cadastroUsuario",
            text:'Olá,seja bem vindo',
            context:{
                message:'Teste de valor de variável',
                user: name,
                email:to,
            }
        });

        return res.status(201).json({user});
    };

    async show(req,res){
        const {id} = req.params;
        const user = await userServices.getById(id);
        return res.json({user});
    };

    async update (req,res){
        const{id} = req.params;
        const user = await userServices.updateByID(id,req.body,{new:true});
        return res.json({user});
    };

    async delete(req,res){
        const {id}=req.params;
        await userServices.deleteById(id);
        return res.json({msg:"Usuário deletado"});
    };
    
 async auth(req,res){
        const {email, password} = req.body;

        const user = await userModel.findOne({email});
        if(!email){
            return res.status(401).json({msg:"Credenciais inválidas"});
        }   

        await bcrypt.compare(password,use.password,{select:true});
        if(!password){
            return res.status(401).json({msg:"Credenciais inválidas"})
        } 
        return res.status(200).json({msg:"Usuário logado com sucesso"});
    };

};

module.exports= new UserControllers();
