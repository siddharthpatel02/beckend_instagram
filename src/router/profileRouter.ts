import express from "express";
const profileController=require("../controller/postController");
const router=(express.Router())
router.route("/")
.post(profileController.createProfile)
.get(profileController.getProfile)
.delete(profileController.deleteProfile)
.patch(profileController.updateProfile)

module.exports =router;