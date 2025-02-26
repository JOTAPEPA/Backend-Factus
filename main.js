import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

import httpFactura from './routes/factura.js';

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json());
app.use("/api/factura", httpFactura);
app.use(express.static('public'));

app.listen(process.env.PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    mongoose.connect(process.env.CNX_MONGO)
    .then(()=> console.log('conected!'))
    .catch((error)=> console.log(error)) 
})