const mongoose=require('mongoose')
const customerModel=require('../model/customerModel')



const createCustomer=async function(req,res){
    try {
        let data=req.body
        const{firstName,lastName,mobileNumber,DOB,emailId,address,customerId}=data
        
    //============= VALIDATION STARTS =================//
        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, msg: "Customer data required" })}

        if (!firstName) { return res.status(400).send({ status: false, msg: "firstName is mandatory" }) }
        if (!(/^[a-zA-Z]+$/.test(firstName.trim()))) { return res.status(400).send({ status: false, msg: "Enter a valid First name." }) }

        if (!lastName) { return res.status(400).send({ status: false, msg: "lastName is mandatory" }) }
        if (!(/^[a-zA-Z]+$/.test(lastName.trim()))) { return res.status(400).send({ status: false, msg: "Enter a valid Last name." }) }

         if (!mobileNumber) { return res.status(400).send({ status: false, msg: "mobileNumber is mandatory" }) }
         if (!(/^[6-9]\d{9}$/.test(mobileNumber))) { return res.status(400).send({ status: false, msg: "Enter a valid mobileNumber." }) }

        if (!DOB) { return res.status(400).send({ status: false, msg: "DOB is mandatory" }) }
        if (!(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(DOB.trim()))) { return res.status(400).send({ status: false, msg: "Enter a valid DOB" }) }
        

        if (!emailId) { return res.status(400).send({ status: false, msg: "emailId is mandatory" }) }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId.trim()))) { return res.status(400).send({ status: false, msg: "Enter a valid email address." }) }

        let emailCheck = await customerModel.findOne({ emailId: emailId })
        if (emailCheck) return res.status(400).send({ status: false, msg:  "Already emailId exist" })
        
        if (!address) { return res.status(400).send({ status: false, msg: "address is mandatory" }) }
        if (!(/^[a-zA-Z0-9\s,.'-]{3,}$/.test(address.trim()))) { return res.status(400).send({ status: false, msg: "Enter a valid address" }) }
        
        if (!customerId) { return res.status(400).send({ status: false, msg: "customerId is mandatory" }) }
        if (!(/^[1-9]\d{11}$/.test(customerId))) { return res.status(400).send({ status: false, msg: "Enter a valid customerId" }) }
        
        let saveData=await customerModel.create(data)
        res.status(201).send({ msg: "customer Created Successfully", saveData })
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
}

const getCustomer=async function(req,res){
    try {
        let data = req.query
    let filter = {
      status: 'ACTIVE',
      ...data
    }

    let checkdata=await customerModel.find(filter)
    if(!checkdata){return res.status(400).send({msg:'Customer is not present.'})}

    res.status(200).send(checkdata)
    } catch (error) {
        res.status(500).send({msg:error.essage})
    }
}

const deleteCustomer=async function(req,res){
    try {
        let customerId=req.params.customerId

        if (!mongoose.isValidObjectId(customerId)) { return res.status(400).send({ status: false, msg: 'Please enter correct length of customerId' }) }
    
        let checkId=await customerModel.findOneAndDelete(customerId)
        if(!checkId){return res.status(400).send({msg:'customer not found'})}
        res.status(200).send({msg:'customer deleted',data:checkId})
    } catch (error) {
        res.status(500).send({msg:error.essage})

    }

}
module.exports={
    createCustomer,
    getCustomer,
    deleteCustomer

}