const express=require("express");
const app=express();
const cookieParser=require('cookie-parser')
const errorMiddleware=require('./middlewares/errors')
app.use(express.json());
app.use(cookieParser())
// const dotenv = require('dotenv')
const path= require('path')
// setting up config file
if (process.env.NODE_ENV!=='PRODUCTION') require('dotenv').config({path:'backend/config.env'})


// Import all routes

const products=require('./routes/product');
const auth=require('./routes/auth')
const order=require('./routes/order')
const payment=require('./routes/payment')

app.use('/api/v1',products)
app.use('/api/v1',auth)
app.use('/api/v1',order)
app.use('/api/v1',payment)

if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'../frontend/build/index.html'))
    })
}

// Middleware to haandle the error
app.use(errorMiddleware);

module.exports=app