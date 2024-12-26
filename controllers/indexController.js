const db = require("../db/queries");

async function messagesGet(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Messageboard", messages: messages });
}

function messagesCreateGet(req, res) {
  res.render("form");
}

async function messagesCreatePost(req, res) {
  let messageText = req.body.message;
  let messageUsername = req.body.author;
  await db.insertMessage({ messageText, messageUsername });
  res.redirect("/");
}

module.exports = { messagesGet, messagesCreateGet, messagesCreatePost };
