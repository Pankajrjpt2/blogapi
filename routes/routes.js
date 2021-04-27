const express = require('express');
const { insertBlog, getBlogs, getBlogById, updateBlogById } = require('../controller/blog');
const {mailer,subscribe }= require('../controller/mailer');
const router = express.Router();

router.post('/blog', insertBlog);
router.get('/blog', getBlogs);
router.get('/blog/:blogid', getBlogById);
router.put('/blog', updateBlogById);

// Mailer

router.post('/send', mailer);
router.post('/send/subs', subscribe);

module.exports = router;
