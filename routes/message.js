const express = require('express')
const { protect } = require('../middlewareforchatapp/authmiddleware')
const {
    allMessages,
    sendMessage,
  } = require("../controllersforchatapp/messagecontroller");

const router = express.Router()

router.route('/:chatId').get(protect , allMessages)
router.route("/").post(protect, sendMessage);

module.exports = router;