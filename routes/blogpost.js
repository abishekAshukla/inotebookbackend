const express = require("express");

const {
  getblog,
  createBlog, addEmail
} = require("../controllersforblog/blogpostcontrollers");

const router = express.Router();

router.route("/blog/:blogId").get(getblog);
router.post("/createblog", createBlog);
router.post("/addmail", addEmail);

module.exports = router;
