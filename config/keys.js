const fs = require('fs');

module.exports = {
  google : {
    callbackURL:'/auth/google/redirect',
    clientID:'101271609028-qt8p60ktp498m87ectb1arhsq1pbvj7f.apps.googleusercontent.com',
    clientSecret:'mmTCA9ZdlC2I6RDw0_mzC79d'
  },
  naver : {
    callbackURL:'/auth/naver/redirect',
    clientID:'H7ywV465eutZ9S93jlBg',
    clientSecret:'RFkzUQgIWs'
  },
  kakao : {
    callbackURL:'/auth/kakao/redirect',
    clientID:'7c1bb6745a0640b83e14e30f66b9f31b',
    clientSecret:''
  },
  facebook : {
    callbackURL:'/auth/facebook/redirect',
    clientID:'283757818890892',
    clientSecret:'3bc04e8fd33234e4847aed266af3aedf'
  },
  mongodb:{
    dbURI:'mongodb://oauth-tutorial:test1234@ds237192.mlab.com:37192/hatcha-oauth-tutorial'
  },
  session:{
   cookieKey:'oauthtutorial'
  },
  ssl :{
    key :fs.readFileSync('./ssl/key.pem'),
    cert:fs.readFileSync('./ssl/cert.pem'),
  }
}