const express = require("express");
const { default: mongoose } = require("mongoose");
const { title } = require("process");
const router = new express.Router();
const Blogs = require("../schemas/blogs");
const Users = require("../schemas/users");

router.get("/new", (req, res) => {
  res.render("compose");
});

router.post("/new", (req, res) => {
  const blogTit = req.body.title;
  const blogCon = req.body.content;
  const blogAut = req.body.author;
  const blogCat =req.body.category;

  console.log(req.body.category);

  const newBlog = new Blogs({
    author: blogAut,
    title: blogTit,
    content: blogCon,
    category: blogCat
  });

  newBlog.save();
  res.redirect("/compose/success");
});

router.get("/success", (req, res) => {
  res.render("compose-success");
});

module.exports = router;
