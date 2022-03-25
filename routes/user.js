const express = require('express');
const {registerUser , authUser , allUsers} = require("../controllersforchatapp/usercontroller")
const { protect } = require("../middlewareforchatapp/authmiddleware")
const router = express.Router();

router.post('/createuserforchat', registerUser)
router.post('/login' , authUser)
router.get('/' , protect , allUsers)

module.exports = router;