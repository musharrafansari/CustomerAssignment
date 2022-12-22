const cardModel=require('../model/cardModel')

const createCard=async function(req,res){
   try {
    let data=req.body
    let saveCard=await cardModel.create(data)
    res.status(201).send({msg:'Card created successfully.',saveCard})
   } catch (error) {
    res.status(500).send({msg:error.message})
   }
}

const getCard=async function (req,res){
    try {
        let checkCard=await cardModel.find()
        res.status(200).send({msg:'Card details.',checkCard})
    } catch (error) {
    res.status(500).send({msg:error.message})
        
    }
}

module.exports={
    createCard,
    getCard
}