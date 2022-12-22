const cardModel=require('../model/cardModel')

const createCard=async function(req,res){
   try {
    let data=req.body
    const{customerName}=data
   
    if (Object.keys(data).length == 0) {
        return res.status(400).send({ status: false, msg: "Customer data required" })}
        if (!customerName) { return res.status(400).send({ status: false, msg: "customerName is mandatory" }) }
        
        if (!(/^[a-zA-Z]+$/.test(customerName.trim()))) { return res.status(400).send({ status: false, msg: "Enter a valid customerName." }) }
    
        let saveCard=await cardModel.create(data)
    res.status(201).send({msg:'Card created successfully.',saveCard})
   } catch (error) {
    res.status(500).send({msg:error.message})
   }
}

const getCard=async function (req,res){
    try {
        let checkCard=await cardModel.find()
        if(!checkCard){return res.status(404).send({status:false,msg:"card not found"})}
        res.status(200).send({msg:'Card details.',checkCard})
    } catch (error) {
    res.status(500).send({msg:error.message})
        
    }
}

module.exports={
    createCard,
    getCard
}