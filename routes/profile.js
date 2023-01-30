const express = require("express");
const { default: mongoose } = require("mongoose");
const { title } = require("process");
const router = new express.Router();
const Blogs = require("../schemas/blogs");
const Users = require("../schemas/users");
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");

var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "https://w2blogs.onrender.com/profile/auth/google/w2",
    },
    function (accessToken, refreshToken, profile, cb) {
      Users.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

router.get("/login", (req,res)=>
{
  res.render("login");
})

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);



router.get('/auth/google/w2', 
  passport.authenticate('google', { failureRedirect: '/profile/login' }),
  function(req, res) {
    // res.send("done");
    // Successful authentication, redirect home.
    res.redirect('/blogs/politics');
  });

//  router.get("/auth/google/logout", function(req, res){
//     if (req.user) {
//       req.session.destroy();
//       req.logout();
//       res.redirect("/"); //redirect back to the frontend home page
//     }else {
//       res.send("user is already logged out!");
//     }
//   });

module.exports = router;
