const Note = require('../../models/Notes')

//GET ALL NOTES
async function getNotes(req, res) {
  
  try {
    let notes;
    if(req.query.note) {
      // let noteArr = req.params.note.split(' ')
      // let note = noteArr.map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ');

      notes = await Note.find({note: new RegExp(req.query.note, 'i')})
      return res.json(notes);
    }
    notes = await Note.find()
    return res.json(notes)

  } catch (error) {console.log(error)}
}

//GET NOTE BY ID
async function getNoteId(req, res) {
  try {
    const note = await Note.findById(req.params.id)
    return res.json(note)

  } catch (error) {console.log(error)}
}

//ADD NOTE
async function addNote(req, res) {
  try {
    const {note} = req.body

    const newNote = new Note({note})

    const noteAdded = await newNote.save()

    return res.json(noteAdded)

  } catch (error) {console.log(error)}
}

//EDIT NOTE
async function updateNote(req, res) {
  try {
    const {note} = req.body

    const updateIdNote = {note}

    const noteUpdated = await Note.findByIdAndUpdate(req.params.id, updateIdNote)

    return res.json({noteUpdated})

  } catch (error) {console.log(error)}
}

//DELETE NOTE
async function deleteNote(req, res) {
  try {
    await Note.findByIdAndRemove(req.params.id)
    return res.json({status: 'Note deleted'})

  } catch (error) {console.log(error)}
}


module.exports = {
  getNotes,
  getNoteId,
  addNote,
  updateNote,
  deleteNote
}