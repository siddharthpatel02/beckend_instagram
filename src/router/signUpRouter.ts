import express from "express";
const signupcontroller =require("../controller/authController");
const router=(express.Router())
router.route("/")
.post(signupcontroller.signUp);
module.exports =router
