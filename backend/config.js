require('dotenv').config()
module.exports = {
  appConfig:{
    port:process.env.APP_PORT
  },
  dbConfig:{
    host:process.env.DB_HOST,
    name:process.env.DB_NAME
  }
}
