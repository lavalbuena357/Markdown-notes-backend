require('dotenv').config()
const port = process.env.PORT || 3001
const connectDb = require('./db')
const dbUrl = process.env.DB_URL

const app = require('./app')

//server start
async function initApp(port, dbUrl) {
  try {
    await connectDb(dbUrl)
    app.listen(port, () => {
      console.log(`Server running at port ${port}`)
    })
  } catch (error) {console.log(error)}
}

initApp(port, dbUrl)