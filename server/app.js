const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()


const connectDB = require('./config/db.js') 

const router = require('./routes/routers')

// middleware
app.use(cors())
app.use(express.json())


app.get(`/hello`, (req,res)=>{
    res.send('Routers')
})


app.use('/api/v1/routers', router)


const port = process.env.PORT || 5005

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log(` Server is listening on port: ${port}...`))
    }
    catch(error){
        console.log(error)
    }
}

start()