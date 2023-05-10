const express2=require("express")
const router2=(express2.Router())


router2.route('/:id/:pass').get((req,res)=>{
    res.status(200).send("sign in successfully")
    const userId = req.params.id;
    const userId2 = req.params.pass;


    console.log(userId,userId2)
})

module.exports=router2