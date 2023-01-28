require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

const composeRouter = require("./routes/compose");
const blogsRouter = require("./routes/blogs")

const Blogs = require("./schemas/blogs");
const Users = require("./schemas/users");

app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfull"))
  .catch((err) => { console.log(err) });

app.get("/", (req,res)=>
{
    res.render("home");
});

app.use("/compose", composeRouter);
app.use("/blogs", blogsRouter);

app.listen(3000, ()=> console.log("Connected to local host"));