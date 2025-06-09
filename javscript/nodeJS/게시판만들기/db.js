// db.js
require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');

const url = process.env.MONGO_URL;
let mydb;

async function connectDB() {
  const client = await MongoClient.connect(url);
  mydb = client.db('myboard');
  console.log('✅ MongoDB 연결 성공');
}

function getDB() {
  return mydb;
}

module.exports = { connectDB, getDB, ObjectId };