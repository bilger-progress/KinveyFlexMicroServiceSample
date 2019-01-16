"use-strict"

// Dependencies.
const kinveyFlexSDK = require("kinvey-flex-sdk");

// Function implementations.
const integerLoggerProcessor = require("./integer-processors/integer-logger-processor");
const stringLoggerProcessor = require("./string-processors/string-logger-processor");

// Initialize Kinvey Flex micro-service.
kinveyFlexSDK.service((err, flex) => {
    if (err) {
        console.error("#handler.js: Error while initializing the Kinvey Flex micro-service!");
        return;
    }

    // Register function handlers.
    flex.functions.register("integerLoggerProcessor", handleFunction(context, complete, modules, integerLoggerProcessor));
    flex.functions.register("stringLoggerProcessor", handleFunction(context, complete, modules, stringLoggerProcessor));
});

/**
 * Reusable implementation handler.
 * 
 * @param { Object } context (Kinvey Flex)
 * @param { Object } complete (Kinvey Flex) 
 * @param { Object } modules  (Kinvey Flex)
 * @param { Function } implementation (Function Handler)
 */
function handleFunction(context, complete, modules, implementation) {
    return implementation(context, modules)
            .then((data) => {
                return complete().setBody({ message: data }).ok().next();
            })
            .catch((error) => {
                return complete().setBody(error).runtimeError().done();
            });
}