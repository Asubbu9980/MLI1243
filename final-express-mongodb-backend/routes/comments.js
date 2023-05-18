const express = require('express')
const commentsController = require('../controllers/commentsController');
const jwt = require('jsonwebtoken')

const router = express.Router();

router.get('/:blogid',commentsController.getComments)
router.post('/',commentsController.createComment)



module.exports=router