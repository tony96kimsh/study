// 1000 ~ 9999 사이의 랜덤한 포트 번호 생성
// const port = Math.floor(Math.random() * 9000) + 1000;

const port = 2839
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
    console.log("포트 " + port + "으로 서버 대기중...");
    mydb = client.db('myboard');

    app.listen(port, function() {
      
  });
})
.catch(err => {
  console.log(err);
})


app.get('/', function(req, res){
  // res.sendFile(__dirname + '/index.html');
  res.render('enter.ejs');
})

app.get('/enter', function(req, res){
  res.render('enter.ejs');
})

// 정적파일 라이브러리
app.use(express.static('public'))

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
      res.redirect('/list');
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
      res.status(200).send('삭제성공');
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('삭제실패');
    })
})

app.get('/content/:id', function(req, res){
  console.log(req.params.id);
  req.params.id = new ObjId(req.params.id);
  console.log(req.params.id);
  
    mydb
      .collection('post')
      .findOne({_id: req.params.id})
      .then(result => {
        console.log(result);
        res.render('content.ejs', {data: result});
    })
  // res.render('content.ejs');
})

app.get('/edit/:id', function(req, res){
  console.log(req.params.id);
  const objId = new ObjId(req.params.id);

  mydb.collection('post')
    .findOne({ _id: objId })
    .then(result => {
      if (!result) return res.status(404).send('해당 게시글을 찾을 수 없습니다.');
      console.log(result);
      res.render('edit.ejs', { data: result });  // ✅ data 넘기고 렌더링
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('서버 에러');
    });
});

app.post('/edit', function(req, res) {
  console.log(req.body);

  req.body.id = new ObjId(req.body.id);

  // updataOne(수정할 게시물 식별자, 수정할 값)
  // 수정할 값의 : {$set : {키: 변경할 값}}
  mydb.collection('post')
    .updateOne({_id: req.body.id}, 
      {$set : {
        title: req.body.title,
        content: req.body.content,
        date : req.body.someDate
     }})
    .then(result => {
      console.log(result);
      console.log('데이터 수정 성공');
      res.redirect('/list');
    })
    .catch((err) => {
      console.log(err);
    })
});