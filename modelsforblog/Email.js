const mongoose = require("mongoose");

const emailSubscribersSchema = mongoose.Schema(
  {
    email: { type: "String", required: true },
  },
  { timestaps: true }
);

const EmailSubscribers = mongoose.model(
  "EmailSubscribers",
  emailSubscribersSchema
);

module.exports = EmailSubscribers;
