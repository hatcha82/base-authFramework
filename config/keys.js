const fs = require('fs');

module.exports = {
  google : {
    callbackURL:'/auth/google/redirect',
    clientID:'',
    clientSecret:''
  },
  naver : {
    callbackURL:'/auth/naver/redirect',
    clientID:'',
    clientSecret:''
  },
  kakao : {
    callbackURL:'/auth/kakao/redirect',
    clientID:'',
    clientSecret:''
  },
  facebook : {
    callbackURL:'/auth/facebook/redirect',
    clientID:'',
    clientSecret:''
  },
  mongodb:{
    dbURI:'mongodb://oauth-tutorial:[passowrd]@ds237192.mlab.com:37192/hatcha-oauth-tutorial'
  },
  session:{
   cookieKey:'oauthtutorial'
  },
  ssl :{
    key :fs.readFileSync('./ssl/key.pem'),
    cert:fs.readFileSync('./ssl/cert.pem'),
  }
}
