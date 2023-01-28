
const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
    author: {type: String},
    title: {type: String},
    content: {type: String},
    category: {type: String},
    date: {type:Date, default: Date.now},
    comments: [{type: String}],
    likes: {type: Number}
})

const blog = new mongoose.model("blog", blogSchema);

module.exports = blog;