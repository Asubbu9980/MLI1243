const express = require('express')
const articleController = require('../controllers/articleController')
const jwt = require('jsonwebtoken')

const router = express.Router();


router.get('/', articleController.getItems)
router.get('/:id', articleController.getItem)
router.post('/', articleController.createItems)
router.delete('/:id', articleController. deleteItem)


module.exports=router