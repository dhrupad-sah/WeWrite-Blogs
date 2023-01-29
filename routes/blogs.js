const express = require("express");
const { default: mongoose } = require("mongoose");
const { title } = require("process");
const router = new express.Router();
const Blogs = require("../schemas/blogs");
const Users = require("../schemas/users");

// router.get("/all", (req,res)=>
// {
//     Blogs.find({}, (e,docs)=>
//     {
//         if(e)
//         {
//             res.send(e);
//         }
//         else
//         {
//             res.render("blogs", {docs: docs});
//         }
//     })
// })

router.get("/politics", (req, res) => {
  Blogs.find({ category: "Politics" }, (e, docs) => {
    if (e) {
      res.send(e);
    } else {
      res.render("blogs", { docs: docs });
    }
  });
});

router.get("/lifestyle", (req, res) => {
  Blogs.find({ category: "Lifestyle" }, (e, docs) => {
    if (e) {
      res.send(e);
    } else {
      res.render("blogs", { docs: docs });
    }
  });
});

router.get("/fashion", (req, res) => {
  Blogs.find({ category: "Fashion" }, (e, docs) => {
    if (e) {
      res.send(e);
    } else {
      res.render("blogs", { docs: docs });
    }
  });
});

router.get("/food", (req, res) => {
  Blogs.find({ category: "Food" }, (e, docs) => {
    if (e) {
      res.send(e);
    } else {
      res.render("blogs", { docs: docs });
    }
  });
});

router.get("/sports", (req, res) => {
  Blogs.find({ category: "Sports" }, (e, docs) => {
    if (e) {
      res.send(e);
    } else {
      res.render("blogs", { docs: docs });
    }
  });
});

router.get("/technology", (req, res) => {
  Blogs.find({ category: "Technology" }, (e, docs) => {
    if (e) {
      res.send(e);
    } else {
      res.render("blogs", { docs: docs });
    }
  });
});

router.get("/education", (req, res) => {
  Blogs.find({ category: "Education" }, (e, docs) => {
    if (e) {
      res.send(e);
    } else {
      res.render("blogs", { docs: docs });
    }
  });
});

router.get("/healthcare", (req, res) => {
  Blogs.find({ category: "Healthcare" }, (e, docs) => {
    if (e) {
      res.send(e);
    } else {
      res.render("blogs", { docs: docs });
    }
  });
});

router.get("/other", (req, res) => {
  Blogs.find({ category: "Other" }, (e, docs) => {
    if (e) {
      res.send(e);
    } else {
      res.render("blogs", { docs: docs });
    }
  });
});

module.exports = router;
