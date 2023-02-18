const { Client } = require('pg');

async function getConecction() {
  const client = new Client({
    host: 'localhost',
    post: 5432,
    user: 'santiago',
    password: 'santiago123',
    database: 'my_store',
  });
  await client.connect();
  return client;
}

module.exports = getConecction;
