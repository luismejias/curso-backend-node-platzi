
const express = require('express');
const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');


function routerApi(app){
  const router = express.Router(); // de esta manera genramos un path global para todos los endpoints de abajo
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);

}

module.exports = routerApi;
