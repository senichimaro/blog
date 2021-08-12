function jsonResponse(res,err,data){
  if(err) res.json( {success:false, message:err} )
  else if(!data) res.json( {success:false, message:"Not Found"} )
  else res.json( {success:true, data:data} )
}

function editResponse(res,err,data,done){
  if(err) return done(err)
  else if(!data) return done(err)
  else return done(null,data)
}

module.exports = {
  jsonResponse,
  editResponse
}
