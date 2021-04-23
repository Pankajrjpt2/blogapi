const express = require('express');
const { insertBlog, getBlogs, getBlogById } = require('../controller/blog');
const router = express.Router();

router.post('/blog', insertBlog);
router.get('/blog', getBlogs);

module.exports = router;
