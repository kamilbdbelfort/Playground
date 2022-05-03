import fs from 'fs';
import {toChalk} from './utils.js';

export const listNotes = () => {
    console.log(toChalk('blue', 'Your notes:'));
    const notes = loadNotes();
    notes.forEach((note) => console.log(note.title));
}

export const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(toChalk('blue', note.title));
        console.log(note.body);
    } else {
        console.log(toChalk('red', 'No note found!'));
    }
}

export const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(toChalk('green','Node added'));
    } else {
        console.log(toChalk('red','Note title taken!'));
    }    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

export const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length === notesToKeep.length) {
        console.log(toChalk('red', 'No note found!'));
    } else {
        console.log(toChalk('green', 'Note removed!'));
        saveNotes(notesToKeep);
    }
}