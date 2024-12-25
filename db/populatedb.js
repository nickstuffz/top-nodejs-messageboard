#! /usr/bin/env node

require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  date VARCHAR ( 255 ),
  text TEXT
);

INSERT INTO messages (username, date, text) 
VALUES
  ('Bryan', 'testdate', 'im bryan'),
  ('Odin', 'testdate', 'im odin'),
  ('Damon', 'testdate', 'im damon');
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

// what should my table look like?

// let messages = [
//     {
//       text: 'Hi there!',
//       user: 'Amando',
//       added: 2024-12-25T09:32:12.461Z
//     },
//     {
//       text: 'Hello World!',
//       user: 'Charles',
//       added: 2024-12-25T09:32:12.461Z
//     }]
