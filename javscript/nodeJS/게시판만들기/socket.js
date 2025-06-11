// socket.js: 앱소켓 사용하기
const express = require('express');
const app = express();
const { Server } = require('socket.io')
const http = require('http').createServer(app);
const io = new Server(http);

app.set('view engine', 'ejs');
app.use("/public", express.static('public'));

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/socket', function(req, res){
  res.render('socket.ejs');
})

io.on('connection', function(socket){
  console.log("클라이언트 접속");
  
  // 모든 클라이언트에게 메시지 보내기
  socket.on('user-send', function(data) {
    console.log(data);
    io.emit('broadcast', `[전체] ${data}`);  
  })

  socket.on('joinroom', function() {
    socket.join('room1');
    console.log('room1에 입장');
  })
  
  socket.on('room1-send', function(data){
    io.to('room1').emit('broadcast', `[채팅방1] ${data}`)
  })
})

http.listen(9500, () => {
  console.log('http://localhost:9500/socket 포트로 진행 중');
})