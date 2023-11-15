import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/AuthRoutes.js'
// import './config/db.js' 


//configue env
dotenv.config()

//database config
connectDB();

//rest object
const app = express()

//middleware 
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use('/api/v1/auth', authRoutes)


//rest api
app.get('/', (req,res) => {
    res.send( "<h1> Wellcome To Our Store </h1>");
})

//PORT
const PORT =process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log(`Server is Runing on This ${PORT}`)
})