const app=require('./app')

// connecting to databse
require('./conn/db')

if (process.env.NODE_ENV!=='PRODUCTION') require('dotenv').dotenv.config({path:'backend/config.env'})

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server started on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})

module.exports = app
// Handle unhandles promise rejection

