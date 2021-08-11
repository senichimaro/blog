const mongoose = require('mongoose')

const BlogSchema = mongoose.Schema(
  {
    title:{type:String},
    textarea:{type:String},
    imgUrl:{type:String}
  },
  {
    timestamps:true
  }
)

BlogSchema.methods.setImgUrl = function setImgUrl(url,filename){
  this.imgUrl = `${url}/public/${filename}`
}

module.exports = mongoose.model('BlogSchema', BlogSchema)
