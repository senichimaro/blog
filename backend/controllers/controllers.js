const BlogModel = require('../model/model')

async function getPosts(req,res){
  const posts = await BlogModel.find().lean().exec()
  res.status(200).json( posts )
}

async function newPost(req,res){

  try {

    const { title, textarea } = req.body

    const blogPost = BlogModel(
      {title, textarea}
    )

    if( req.file ){
      const { filename } = req.file;
      const fullUrl = `${req.protocol}://${req.get('host')}`
      blogPost.setImgUrl(fullUrl,filename)
    }

    const postSaved = await blogPost.save()

    res.status(201).json({ postSaved })

  }
  catch(e){
    console.error(`||| > ERROR at newPost: ${e.message}`);
    res.status(500).json({ success:false,message:e.message })
  }

}

module.exports = {
  getPosts,
  newPost
}
