console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let res = notes.addNote();
console.log(res);

let ans = notes.add(2, 8);
console.log(ans);

// const user = os.userInfo();

// fs.writeFile('greetings.txt', `Hey ${user.username} you ${notes.age} year old boi`, (err) => {
//     if(err) {
//         console.log('Write failed');
//     }
// });