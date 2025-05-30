const port = 7233;
//express
const express = require('express');
const app = express();

// 몽고DB 키 환경 변수 처리
require('dotenv').config();

const mongoclient = require('mongodb').MongoClient;
const url = process.env.MONGO_URL;
const ObjId = require('mongodb').ObjectId;
let mydb;


// body-parse
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}));

mongoclient.connect(url)
  .then(client => {
    console.log('몽고DB 접속 성공');
    mydb = client.db('myboard');

    app.listen(port, function() {
    console.log("포트 port으로 서버 대기중...");
    console.log("http://localhost:" + port);
  });
})
.catch(err => {
  console.log(err);
})


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})

app.get('/enter', function(req, res){
  res.render('enter.ejs');
})

app.set('view engine', 'ejs');


app.post('/save', function(req, res) {
  console.log(req.body);
  console.log(req.body.content);
  console.log(req.body.someDate);
  
  mydb.collection('post')
    .insertOne({
        title: req.body.title, content: req.body.content
        ,date : req.body.someDate
     })
    .then(result => {
      console.log(result);
      console.log('데이터 추가 성공');
    })
});

app.get('/list', function(req, res) {  
  mydb.collection('post').find().toArray().then(result => {
      console.log(result);
      res.render('list.ejs', {data: result});
    })
})

app.post("/delete", function(req, res) {
  console.log(req.body._id);
  req.body._id = new ObjId(req.body._id)
  mydb.collection('post').deleteOne(req.body)
  .then(result => {
      console.log("삭제완료");
    })
})