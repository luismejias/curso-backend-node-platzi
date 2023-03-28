const express = require('express');
const cors = require('cors');

const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');


const app = express();
const port = process.env.PORT || 3000;
/* app.use(express.json()); Este middleWare es necesario para recibir información
 que nos envia por post en formato json*/
app.use(express.json());
const whiteList = ['http://localhost:8080', 'http://myapp.com'];
const options = {
  origin: (origin, callback)=>{
    if(whiteList.includes(origin) || !origin){
      callback(null, true);
    } else {
      callback(new Error ('No permitido'));

    }
  }
}
app.use(cors(options));
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Corriendo en el puerto ', port);
});

