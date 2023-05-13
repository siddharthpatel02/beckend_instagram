import express from "express";
const router = (express.Router())
const newsFeedController=require("../controller/postController");
router.route('/:id')
.get(newsFeedController.getNewsFeed);


module.exports = router