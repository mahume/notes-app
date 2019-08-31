const fs = require('fs');

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(note => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    })
    saveNotes(notes);
    console.log('New note added');
  } else {
    console.log('Note title already exists');
    
  }
}

const removeNote = title => {
  const notes = loadNotes();
  const notesToSave = notes.filter(note => note.title !== title);
  if (notes.length === notesToSave.length) {
    console.log('No note found');
  } else {
    saveNotes(notesToSave);
    console.log('Note deleted');
  }
}

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON)
  } catch (error) {
    return [];
  }
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
};
