const express=require("express")
const customerController=require('../controller/customerController')
const cardController=require('../controller/cardController')
const router=express.Router()

router.post('/createCustomer',customerController.createCustomer)
router.get('/getCustomer',customerController.getCustomer)  // get details by query params
router.delete('/deleteCustomer/:customerId',customerController.deleteCustomer)

router.post('/createCard',cardController.createCard)
router.get('/getCard',cardController.getCard)

module.exports=router
