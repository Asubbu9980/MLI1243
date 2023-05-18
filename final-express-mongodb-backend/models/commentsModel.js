const mongoose = require('mongoose');
const{Schema} = mongoose;

const commentsSchema = Schema({
     name:String,
     email:String,
     message:String,
     blogId:String,
     commentedAt:String
})

const Comment = mongoose.model('Comment', commentsSchema );

module.exports=Comment;