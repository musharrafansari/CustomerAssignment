const express=require('express')
const bodyParser=require('body-parser')
const route=require('./route/routes')
const { default: mongoose } = require('mongoose')
const app=express()

app.use(bodyParser.json())

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://musharrafansari:XY5t9CKinqT75evR@cluster0.xsylin5.mongodb.net/Assignment',{
    useNewUrlParser:true
})
.then(()=>{
    console.log('mongodb is connected.')
})
.catch((error)=>{
    console.log(error)
})

app.use('/',route)

app.listen(6000,()=>{
    console.log(`express is running at ${6000}`)
})

