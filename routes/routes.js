const express = require('express');
const { insertBlog, getBlogs, getBlogById, updateBlogById } = require('../controller/blog');
const router = express.Router();

router.post('/blog', insertBlog);
router.get('/blog', getBlogs);
router.get('/blog/:blogid', getBlogById);
router.put('/blog', updateBlogById);

module.exports = router;
