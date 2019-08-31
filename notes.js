const fs = require('fs');
const chalk = require('chalk');

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
    console.log(chalk.green.inverse('New note added'));
  } else {
    console.log(chalk.red.inverse('Note title already exists'));
  }
}

const removeNote = title => {
  const notes = loadNotes();
  const notesToSave = notes.filter(note => note.title !== title);
  if (notes.length === notesToSave.length) {
    console.log(chalk.red.inverse('No note found'));
  } else {
    saveNotes(notesToSave);
    console.log(chalk.green.inverse('Note deleted'));
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
