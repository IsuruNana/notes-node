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
    const note = {
        title,
        body
    };

    const duplicates = notes.filter(note => {
        return note.title === title
    });

    if(duplicates.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};

const getAll = () => {
    console.log('Getting all');
};

const getNote = (title) => {
    //console.log('Getting ', title);
    let notes = fecthNotes();

    let filteredNotes = notes.filter(note => {
        return note.title === title;
    });

    return filteredNotes[0];
};

const removeNote = (title) => {
    //console.log('Removing ', title);
    const notes = fecthNotes();

    let res = notes.filter(note => {
        if(note.title !== title)
            return note;
    });

    saveNotes(res);

    return notes.length !== res.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}