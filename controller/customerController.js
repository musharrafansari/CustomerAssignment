
const customerModel=require('../model/customerModel')



const createCustomer=async function(req,res){
    try {
        let data=req.body
        console.log(data)
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
        let id=req.params.id
        let checkId=await customerModel.findOneAndDelete({id})
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