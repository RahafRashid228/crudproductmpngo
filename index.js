import express from 'express';
import initApp from './src/initApp.js';
//import productModel from './DB/models/product.model.js';
import 'dotenv/config';
const app= express();
const port=3000;
initApp(app,express);


app.listen(port,()=>console.log(`example app listening on port ${port}!`))