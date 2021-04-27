const mongoose = require("mongoose");
const { subscribe } = require("../controller/mailer");


const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        
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


const blogSubscriber = new Schema(
    {
        subs:{
            type:String,
            require:true
        }
    }
)

module.exports = mongoose.model('User', blogSchema)
module.exports = mongoose.model('subscriber',blogSubscriber)