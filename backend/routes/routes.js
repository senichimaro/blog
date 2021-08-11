const express = require('express')
const upload = require('../lib/storage')
// Router() initialization allow us to isolate routes
const api = express.Router();
const { getPosts, newPost, findPost } = require('../controllers/controllers')


api.get('/', getPosts)

api.post('/newpost', upload.single('image'), newPost)

api.post('/find', findPost)


module.exports = api
