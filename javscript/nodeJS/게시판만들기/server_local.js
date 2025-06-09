// const port = Math.floor(Math.random() * 9000) + 1000;
// 1000 ~ 9999 사이의 랜덤한 포트 번호 생성

const port  = 3879


const express = require('express');
const app = express();
const sha = require('sha256')

// 쿠키 미들웨어 등록
const cookieParser = require('cookie-parser');
app.use(cookieParser('aabbccdd'));

// 세션 미들웨어 등록
const session = require('express-session');
app.use(session({
  secret: 'neverknowthiskey',
  resave: false,
  saveUninitialized: true
}));

// 환경 변수 로드
require('dotenv').config();

// 정적파일, 템플릿 설정
app.use(express.static('public'));
app.set('view engine', 'ejs');

// 바디 파서
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));

// MongoDB 설정
const { MongoClient, ObjectId } = require('mongodb');
const url = process.env.MONGO_URL;
let mydb;

// Mongo 연결 및 서버 실행
MongoClient.connect(url)
  .then(client => {
    console.log("MongoDB 연결 성공");
    mydb = client.db('myboard');

    app.listen(port, function () {
      console.log("포트 " + port + "으로 서버 대기중...");
      console.log("http://localhost:"+ port);
    });
  })
  .catch(err => {
    console.error("MongoDB 연결 실패:", err);
  });

// 라우팅
app.get('/', (req, res) => {
  res.render('index.ejs', { user: req.session.user || null });
});

app.get('/enter', (req, res) => {
  res.render('enter.ejs');
});

app.get('/login', (req, res) => {
  console.log('로그인 페이지');
  if(req.session.user) {
    req.session.user = req.body;    
    res.send('최초 로그인')
  } else {
    res.render('login.ejs');    
  }
});

// 쿠키 예제
app.get('/cookie', (req, res) => {
  let milk = parseInt(req.signedCookies.milk);
  if (isNaN(milk)) milk = 0;
  milk += 1000;
  res.cookie('milk', milk, { signed: true });
  res.send('product: ' + milk + '원');
});

// 세션 예제
app.get('/session', (req, res) => {
  if (isNaN(req.session.milk)) req.session.milk = 0;
  req.session.milk += 1000;
  res.send("session: " + req.session.milk + "원");
});

// 글 저장
app.post('/save', (req, res) => {
  console.log(req.body);
  mydb.collection('post').insertOne({
    title: req.body.title,
    content: req.body.content,
    date: req.body.someDate
  })
    .then(result => {
      console.log('데이터 추가 성공');
      res.redirect('/list');
    })
    .catch(err => console.error(err));
});

// 글 목록
app.get('/list', (req, res) => {
  mydb.collection('post').find().toArray()
    .then(result => {
      res.render('list.ejs', { data: result });
    })
    .catch(err => console.error(err));
});

// 글 삭제
app.post('/delete', (req, res) => {
  const id = new ObjectId(req.body._id);
  mydb.collection('post').deleteOne({ _id: id })
    .then(result => {
      console.log("삭제완료");
      res.status(200).send('삭제성공');
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('삭제실패');
    });
});

// 글 상세
app.get('/content/:id', (req, res) => {
  const id = new ObjectId(req.params.id);
  mydb.collection('post').findOne({ _id: id })
    .then(result => {
      if (!result) return res.status(404).send('글이 없습니다');
      res.render('content.ejs', { data: result });
    })
    .catch(err => console.error(err));
});

// 글 수정 페이지
app.get('/edit/:id', (req, res) => {
  const id = new ObjectId(req.params.id);
  mydb.collection('post').findOne({ _id: id })
    .then(result => {
      if (!result) return res.status(404).send('해당 게시글을 찾을 수 없습니다.');
      res.render('edit.ejs', { data: result });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('서버 에러');
    });
});

// 글 수정 처리
app.post('/edit', (req, res) => {
  const id = new ObjectId(req.body.id);
  mydb.collection('post').updateOne(
    { _id: id },
    {
      $set: {
        title: req.body.title,
        content: req.body.content,
        date: req.body.someDate
      }
    }
  )
    .then(result => {
      console.log('데이터 수정 성공');
      res.redirect('/list');
    })
    .catch(err => console.error(err));
});

// 로그인 요청
app.post('/login', function(req, res) {
  const { userid, userpw } = req.body;

  console.log("아이디: " + userid);
  console.log("비밀번호: " + userpw);

  mydb.collection('account').findOne({ userid })  // 사용자 컬렉션 이름이 'user'라고 가정
    .then(result => {
      if (!result) {
        return res.status(404).send('해당 사용자 없음');
      }
      if (result.userpw === sha(userpw)) {
        req.session.user = result;  // 세션에 저장
        res.render('index.ejs', {user: req.session.user})
        
      } else {
        res.render('login.ejs');
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('서버 에러');
    });
});

app.get('/logout', function(req, res) {
console.log('로그아웃');
req.session.destroy();
res.render('index.ejs', {user: null});
})

app.get('/signup', function(req, res) {
  console.log('회원가입');
  res.render('signup.ejs');
});

app.post('/signup', function(req, res) {
  console.log(req.body.userid);           
  console.log(req.body.userpw);
  console.log(req.body.usergroup);
  console.log(req.body.useremail);

  mydb.collection('account').insertOne({
    userid: req.body.userid,
    userpw: sha(req.body.userpw),
    usergroup: req.body.usergroup,
    useremail: req.body.useremail
  })
    .then(result => {
      console.log('회원가입 완료');
      res.redirect('/'); // 반드시 then 안에서 redirect 해줘야 순서 보장
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('회원가입 실패');
    });
});