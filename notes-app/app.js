import yargs from 'yargs';
import {addNote, removeNote, listNotes, readNote} from './notes.js';

yargs.version('1.1.0');

// ADD COMMAND
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demand: true,
            type: 'string'
        },
        body: {
            describe: 'This a title of the note',
            demand: true,
            type: 'string'
        }
        
    },
    handler(argv) {
        addNote(argv.title, argv.body)
    }
}).argv;

// REMOVE COMMAND
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demand: true,
            type: 'string'
        }
    },
    handler(argv) {
        removeNote(argv.title)
    }
}).argv;

// LIST COMMAND
yargs.command({
    command: 'list',
    describe: 'Make a list',
    handler() {
        listNotes();
    }
}).argv;

// READ COMMAND
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demand: true,
            type: 'string'
        }
    },
    handler(argv) {
        readNote(argv.title)
    }
}).argv;

yargs.parse();
