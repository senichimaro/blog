const express = require('express')
const upload = require('../lib/storage')
// Router() initialization allow us to isolate routes
const api = express.Router();
const { getPosts, newPost, findPost, editPost, deletePost } = require('../controllers/controllers')


api.get('/', getPosts)

api.post('/newpost', upload.single('image'), newPost)

api.post('/editpost', upload.single('image'), editPost)

api.post('/find', findPost)

api.post('/delete', deletePost)

module.exports = api
