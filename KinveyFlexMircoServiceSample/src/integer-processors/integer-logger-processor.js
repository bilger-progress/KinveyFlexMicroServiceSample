"use strict"

module.exports = (context, modules) => {
    return new Promise((resolve, reject) => {
        if (isNaN(context.body.number)) {
            console.error("#integer-logger-processor.js: " +
                modules.backendContext.getAppKey() + ": '" +
                context.body.number + "' is not a number!");
            return reject("problem");
        } else {
            let result = null;
            if (context.body.number % 2 === 0) {
                result = "even";
            } else {
                result = "odd";
            }
            return resolve(result);
        }
    });
};