//console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const yargv = yargs.argv;

switch(yargv._[0]) {
    case 'add':
        notes.addNote(yargv.title, yargv.body);
        break;
    case 'list':
        notes.getAll();
        break;
    case 'read':
        notes.getNote(yargv.title);
        break;
    case 'remove':
        notes.removeNote(yargv.title);
        break;
    default:
        break;
}