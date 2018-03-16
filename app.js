//console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const yargv = yargs.argv;
//console.log('Yargs', yargv);

switch(yargv._[0]) {
    case 'add':
        notes.addNote(yargv.title, yargv.body);
        break;
    case 'list':
        notes.getAll();
        break;
    case 'read':
        break;
    case 'remove':
        break;
    default:
        break;
}