// const dotenv = require('dotenv').config();
require('dotenv').config();

const port = process.env.PORT;


const express = require('express');

const app = express();
const sha = require('sha256');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyparser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const multer = require('multer'); // ✅ multer 파일 업로드 미드워


// 정적 파일 및 템플릿 설정
app.use("/public", express.static('public'));
app.set('view engine', 'ejs');

// 바디 파서 설정
app.use(bodyparser.urlencoded({ extended: true }));

// 쿠키 & 세션 미드워를 등록
app.use(cookieParser('aabbccdd'));
app.use(session({
  secret: 'neverknowthiskey',
  resave: false,
  saveUninitialized: true
}));

// Passport 초기화
app.use(passport.initialize());
app.use(passport.session());

// MongoDB 연결
const url = process.env.MONGO_URL;
let mydb;

MongoClient.connect(url)
  .then(client => {
    console.log("✅ MongoDB 연결 성공");
    mydb = client.db('myboard');

    app.listen(port, function () {
      console.log(`🚀 서버 실행: http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error("❌ MongoDB 연결 실패:", err);
  });


// ✅ 파일 업로드 설정 (multer)
const storage = multer.diskStorage({
  destination: function (req, file, done) {
    done(null, './public/image'); // 업로드된 파일 저장 경로
  },
  filename: function (req, file, done) {
    done(null, Date.now() + '-' + file.originalname); // 중복 방지용 파일명
  }
});

const upload = multer({ storage: storage });

// ✅ Passport 인증 설정
passport.serializeUser(function (user, done) {
  done(null, user.userid); // 세션에 저장할 항목
});

passport.deserializeUser(function (userid, done) {
  mydb.collection('account').findOne({ userid: userid })
    .then((result) => {
      done(null, result); // 세션 복원 시 호출
    });
});

passport.use(new LocalStrategy(
  {
    usernameField: "userid",
    passwordField: "userpw",
    session: true
  },
  function (inputid, inputpw, done) {
    mydb.collection("account").findOne({ userid: inputid })
      .then((result) => {
        if (result && result.userpw === sha(inputpw)) {
          console.log('✅ 로그인 성공');
          done(null, result);
        } else {
          done(null, false, { message: "비밀번호 오류" });
        }
      })
      .catch(err => done(err));
  }
));


// ✅ 라우티닷 영역

// 홈
app.get('/', (req, res) => {
  res.render('index.ejs', { user: req.user || null });
});

// 로그인
app.get('/login', (req, res) => {
  if (req.isAuthenticated()) return res.redirect('/');
  res.render('login.ejs');
});

app.post('/login',
  passport.authenticate("local", { failureRedirect: '/fail' }),
  function (req, res) {
    res.redirect('/');
  }
);

// 로그아웃
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.render('index.ejs', { user: null });
});

// 회원가입
app.get('/signup', function (req, res) {
  res.render('signup.ejs');
});

app.post('/signup', function (req, res) {
  mydb.collection('account').insertOne({
    userid: req.body.userid,
    userpw: sha(req.body.userpw),
    usergroup: req.body.usergroup,
    useremail: req.body.useremail
  })
    .then(() => {
      console.log('✅ 회원가입 완료');
      res.redirect('/');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('회원가입 실패');
    });
});

// 파일 업로드 처리 (세션에 이미지 경로 저장)
app.post('/photo', upload.single('picture'), function (req, res) {
  if (req.file) {
    req.session.imagepath = '/' + req.file.path.replace(/\\/g, '/');
    console.log('✅ 업로드 경로:', req.session.imagepath);
    res.redirect('/enter');
  } else {
    res.status(400).send('파일 업로드 실패');
  }
});

// 글쓰기 폼
app.get('/enter', (req, res) => {
  res.render('enter.ejs', { imagepath: req.session.imagepath || null });
});

// 글 저장
app.post('/save', (req, res) => {
  const imagepath = req.session.imagepath || null;
  const post = {
    title: req.body.title,
    content: req.body.content,
    date: req.body.someDate,
    path: imagepath
  };
  mydb.collection('post').insertOne(post)
    .then((result) => {
      delete req.session.imagepath;
      res.redirect('/list');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('DB 저장 실패');
    });
});

// // 게시글 목록
// router.get('/list', (req, res) => {
//   mydb.collection('post').find().toArray()
//     .then(result => {
//       res.render('list.ejs', { data: result });
//     });
// });

// 게시글 상세보기
app.get('/content/:id', (req, res) => {
  const id = new ObjectId(req.params.id);
  mydb.collection('post').findOne({ _id: id })
    .then(result => {
      res.render('content.ejs', { data: result });
    });
});

// 게시글 수정 폼
app.get('/edit/:id', (req, res) => {
  const id = new ObjectId(req.params.id);
  mydb.collection('post').findOne({ _id: id })
    .then(result => {
      res.render('edit.ejs', { data: result });
    });
});

// 게시글 수정 처리
app.post('/edit', (req, res) => {
  const id = new ObjectId(req.body.id);
  const imagepath = req.session.imagepath || null;
  mydb.collection('post').updateOne(
    { _id: id },
    {
      $set: {
        title: req.body.title,
        content: req.body.content,
        date: req.body.someDate,
        path: imagepath
      }
    }
  )
    .then(result => {
      delete req.session.imagepath;
      res.redirect('/list');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('DB 수정 실패');
    });
});

// 게시글 삭제
app.post('/delete', (req, res) => {
  const id = new ObjectId(req.body._id);
  mydb.collection('post').deleteOne({ _id: id })
    .then(() => res.status(200).send('삭제성공'))
    .catch(err => {
      console.error(err);
      res.status(500).send('삭제실패');
    });
});

// 쿠키 디버그 테스트
app.get('/cookie', (req, res) => {
  let milk = parseInt(req.signedCookies.milk);
  if (isNaN(milk)) milk = 0;
  milk += 1000;
  res.cookie('milk', milk, { signed: true });
  res.send('product: ' + milk + '원');
});

app.use('/', require('./routes/post.js'));

// 세션 디버그 테스트
app.get('/session', (req, res) => {
  if (isNaN(req.session.milk)) req.session.milk = 0;
  req.session.milk += 1000;
  res.send("session: " + req.session.milk + "원");
});


// 검색하기
app.get('/search', function(req, res) {
  console.log(req.query);

  mydb.collection('post')
  .find({ title: req.query.value }).toArray()
    .then(result => {
      console.log(result);
      res.render('sresult.ejs', {data: result});
    });
});
