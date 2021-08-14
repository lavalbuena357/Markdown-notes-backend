const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = Schema({
  note: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Note', NoteSchema)