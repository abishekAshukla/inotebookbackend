const asyncHandler = require("express-async-handler");
// const router = require("../routes/messageRoutes");
const Message = require('../modelsforchatapp/Messagemodel')
const User = require('../modelsforchatapp/Usermodel')
const Chat = require('../modelsforchatapp/Chatmodel')

const allMessages = asyncHandler(async (req, res) => {
    try {
      const messages = await Message.find({ chat: req.params.chatId })
        .populate("sender", "name pic email")
        .populate("chat");
      res.json(messages);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  });

const sendMessage = asyncHandler(async (req, res) => {
    const { content, chatId } = req.body;

  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);
    // console.log(message);

    message = await message.populate("sender", "name pic");
    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "name pic email",
    });

    await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message }); // updating the latest message

    res.json(message);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
})


module.exports = {allMessages, sendMessage};