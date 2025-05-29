const { MongoClient } = require('mongodb');


// MongoDB + Node.js 접속 코드
const mongoclient = require('mongodb').MongoClient;
const url = 'mongodb+srv://tony96kimsh:tonyPw123@cluster0.b6e7jna.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
let mydb;

mongoclient.connect(url)
  .then(client => {
    console.log('몽고DB 접속 성공');
    mydb = client.db('myboard');
    

    app.listen(9500, function() {
    console.log("포트 9500으로 서버 대기중...");
  });
})
.catch(err => {
  console.log(err);;
})


const express = require('express');
const app = express();

// 루트 페이지
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})

app.get('/enter', function(req, res){
  res.sendFile(__dirname + '/enter.html');
})

app.get('/list', function(req, res) {  
  // conn.query("SELECT * FROM post", function(err, rows, field) {
  // if(err) throw err;
  // console.log(rows);
  // })

  mydb.collection('post').find().toArray().then(result => {
      console.log(result);
    })
});
