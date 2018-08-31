const router = require('express').Router();

const authCeck = (req,res,next)=>{
  if(req.user){
    next();
  }else{
    res.redirect('/auth/login');
  }
}
router.get('/', authCeck ,(req,res)=>{
  res.render('profile',{user:req.user});  
})
module.exports = router;