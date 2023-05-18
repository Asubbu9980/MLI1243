const commentsModel =require('../models/commentsModel');
const Joi = require('joi')
const _ = require('lodash');

const getComments = async (req, res)=>{

    const blogId = req.params.blogid
    console.log(req.params)
    console.log(blogId);
    try{
        const data = await commentsModel.find({blogId:blogId })
        res.send(data)
    }
    catch(err){
        res.send(err)
    }
}



const createComment = async function(req, res){

    const schema = Joi.object().keys({
        blogId:Joi.string().required(),
        name:Joi.string().required(),
        message:Joi.string().required(),
       email:Joi.string().required(),
       
       commentedAt:Joi.string().required()
        
        
    })

    const {error} = schema.validate(req.body)
    const errorDetails =  _.get(error, "details", [])

    if(!_.isEmpty(errorDetails)){
        console.log(errorDetails)
        return res.send(errorDetails)
    }

    try{
       const comment = new commentsModel(req.body)
       comment.save()
       .then((data)=>{
        console.log(data)
        res.send(data)
       })
       .catch((err)=>res.send(err))

    }
    catch(err){
        res.send(err)
    }

}


module.exports={getComments,createComment }