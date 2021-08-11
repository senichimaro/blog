/** # server.js has initialization only configs
*/

const app = require('./app')
const { appConfig, dbConfig } = require('./config')
const dbConn = require('./db/conn')

async function initApp( appConfig, dbConfig ){
  try {
    await dbConn(dbConfig.host, dbConfig.name)
    await app.listen(
      appConfig.port,
      ()=>console.log(`listen at:${appConfig.port}`)
    )
  }
  catch(e) {
    console.error(`initApp error: ${e.message}`);
  }
}
initApp( appConfig, dbConfig )
