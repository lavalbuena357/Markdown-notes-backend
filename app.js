require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const notes = require('./routes/notes')

const app = express()
const router = express.Router()

//middleware
app.use(express.json())
app.use(morgan('common'))
app.use(cors())


//routes
app.use('/notes', notes)

router.get('/', (req, res) => {
  console.log(req.oidc.isAuthenticated());
  res.json({user: req.oidc.user})
});


module.exports = app