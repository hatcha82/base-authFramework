const router = require('express').Router();
const passport = require('passport');

//auth login
router.get('/login',(req,res)=>{
  res.render('login',{user: req.user});
});

//auth logout
router.get('/logout',(req,res)=>{
  req.logout();
  res.redirect('/');
});

//auth width google
router.get('/google',passport.authenticate('google', {
  scope:['profile']
}));
//calllback route for google redirect to
router.get('/google/redirect',passport.authenticate('google'), (req,res) =>{
  //res.send(req.user)
  res.redirect('/profile/');
});


//auth width Naver
router.get('/naver',passport.authenticate('naver', {
  scope:['profile'],
  failureRedirect: '#!/auth/login'
}));
//calllback route for Naver redirect to
router.get('/naver/redirect',passport.authenticate('naver',{
  failureRedirect: '#!/auth/login'
  }), (req,res) =>{
  //res.send(req.user)
  res.redirect('/profile/');
});

//auth width kakao
router.get('/kakao',passport.authenticate('kakao', {
  scope:['profile'],
  failureRedirect: '#!/auth/login'
}));
//calllback route for Naver redirect to
router.get('/kakao/redirect',passport.authenticate('kakao',{
  failureRedirect: '#!/auth/login'
  }), (req,res) =>{
  //res.send(req.user)
  res.redirect('/profile/');
});

//auth width facebook
router.get('/facebook',passport.authenticate('facebook', {
  failureRedirect: '#!/auth/login'
}));
//calllback route for Naver redirect to
router.get('/facebook/redirect',passport.authenticate('facebook',{
  failureRedirect: '#!/auth/login'
  }), (req,res) =>{
  //res.send(req.user)
  res.redirect('/profile/');
});

module.exports = router;