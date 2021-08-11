const mongoose = require('mongoose')

mongoose.connection.on('open',()=>console.log(`db connected`))

async function dbConn( host, dbName ){
  try {
    await mongoose.connect(
      `${host}/${dbName}`,
      {useNewUrlParser:true, useUnifiedTopology:true}
    )
  }
  catch(e){
    console.error(`||| > dbConn ERROR: ${e.message}`);
  }
}

module.exports = dbConn
