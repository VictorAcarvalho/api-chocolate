require('dotenv').config();
const morgan = require ('morgan');
const express = require('express');
const app = express();
const routes = require('./routes');
const logger = require('./helper/logger');
app.use(express.json());
app.use(morgan('tiny'));
app.use(routes);
app.use((error,req,res,next)=>{
    logger.error(error);
    return res.status(500).json({msg:"Houve um erro interno."})
});
app.listen(process.env.PORT || 3000, ()=> console.log(`API funcionando  na porta ${process.env.PORT || 3000}`));
