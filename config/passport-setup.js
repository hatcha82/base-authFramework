const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const NaverStrategy = require('passport-naver').Strategy;
const KakaoStrategy = require('passport-kakao').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done)=>{
  done(null,user.id);
});
passport.deserializeUser((id,done)=>{
  User.findById(id).then((user)=>{
    done(null,user);
  })  
});
const upsertUserInfo = (user,doneCallback)=>{

  User.findOne({providerId : user.providerId}).then((currentUser)=>{
    if(!currentUser){//if user is not exist create new user        
      new User(user).save().then((newUser) =>{
          console.log('User has been created ' , newUser);
          doneCallback(null,newUser);  
      }) ;
    }else{
        console.log('User already exists in datbase' , currentUser);
        doneCallback(null,currentUser);  
    }
  });
};
passport.use(
  new GoogleStrategy(keys.google, //options for google strategy  end
  (accessToken, refreshTokken, profile,done) =>{ //passport callback function    
    upsertUserInfo({
      name: profile.displayName,
      provider:'GOOGLE',
      providerId: profile.id,
      profileImage: profile._json.image.url
    },done);              
  })  
);
passport.use(
  new NaverStrategy(keys.naver, //options for naver strategy  end
  (accessToken, refreshTokken, profile,done) =>{ //passport callback function

    upsertUserInfo({
      name: profile.displayName,
      provider:'NAVER',
      providerId: profile.id,
      profileImage: profile._json.profile_image
    },done);   

  })  
);
passport.use(
  new KakaoStrategy(keys.kakao, //options for kakao strategy  end
  (accessToken, refreshTokken, profile,done) =>{ //passport callback function
    console.log(profile)
    upsertUserInfo({
      name: profile.displayName,
      provider:'KAKAO',
      providerId: profile.id,
      profileImage: profile._json.properties.profile_image
    },done);   
  })  
);

passport.use(
  new FacebookStrategy(keys.facebook, //options for facebook strategy  end
  (accessToken, refreshTokken, profile,done) =>{ //passport callback function
    console.log(profile)
    upsertUserInfo({
      name: profile.displayName,
      provider:'FACEBOOK',
      providerId: profile.id,
      profileImage: profile._json.picture.data.url,
    },done);   

  })  
);