const express = require('express');
const router = express.Router();
const { getDB } = require('../db');
const passport = require('passport');
const sha = require('sha256');

router.get('/login', (req, res) => {
  if (req.isAuthenticated()) return res.redirect('/');
  res.render('login.ejs');
});

router.post('/login',
  passport.authenticate("local", { failureRedirect: '/fail' }),
  (req, res) => {
    res.redirect('/');
  }
);

router.get('/signup', (req, res) => {
  res.render('signup.ejs');
});

router.post('/signup', async (req, res) => {
  const db = getDB();
  await db.collection('account').insertOne({
    userid: req.body.userid,
    userpw: sha(req.body.userpw),
    usergroup: req.body.usergroup,
    useremail: req.body.useremail
  });
  res.redirect('/');
});

module.exports = router;