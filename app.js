//console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const yargv = yargs.argv;

const readNotes = (title) => {
    let note = notes.getNote(title);
    if(note){
        console.log(`Note ${note.title} found`);
        console.log(`------------------------`);
        console.log(`Body: ${note.body}`);
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
        notes.getAll();
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