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
        type:Number,
        require:true,
        unique:true,
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
        enum: ["ACTIVE", "INACTIVE"],
    },
},{timestamps:true})

module.exports=mongoose.model('Customer',customerSchema)