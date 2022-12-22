const mongoose=require('mongoose')

const customerSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,

    },
    mobileNumber:{
        type:String,
        require:true,
        // unique:true,
    },
    DOB:{
        type: Date,
        require:true,
    },
    emailId:{
        type:String,
        require:true,
        unique:true,
    },
    address:{
        type:String,
        require:true
    },
    customerId:{
        type:String,
        require:true,
        unique:true,
    },
    status:{
        type:String,
        require:true,
    },
},{timestamps:true})

module.exports=mongoose.model('Customer',customerSchema)