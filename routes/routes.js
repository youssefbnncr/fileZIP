const express = require('express');
const bcrypt = require('bcryptjs');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();

const validPaths = ["bin", "media", "recent", "favorite", "cloud"];

router.post('/signup',async (req,res)=>{
  const {firstName, lastName, email, password} = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await prisma.users.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    }
  })
  res.redirect('/login')
})

router.post('/login',(req,res)=>{

})
router.get('/', (req, res) => {
  res.render('home', { path: "cloud"});
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/login', (req, res) => {const bcrypt = require('bcryptjs');
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
