import fs from 'fs';
import {toChalk} from '../../notes-app/utils.js';

export const addTranslation = (text, sourceLanguage, translation, targetLanguage) => {
    const translations = loadTranslations();
    const duplicateTranslation = translations.find((translation) => translation[sourceLanguage] === text);

    debugger

    if (!duplicateTranslation) {
        const newTranslation = {};
        newTranslation[sourceLanguage] = text;
        newTranslation[targetLanguage] = translation;

        translations.push(newTranslation);
        // translations.sort((a, b) => a[sourceLanguage].localeCompare(b[sourceLanguage]));
        saveTranslations(translations);
        console.log(toChalk('green','Translation added'));
        console.log(newTranslation);
    } else {
        console.log(toChalk('red','Translation already exists!'));
    }
}

export const listTranslations = () => {
    console.log(toChalk('blue', 'Your translations:'));
    const translations = loadTranslations();
    translations.forEach((translation) => console.log(translation));
}

export const readTranslation = (text) => {
    const translations = loadTranslations();
    const translation = translations.find((translation) => translation["EN"]===text);

    if (translation) {
        console.log(toChalk('white', translation["EN"]));
        console.log(translation);
    } else {
        console.log(toChalk('red', 'No translation found!'));
    }
}

const saveTranslations = (translations) => {
    const dataJSON = JSON.stringify(translations);
    fs.writeFileSync('dictionary.json', dataJSON);
}

const loadTranslations = () => {
    try {
        const dataBuffer = fs.readFileSync('dictionary.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}