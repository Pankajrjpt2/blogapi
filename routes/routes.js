const express = require('express');
const { insertBlog, getBlogs, getBlogById, updateBlogById } = require('../controller/blog');
const {mailer }= require('../controller/mailer');
const router = express.Router();

router.post('/blog', insertBlog);
router.get('/blog', getBlogs);
router.get('/blog/:blogid', getBlogById);
router.put('/blog', updateBlogById);

// Mailer

router.post('/send', mailer);


module.exports = router;
