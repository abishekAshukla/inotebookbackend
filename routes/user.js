const express = require('express');
const {registerUser , authUser } = require("../controllersforchatapp/usercontroller")
// const { protect } = require("../middleware/authMiddleware")
const router = express.Router();

router.post('/createuserforchat', registerUser)
router.post('/login' , authUser)

module.exports = router;