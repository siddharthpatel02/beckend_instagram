import express from "express";
const storyController=require("../controller/postController");
const router=(express.Router())
router.route("/")
.post(storyController.createStory)
.get(storyController.getStory)
.delete(storyController.deleteStory)
module.exports =router
