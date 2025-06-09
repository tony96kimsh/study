require('dotenv').config(); // 가장 먼저 실행되어야 함

const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI; // 🔐 안전하게 불러오기
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('MongoDB 연결 성공');
  } catch (err) {
    console.error('MongoDB 연결 실패:', err);
  } finally {
    await client.close();
  }
}

run();