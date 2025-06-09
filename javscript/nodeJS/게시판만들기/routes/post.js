const express = require('express');
const router = express.Router();
const { getDB, ObjectId } = require('../db');

router.get('/list', async (req, res) => {
  const db = getDB();
  const posts = await db.collection('post').find().toArray();
  res.render('list.ejs', { data: posts });
});

router.get('/content/:id', async (req, res) => {
  const db = getDB();
  const id = new ObjectId(req.params.id);
  const post = await db.collection('post').findOne({ _id: id });
  res.render('content.ejs', { data: post });
});

module.exports = router;