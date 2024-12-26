const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage({ messageText, messageUsername }) {
  await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [
    messageUsername,
    messageText,
  ]);
}

module.exports = {
  getAllMessages,
  insertMessage,
};
