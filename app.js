const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Customize Version
yargs.version('1.1.0');

// Add Command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    }
  },
  handler({ title, body }) {
    notes.addNote(title, body);
  }
})

// Remove Command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  handler({ title }) {
    notes.removeNote(title);
  }
})

//  List Command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    notes.listNotes();
  }
})

// Read Command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  handler({ title }) {
    notes.readNote(title);
  }
})


console.log(yargs.argv);
