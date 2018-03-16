//console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

let command = process.argv[2];
let data = process.argv[3];

switch(command) {
    case 'add':
        break;
    case 'list':
        break;
    case 'read':
        break;
    case 'remove':
        break;
    default:
        break;
}

console.log(data);