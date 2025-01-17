#! /usr/bin/env node

require("dotenv").config();

const { Client } = require("pg");

const SQL = `
DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  edit_timestamp timestamp DEFAULT CURRENT_TIMESTAMP,
  text TEXT
);

INSERT INTO messages (username, text) 
VALUES
  ('Nick Ng', 'I like to nap.'),
  ('Toffle', 'Is that a mouse I smell?'),
  ('Chloe Blazey', 'The Gooby Kingdom is my domain.');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:5432/messageboard`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
