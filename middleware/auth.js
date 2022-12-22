const jwt=require('jsonwebtoken')

const authentication=async function(req,res,next){
    try {
        let token=req.headers.token
        if(!token){return res.status(401).send({msg:'token must present'})}
        let decoded=jwt.verify(token,'secret')
        next()
    } catch (error) {
        res.status(500).send({msg:error.essage})
    }
}

module.exports={
    authentication
}