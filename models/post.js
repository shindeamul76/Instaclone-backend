const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    name: String,
    location: String,
    likes: Number,
    description: String,
    PostImage: String,
    date: Date
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
