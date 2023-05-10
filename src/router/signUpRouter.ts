const express1=require("express")


const router=(express1.Router())
router.route("/").post((req,res)=>{res.status(200).send("signup data received")
console.log(req.body)})





module.exports =router
