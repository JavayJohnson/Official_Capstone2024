const Note = require('../models/note');

// Get all notes
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new note
const createNote = async (req, res) => {
  const newNote = new Note(req.body);
  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const updateNote =  async (req, res) => {
const noteID=req.params.id;
const content=req.body.content
const title=req.body.title
const date=req.body.date
const updatedNote = Note.findByIdAndUpdate(noteID,{
    title:title,
    content:content,
    date:date,

})
res.json({updatedNote:updatedNote})
}
const deleteNote =  async (req, res) => {
    const noteID=req.params.id;
    const deletedNote = Note.findByIdAndDelete(noteID)
    res.status(200).json({Success:true})
}




module.exports = { getNotes, createNote, updateNote, deleteNote };

