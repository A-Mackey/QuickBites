// 1. imports express, bodyparser and cors packages
import * as  express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
// 2 imports the AppController
import { AppController } from "./controllers/appcontroller";

// 3. an instance of the express and adding bodyParser and cors middlewares
const instance = express();
instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({ extended: false }));
instance.use(cors());

// 4. instance of the AppController
const appController = new AppController();
// 5. accessing the init() method
appController.init().then(() => { 
console.log('database and container created Successfully'); }).catch(() => {
    console.log('database and container creation failed');
    process.exit(1);
});

// 6. API methods for get, post and put
instance.get('/api/products', 
(req,res,next)=>appController.getData(req,res).catch(next));

instance.post('/api/products', 
(req,res,next)=>appController.addProduct(req,res).catch(next));

instance.put('/api/products/:id', 
(req,res,next)=>appController.updateProduct(req,res).catch(next));

// 7. listen on the port
instance.listen(9078, () => {
    console.log('started on port 9078');
});