const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.render('home');
})

router.get('/signup',(req,res)=>{
  res.render('signup')
})

router.get('/login',(req,res)=>{
  res.render('login')
})

router.get('/*',(req,res)=>{
  res.render('page404');
})
module.exports = router;
