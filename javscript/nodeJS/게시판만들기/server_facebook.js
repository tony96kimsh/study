const port = 3879;

const express = require('express');
const app = express();
const sha = require('sha256');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyparser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
require('dotenv').config();

// 정적파일, 템플릿 설정
app.use(express.static('public'));
app.set('view engine', 'ejs');

// 바디 파서
app.use(bodyparser.urlencoded({ extended: true }));

// 쿠키 미들웨어 등록
app.use(cookieParser('aabbccdd'));

// 세션 미들웨어 등록
app.use(session({
  secret: 'neverknowthiskey',
  resave: false,
  saveUninitialized: true
}));

// ✅ Passport 초기화 및 세션 연동
app.use(passport.initialize());
app.use(passport.session());

// MongoDB 설정
const url = process.env.MONGO_URL;
let mydb;

MongoClient.connect(url)
  .then(client => {
    console.log("MongoDB 연결 성공");
    mydb = client.db('myboard');

    app.listen(port, function () {
      console.log("포트 " + port + "으로 서버 대기중...");
      console.log("http://localhost:" + port);
    });
  })
  .catch(err => {
    console.error("MongoDB 연결 실패:", err);
  });

// passport 설정
passport.serializeUser(function(user, done) {
  done(null, user.userid);
});

passport.deserializeUser(function(userid, done) {
  mydb.collection('account').findOne({ userid: userid })
    .then((result) => {
      done(null, result);
    });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "userid",
      passwordField: "userpw",
      session: true,
      passReqToCallback: false
    },
    function(inputid, inputpw, done) {
      mydb.collection("account")
        .findOne({ userid: inputid })
        .then((result) => {
          if (result && result.userpw === sha(inputpw)) {
            console.log('새로운 로그인');
            done(null, result);
          } else {
            done(null, false, { message: "비밀번호 오류" });
          }
        })
        .catch(err => done(err));
    }
  )
);

// 라우팅
app.get('/', (req, res) => {
  res.render('index.ejs', { user: req.user || null });
});

app.get('/enter', (req, res) => {
  res.render('enter.ejs');
});

app.get('/login', (req, res) => {
  console.log('로그인 페이지');
  if (req.session.passport) {
    req.session.passport = req.body;
    res.send('최초 로그인');
  } else {
    res.render('login.ejs');
  }
});

app.post('/login',
  passport.authenticate("local", { failureRedirect: '/fail' }),
  function(req, res) {
    console.log(req.session);
    console.log(req.session.passport);
    res.redirect('/');
  }
);

app.get('/logout', function(req, res) {
  console.log('로그아웃');
  req.session.destroy();
  res.render('index.ejs', { user: null });
});

app.get('/signup', function(req, res) {
  console.log('회원가입');
  res.render('signup.ejs');
});

app.post('/signup', function(req, res) {
  mydb.collection('account').insertOne({
    userid: req.body.userid,
    userpw: sha(req.body.userpw),
    usergroup: req.body.usergroup,
    useremail: req.body.useremail
  })
    .then(() => {
      console.log('회원가입 완료');
      res.redirect('/');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('회원가입 실패');
    });
});

app.get('/cookie', (req, res) => {
  let milk = parseInt(req.signedCookies.milk);
  if (isNaN(milk)) milk = 0;
  milk += 1000;
  res.cookie('milk', milk, { signed: true });
  res.send('product: ' + milk + '원');
});

app.get('/session', (req, res) => {
  if (isNaN(req.session.milk)) req.session.milk = 0;
  req.session.milk += 1000;
  res.send("session: " + req.session.milk + "원");
});

app.post('/save', (req, res) => {
  mydb.collection('post').insertOne({
    title: req.body.title,
    content: req.body.content,
    date: req.body.someDate
  })
    .then(() => {
      res.redirect('/list');
    })
    .catch(err => console.error(err));
});

app.get('/list', (req, res) => {
  mydb.collection('post').find().toArray()
    .then(result => {
      res.render('list.ejs', { data: result });
    })
    .catch(err => console.error(err));
});

app.post('/delete', (req, res) => {
  const id = new ObjectId(req.body._id);
  mydb.collection('post').deleteOne({ _id: id })
    .then(() => {
      res.status(200).send('삭제성공');
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('삭제실패');
    });
});

app.get('/content/:id', (req, res) => {
  const id = new ObjectId(req.params.id);
  mydb.collection('post').findOne({ _id: id })
    .then(result => {
      if (!result) return res.status(404).send('글이 없습니다');
      res.render('content.ejs', { data: result });
    })
    .catch(err => console.error(err));
});

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
    .then(() => {
      res.redirect('/list');
    })
    .catch(err => console.error(err));
});