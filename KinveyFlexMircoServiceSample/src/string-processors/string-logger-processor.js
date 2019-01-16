"use strict"

module.exports = (context, modules) => {
    return new Promise((resolve, reject) => {
        if (typeof context.body.word === "string") {
            let result = null;
            if (context.body.word.length % 2 === 0) {
                result = "word with even length";
            } else {
                result = "word with odd length";
            }
            resolve(result);
        } else {
            console.error("#string-logger-processor.js: " +
                modules.backendContext.getAppKey() + ": '" +
                context.body.word + "' is not a string!");
            return reject("problem");
        }
    });
};