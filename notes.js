//console.log('Starting notes.js');

const fs = require('fs');

const fecthNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes-data.json'));
    }
    catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    const notes = fecthNotes();

    const duplicates = notes.filter(note => {
        return note.title === title
    });

    if(duplicates.length === 0) {
        notes.push({
            title,
            body
        });
    }
    
    saveNotes(notes);
};

const getAll = () => {
    console.log('Getting all');
};

const getNote = (title) => {
    console.log('Getting ', title);
};

const removeNote = (title) => {
    console.log('Removing ', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}