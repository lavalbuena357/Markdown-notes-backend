const express = require('express')
const router = express.Router()
const {getNotes, getNoteId, addNote, updateNote, deleteNote} = require('./controllers/notesController')

router.get('/', getNotes)
router.get('/:id', getNoteId)
router.post('/', addNote)
router.put('/:id', updateNote)
router.delete('/:id', deleteNote)

module.exports = router