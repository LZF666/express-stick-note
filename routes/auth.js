var express = require('express');
var router = express.Router();
// 认证
var passport = require('passport');
// 在passport基础上的封装
var GitHubStrategy = require('passport-github').Strategy;

// 把用户的信息序列化，生成一个session，放到内存中
passport.serializeUser(function (user, done) {
  console.log('---serializeUser---')
  console.log(user)
  done(null, user);
});
// 从内存中取出
passport.deserializeUser(function (obj, done) {
  console.log('---deserializeUser---')
  done(null, obj);
});

passport.use(new GitHubStrategy({
    clientID: 'f5833e3293aa2eba9a08',
    clientSecret: '0dbdd85231b66dc9688e263009780ca97b0a8602',
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ githubId: profile.id }, function (err, user) {
    // });
    done(null, profile);
  }
));
// 注销
router.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect('/'); //跳转到首页
})
// github登录
router.get('/github',
  passport.authenticate('github'));

router.get('/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/login'
  }),
  function (req, res) {
    req.session.user = {
      id: req.user.id,
      username: req.user.displayName || req.user.username,
      avatar: req.user._json.avatar_url,
      provider: req.user.provider
    };
    res.redirect('/');
  });

module.exports = router;