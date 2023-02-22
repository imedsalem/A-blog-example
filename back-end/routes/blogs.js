const express = require("express");
const { createBlog, getBlogs, getBlogById, upvoteBlog, downvoteBlog, search } = require("../controllers/blogs");
const router = express.Router();

router.post("/createBlog", createBlog);
router.get("/search", search);
router.get("/getBlogs", getBlogs);
router.get("/getBlogById/:id", getBlogById);

module.exports = router;