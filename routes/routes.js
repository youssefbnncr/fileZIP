const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/',(req,res)=>{
  res.render('home');
})

router.get('/signup',(req,res)=>{
  res.render('signup')
})

router.get('/login',(req,res)=>{
  res.render('login')
})

module.exports = router;
