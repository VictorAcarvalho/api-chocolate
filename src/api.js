require('dotenv').config();
const morgan = require ('morgan');
const express = require('express');
const app = express();
const routes = require('./routes');
app.use(express.json());
app.use(morgan('tiny'));
app.use(routes);
app.listen(process.env.PORT || 3000, ()=> console.log(`API funcionando  na porta ${process.env.PORT || 3000}`));
