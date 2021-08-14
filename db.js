const mongoose = require('mongoose')

async function connectDb(url) {
  try {
    await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log('Database connected')
  } catch (error) {console.log(error)}
}

module.exports = connectDb