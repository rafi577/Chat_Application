//external module
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import path from 'path'

//internal module
import {notFoundHandler,errorHandler} from './middleware/common/errorHandler'

//initializing express
const app = express();
dotenv.config();
app.use(express.json());



//connecting database...
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL|| '')
    .then(()=>console.log('database connected.'))
    .catch((err:Error)=>console.log(err))



//set view engine
app.set('view engine','ejs');

//set static folder
app.use(express.static(path.join(__dirname,"public")))



//routes handler
app.use(notFoundHandler);


app.use(errorHandler);


app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}...`);
})