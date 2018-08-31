const keys = require('./config/keys');
const https = require('https');
const express = require('express');
const authRouters = require('./routes/auth-route');
const profileRouters = require('./routes/profile-route');
const passportSetup = require('./config/passport-setup');
const passport = require('passport');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');

const app =express();

//set up view engin
app.set('view engine','ejs');

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys:[keys.session.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/',(req,res)=>{
  res.render('home',{user: req.user});
})

//module routes
app.use('/auth', authRouters);
app.use('/profile', profileRouters);


//connect to mongoDB
mongoose.connect(keys.mongodb.dbURI,()=>{
  console.log('mongoDB is connected');
})

const httpServer = app.listen(3000, ()=>{
  console.log('Server is listening for requests on port 3000');
})
const httpsServer = https.createServer({
  key: keys.ssl.key,
  cert: keys.ssl.cert
}, app)
.listen(3001, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3001/')
})