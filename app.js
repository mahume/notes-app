const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

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
    console.log(`Title: ${title}`);
    console.log(`Body: ${body}`);
  }
})
// Remove Command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler() {
    console.log('Removing the note');
    
  }
})
//  List Command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    console.log('Listing all notes');
  }
})
// Read Command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('Reading note');
  }
})


console.log(yargs.argv);
