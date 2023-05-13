import express from "express";
const signincontroller =require("../controller/authController");
const router=(express.Router())
router.route('/:id/:pass')
.get(signincontroller.signIn)

module.exports=router