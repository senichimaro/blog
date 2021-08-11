const BlogModel = require('../model/model')
const jsonResponse = require('../controllers/helpers')

async function getPosts(req,res){
  const posts = await BlogModel.find().lean().exec()
  res.status(200).json( posts )
}

async function newPost(req,res){

  try {
    console.log("new post req.body",req.body);

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

async function findPost(req,res){

  // console.log("findPost req.body",req.body);

  const { _id } = req.body

  // console.log("findPost _id",_id);



  try {
    const posts = await BlogModel.findById(
      _id,
      (err,data)=> { jsonResponse(res,err,data) }
    )
  }
  catch(e){
    console.error(`||| > ERROR at Back-End findPost: ${e.message}`);
  }
}

module.exports = {
  getPosts,
  newPost,
  findPost
}
