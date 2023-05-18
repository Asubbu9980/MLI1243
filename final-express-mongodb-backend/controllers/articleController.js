const articleModel = require('../models/articleModel')




const Joi = require('joi')
const _ = require('lodash');


const getItems = async (req, res)=>{

    try{
        const data = await articleModel.find()
        res.send(data)
    }
    catch(err){
        res.send(err)
    }
}


const getItem= async (req,res)=>{
    try{
        const data = await articleModel.find({_id:req.params.id})
        res.send(data)
    }
    catch(err){
        res.send(err)
    }
} 





const createItems = async function(req, res){

    const schema = Joi.object().keys({
        title:Joi.string().required(),
        description:Joi.string().required(),
        isLiked:Joi.boolean().required(),
        image:Joi.string().required(),
        postedAt:Joi.string().required(),
        category:Joi.string().required(),
        
        
    })

    const {error} = schema.validate(req.body)
    const errorDetails =  _.get(error, "details", [])

    if(!_.isEmpty(errorDetails)){
        console.log(errorDetails)
        return res.send(errorDetails)
    }

    try{
       const item = new articleModel(req.body)
       item.save()
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






const deleteItem = async function(req, res){

    const id = req.params.id

    await articleModel.findByIdAndDelete(id);
    
    try{
       
        const data = await articleModel.find()
        res.send("Data deleted")
    }
    catch(err){
        res.send(err);
    }
  


}





module.exports =  {getItems,getItem,createItems,deleteItem }
//, getItem,createItems, updateItem, deleteItem