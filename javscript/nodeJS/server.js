const express = require('express');
const app = express();

app.listen(9500, function() {
  console.log("포트 9500으로 서버 대기중...");
})

// app.get('/', function(req, res){
//   res.send('\
//       <html>\
//     <body>\
//       <h1>홈화면입니다. </h1>\
//       <marquee>김성훈님 . 반갑습니다.</marquee>\
//     </body>\
//   </html>\
//     ');
// })

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})

app.get('/book', function(req, res) {
  res.send('도서 목록 관련 페이지입니다.');
})