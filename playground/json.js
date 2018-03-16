// let obj = {
//     name: 'Boi'
// };

// let res = JSON.stringify(obj);

// console.log(typeof res);
// console.log(res);

//-----------------JSON PARSE--------------------//

// let person = '{"name": "edward elric", "age": "200"}';

// let res = JSON.parse(person);

// console.log(typeof res);
// console.log(res.name);

const fs = require('fs');

let origNote = {
    title: 'title',
    body: 'body'
}

fs.writeFileSync('notes.json', JSON.stringify(origNote));

let noteString = JSON.parse(fs.readFileSync('notes.json'));

console.log(noteString.title);