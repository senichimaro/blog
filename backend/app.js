/** # app.js has configs about the app : middlewares, routes, etc.
*/

require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')

const app = express();

// use bodyParser.urlencoded to parse body & params request data and make it accessible
app.use( bodyParser.urlencoded({extended:false}) )
// use bodyParser.json to parse body & params request data and make it JSON format for easily use & extraction
app.use( bodyParser.json() )

const cors = require('cors')
const options = cors.CorsOptions = {
  origin: process.env.CORS_FRONTEND
}
app.use( cors(options) )

app.use('/public', express.static(`${__dirname}/storage/images`) )

app.use( routes )


module.exports = app
