import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import  {Connection}  from './database/db.js';
import Router from './routes/route.js';

const Port  = 8000
const app = express()

app.use(cors()); 
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',Router);
Connection()

app.listen(Port, ()=> console.log(`server is running successfully at PORT ${Port}`))