const express = require("express");
const { default: mongoose } = require("mongoose");
const { title } = require("process");
const router = new express.Router();
const Blogs = require("../schemas/blogs");
const Users = require("../schemas/users");

router.get("/all", (req,res)=>
{
    Blogs.find({}, (e,docs)=>
    {
        if(e)
        {
            res.send(e);
        }
        else
        {
            res.render("blogs", {docs: docs});
        }
    })
})

router.get("/politics", (req,res)=>
{

})

module.exports = router;
