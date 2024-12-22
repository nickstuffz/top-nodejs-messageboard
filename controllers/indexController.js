const db = require("../db/queries");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

function messagesGet(req, res) {
  res.render("index", { title: "Messageboard", messages: messages });
}

function messagesCreateGet(req, res) {
  res.render("form");
}

function messagesCreatePost(req, res) {
  let messageText = req.body.message;
  let messageUser = req.body.author;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
}

module.exports = { messagesGet, messagesCreateGet, messagesCreatePost };
