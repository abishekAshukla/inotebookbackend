const express = require('express');
const {registerUser } = require("../controllersforchatapp/usercontroller")
// const { protect } = require("../middleware/authMiddleware")
const router = express.Router();

router.post('/createuserforchat', registerUser)


module.exports = router;