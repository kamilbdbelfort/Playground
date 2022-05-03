import request from 'request';

import { access_key } from "../config/config.js";
import { supportedLanguages } from "../config/config.js";

export const translate = (text, targetLanguage, callback) => {
    if (Object.keys(supportedLanguages).includes(targetLanguage)) {
        const url = `https://api-free.deepl.com/v2/translate?auth_key=${access_key}&text=${text}&target_lang=${targetLanguage}`;

        request({url, json: true}, (error, {body}) => {
            if (error) {
                callback('Unable to connect to location services!', undefined);
            } else if (body.message) {
                callback('Unable to translate, try another search.', undefined);
            } else {
                callback(undefined, {
                    source_language: body.translations[0].detected_source_language,
                    translation: body.translations[0].text,
                })
            }
        })
    } else {
        console.log('Target language unsupported');
        console.log(`Supported languages: ${Object.keys(supportedLanguages)}`);
    }
}