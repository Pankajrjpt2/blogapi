const Blog = require("../model/blog");

module.exports = {
    insertBlog: (req, res) => {
        const userid  = req.body.userid;
        const title = req.body.title;
        const thumbnail = req.body.thumbnail;
        const content = req.body.content;
        const keywords = req.body.keywords;

        const list = new Blog({
            userid: userid,
            title: title,
            thumbnail: thumbnail,
            content: content,
            keywords: keywords
        })

        list.save()
        .then(result => {
            res.status(200).json({
                data: result,
                message: "Inserted Successfully"
            })
        })
        .catch(err => {
            res.status(404).json({
                error: err,
                message: "Failed"
            })
        })
    },


    getBlogs: (req, res) => {
        Blog.find()
        .then(result => {
            res.status(200).json({
                data: result
            })
        })
        .catch(err => {
            res.status(404).json({
                error: err,
                message: "Request couldn't succeed"
            })
        })
    }
};