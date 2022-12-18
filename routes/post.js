const router = require('express').Router();
const Post = require('../models/post')
const bodyParser = require('body-parser');
const multer = require('multer');
const { storage } = require('./Cloudnary');

router.use(bodyParser.urlencoded({ extended: false }))

router.use(bodyParser.json())


const parser = multer({ storage: storage });

router.route('/').post(parser.single('file'),
async (req, res) => {
    const { name, location, description } = req.body;
    try {
        let post = await Post.create({
            name: name,
            location: location,
            description: description,
            PostImage:req.file.path,

        })
        res.json({
            Success: true,
            post
        })
    }
    catch (err) {
        res.status(400).json({
            Success: false,
            message: err.message
        })

    }
}
).get(async (req, res) => {
    try {
        let posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json({
            Success: true,
            posts
        })
    }
    catch (err) {
        res.status(400).json({
            Success: false,
            message: err.message
        })
    }
})



module.exports = router;
