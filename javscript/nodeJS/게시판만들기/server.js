// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const sha = require('sha256');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyparser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const multer = require('multer');
const { connectDB, getDB, ObjectId } = require('./db');

const port = process.env.PORT;

// 정적 파일 및 미들웨어
app.use("/public", express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser('aabbccdd'));
app.use(session({ 
  secret: 'neverknowthiskey',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// multer 파일 업로드 설정
const storage = multer.diskStorage({
  destination: (req, file, done) => done(null, './public/image'),
  filename: (req, file, done) => done(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Passport 설정
passport.serializeUser((user, done) => done(null, user.userid));

passport.deserializeUser((userid, done) => {
  const db = getDB();
  db.collection('account').findOne({ userid }).then(result => done(null, result));
});

passport.use(new LocalStrategy({
  usernameField: "userid",
  passwordField: "userpw",
  session: true
}, (inputid, inputpw, done) => {
  const db = getDB();
  db.collection("account").findOne({ userid: inputid })
    .then(result => {
      if (result && result.userpw === sha(inputpw)) return done(null, result);
      done(null, false, { message: "비밀번호 오류" });
    })
    .catch(err => done(err));
}));

// 기본 라우팅
app.get('/', (req, res) => {
  res.render('index.ejs', { user: req.user || null });
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.render('index.ejs', { user: null });
});

app.post('/photo', upload.single('picture'), (req, res) => {
  if (req.file) {
    req.session.imagepath = '/' + req.file.path.replace(/\\/g, '/');
    res.redirect('/enter');
  } else {
    res.status(400).send('파일 업로드 실패');
  }
});

app.post('/edit', async (req, res) => {
  const db = getDB();
  const id = new ObjectId(req.body.id);
  await db.collection('post').updateOne({ _id: id }, {
    $set: {
      title: req.body.title,
      content: req.body.content,
      date: req.body.someDate,
      path: req.session.imagepath || null
    }
  });
  delete req.session.imagepath;
  res.redirect('/list');
});

app.post('/delete', async (req, res) => {
  const db = getDB();
  const id = new ObjectId(req.body._id);
  await db.collection('post').deleteOne({ _id: id });
  res.status(200).send('삭제성공');
});

app.get('/search', async (req, res) => {
  const db = getDB();
  const result = await db.collection('post').find({ title: req.query.value }).toArray();
  res.render('sresult.ejs', { data: result });
});

// 디버그
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

// 라우터 등록
app.use('/', require('./routes/post'));
app.use('/', require('./routes/add'));
app.use('/', require('./routes/auth'));

// DB 연결 후 서버 시작
connectDB().then(() => {
  app.listen(port, () => console.log(`🚀 서버 실행: http://localhost:${port}`));
});