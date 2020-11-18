const routes = require('express').Router();
const userControllers = require('../src/app/controllers/userControllers');

routes.get('/user',userControllers.index);
routes.post('/user',userControllers.store);
routes.get('/user/:id',userControllers.show);
routes.put('/user/:id',userControllers.update);
routes.delete('/user/:id',userControllers.delete);

routes.post('/login', userControllers.auth);
    


module.exports = routes;