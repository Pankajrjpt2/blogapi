const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        userid: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        keywords: {
            type: String,
            required: true
        }
    },
    {
        timestamp: true
    }
);

module.exports = mongoose.model('User', blogSchema)