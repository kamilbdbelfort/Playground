import { translate } from './utils/translate.js';
import {addTranslation, listTranslations, readTranslation} from "./utils/translations.js";

const text = process.argv[2];
const targetLanguage = (process.argv[3] || "EL");


// translate(text, targetLanguage, (error, { source_language, translation }) => {
//     if (error) {
//         return console.log(error);
//     }
//     addTranslation(text, source_language, translation, targetLanguage);
// });

listTranslations();
// readTranslation(process.argv[2]);