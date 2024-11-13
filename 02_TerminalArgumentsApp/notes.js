const fs = require('fs');
const chalk = require('chalk');

const notesJsonFileName = 'notes.json';

const getNotes = () => {
    return loadNotes();
};

const addNote = (title, content) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(note => note.title === title);

    debugger;

    if (duplicateNotes.length === 0) {

        notes.push({
            title,
            content
        });

        console.log(chalk.green.inverse('Note added.'));

        saveNotes(notes);

    }
};

const removeNote = (title) => {
    const notes = loadNotes();

    const newNotes = notes.filter(note => note.title !== title);

    if (newNotes.length < notes.length) {
        console.log(chalk.red.inverse('Note removed.'));

        saveNotes(newNotes);
    } else {
        console.log(chalk.red('No note found!'));
    }
};

const readNote = (title) => {
    const notes = loadNotes();

    return notes.find(note => note.title === title);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(notesJsonFileName);
        let dataStr = dataBuffer.toString().trim();
        dataStr == '' ? dataStr = '[]' : dataStr = dataStr.trim();
        return JSON.parse(dataStr) ?? {};
    } catch (error) {
        console.log(error);
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync(notesJsonFileName, JSON.stringify(notes));
};

module.exports = {
    getNotes,
    addNote,
    removeNote,
    readNote,
};