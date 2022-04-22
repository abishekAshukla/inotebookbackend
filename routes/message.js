const express = require('express')
const { protect } = require('../middlewareforchatapp/authmiddleware')
const {
    allMessages, delAllMessages,
    sendMessage,
  } = require("../controllersforchatapp/messagecontroller");

const router = express.Router()

router.route('/:chatId').get(protect , allMessages)
router.route('/del/:chatId').get(protect , delAllMessages)
router.route("/").post(protect, sendMessage);

module.exports = router;