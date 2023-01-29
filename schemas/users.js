
const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    blogCount: Number,
    mobileNum: String,
    myBlogs: [],
    googleId: String,
})

const user = new mongoose.model("user", userSchema);

module.exports = user;