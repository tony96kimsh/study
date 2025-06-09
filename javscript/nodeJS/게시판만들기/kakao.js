const PORT = 9239;

const express = require('express')
const app = express();
const session = require('express-session');
const passport = require('passport')
const kakaoStrategy = require('passport-kakao').Strategy

// 환경 변수 로드
require('dotenv').config();
const kakaoKey = process.env.KAKAO_API_KEY;

// 세션 미들웨어 등록
app.use(session({
  secret: 'neverknowthiskey',
  resave: false,
  saveUninitialized: true
}));

// Passport 초기화 및 세션 연동
app.use(passport.initialize());
app.use(passport.session());

// 사용자 저장 배열
const users = [];

// Passport 로그인 인증 전략 등록
passport.use(
  new kakaoStrategy(
    {
      clientID: kakaoKey,
      callbackURL: '/auth/kakao/callback'
    },
    function (accessToken, refreshToken, profile, done) {
      const authId = 'Kakao' + profile.id;
      let user = users.find(user => user.authId === authId);

      if (!user) {
        // 카카오에서 받은 닉네임 사용
        const nickname = profile._json?.properties?.nickname || '이름없음';
        user = {
          authId: authId,
          displayName: nickname
        };
        users.push(user);
      }

      return done(null, user);
    }
  )
);

// 세션에 사용자 저장
passport.serializeUser(function(user, done) {
  done(null, user.authId);
});

// 세션에서 사용자 추출
passport.deserializeUser(function(authId, done) {
  const user = users.find(user => user.authId === authId);
  done(null, user);
});

// 메인 페이지
app.get('/', function (req, res) {
  res.send(`
    <h1>카카오 로그인</h1>
    <a href="/auth/kakao">로그인</a>
  `)
});

// 카카오 로그인 라우터
app.get('/auth/kakao', passport.authenticate('kakao'));

// 카카오 콜백 라우터
app.get('/auth/kakao/callback', passport.authenticate('kakao', {
  successRedirect: '/profile',
  failureRedirect: '/'
}));

// 로그인 성공 시 프로필 페이지
app.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }

  res.send(`
    <h1>${req.user.displayName}님 반갑습니다.</h1>
    <a href="/logout">로그아웃</a>
  `)
});

// 로그아웃 라우터
app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`주소: http://localhost:${PORT}`);
});