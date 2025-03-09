const express = require('express');
const router = express.Router();

const validPaths = ["bin", "media", "recent", "favorite", "cloud"];

router.get('/', (req, res) => {
  res.render('home', { path: "cloud"});
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/:path', (req, res) => {
  const { path } = req.params;
  if (validPaths.includes(path)) {
    res.render('home', { path });
  } else {
    res.render('page404');
  }
});

module.exports = router;
