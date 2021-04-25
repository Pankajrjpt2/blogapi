const Blog = require("../model/blog");

module.exports = {
  /**
   *
   * @param {userid, title, thumbnail, content, keywords} req // Get request from body
   * @param {data} res // Send Response Data
   */

  insertBlog: (req, res) => {
    const userid = req.body.userid;
    const title = req.body.title;
    const thumbnail = req.body.thumbnail;
    const content = req.body.content;
    const keywords = req.body.keywords;

    const list = new Blog({
      userid: userid,
      title: title,
      thumbnail: thumbnail,
      content: content,
      keywords: keywords,
    });

    list
      .save()
      .then((result) => {
        res.status(200).json({
          data: result,
          message: "Inserted Successfully",
        });
      })
      .catch((err) => {
        res.status(404).json({
          error: err,
          message: "Failed",
        });
      });
  },

  /**
   *
   * @param {*} req // NOthing
   * @param {data} res // Send Blog Data
   */

  getBlogs: (req, res) => {
    Blog.find()
      .then((result) => {
        res.status(200).json({
          data: result,
        });
      })
      .catch((err) => {
        res.status(404).json({
          error: err,
          message: "Request couldn't succeed",
        });
      });
  },

  /**
   *
   * @param {blogid} req // Get blogid params
   * @param {data} res // Send blog data by blogid
   */

  getBlogById: (req, res) => {
    const blogid = req.params.blogid;

    Blog.find({ _id: blogid })
      .then((result) => {
        res.status(200).json({
          data: result,
          status: 1,
          message: "REQUEST__SUCCESS",
        });
      })
      .catch((err) => {
        res.status(404).json({
          error: err,
          message: "REQUEST__FAILED",
        });
      });
  },

  updateBlogById: (req, res) => {
    const blogid = req.body.blogid;
    const title = req.body.title;
    const content = req.body.content;

    Blog.findById(blogid)
      .then((result) => {
        if (!result) {
          const error = new Error("Could not find");
          throw error;
        }
        result.title = title;
        result.content = content;

        return result.save();
      })
      .then((response) => {
        res.json({
          data: response,
          status: 1,
          message: "REQUEST__SUCCESS",
        });
      })
      .catch((err) => {
        res.json({
          err: err,
          status: 0,
          message: "REQUEST__FAILD",
        });
      });
  },
};
