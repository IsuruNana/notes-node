console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');



//console.log(_.isString('Bateman'));

let filteredArray = _.uniq([
    'Hey', 'hey', 'monica', 'hey', 'poday', 1, 3, 5, 1
].map(word => {
    return word.toString().toLowerCase();
}));
console.log(filteredArray);

// const user = os.userInfo();

// fs.writeFile('greetings.txt', `Hey ${user.username} you ${notes.age} year old boi`, (err) => {
//     if(err) {
//         console.log('Write failed');
//     }
// });