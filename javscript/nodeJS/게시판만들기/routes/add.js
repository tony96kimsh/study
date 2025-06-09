const express = require('express');
const router = express.Router();
const { getDB } = require('../db');

router.get('/enter', (req, res) => {
  res.render('enter.ejs', { imagepath: req.session.imagepath || null });
});

router.post('/save', async (req, res) => {
  const db = getDB();
  const imagepath = req.session.imagepath || null;
  const post = {
    title: req.body.title,
    content: req.body.content,
    date: req.body.someDate,
    path: imagepath
  };
  await db.collection('post').insertOne(post);
  delete req.session.imagepath;
  res.redirect('/list');
});

module.exports = router;