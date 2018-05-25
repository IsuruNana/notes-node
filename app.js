//console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const yargv = yargs
                .command('add', 'Add a new note', {
                    title: {
                        describe: 'Title of note',
                        demand: true,
                        alias: 't'
                    },
                    body: {
                        describe: 'The body of the note',
                        demand: true,
                        alias: 'b'
                    }
                })
                .help()
                .argv;

const readNotes = (title) => {
    let note = notes.getNote(title);
    if(note){
        notes.logNote(note);
    }
    else {
        console.log(`Note ${note.title} not found`);
    }
}

switch(yargv._[0]) {
    case 'add':
        let res = notes.addNote(yargv.title, yargv.body);
        if(res) console.log(`Note ${res.title} created`);
        else console.log(`Note ${res.title} aleady in use`);
        break;
    case 'list':
        const allNotes = notes.getAll();
        allNotes.forEach(note => notes.logNote(note));
        break;
    case 'read':
        readNotes(yargv.title);
        break;
    case 'remove':
        notes.removeNote(yargv.title);
        break;
    default:
        break;
}