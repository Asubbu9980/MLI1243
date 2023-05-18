const mongoose = require('mongoose');
const{Schema} = mongoose;

const articleSchema = Schema({
     title:{type:String,required:true},
     image:{type:String,required:true},
     description:{type:String,required:true},
     isLiked:{type:Boolean,required:true},
     category:{type:String,required:true},
     postedAt:{type:String,required:true}
})

const Article = mongoose.model('Article', articleSchema );

module.exports=Article