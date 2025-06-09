// routes/post.js
const router = require('express').Router();
// 게시글 목록
router.get('/list', (req, res) => {
  mydb.collection('post').find().toArray()
    .then(result => {
      res.render('list.ejs', { data: result });
    });
});

module.exports = router;