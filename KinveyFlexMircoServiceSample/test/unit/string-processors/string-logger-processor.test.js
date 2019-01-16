"use strict"

// Dependencies.
const assert = require("assert");

// Testing functionality.
const stringLoggerProcessor = require("../../../src/string-processors/string-logger-processor");

// Mocks set-up:
const unitTestingMocks = require("../mocks/unit-testing.mocks");
unitTestingMocks.stringProcessors.stringLoggerProcessor.modules.backendContext.getAppKey = function () {
    return "kid_123456"
}

describe("Unit testing the 'string-logger-processor.js' implementation.", function () {
    describe("Passing input 'banana'.", function () {
        it("Should resolve with 'word with even length'.", function () {
            return new Promise((resolve, reject) => {
                return stringLoggerProcessor(unitTestingMocks.stringProcessors.stringLoggerProcessor.context.evenLength,
                    unitTestingMocks.stringProcessors.stringLoggerProcessor.modules)
                    .then((data) => {
                        assert.strictEqual(data, "word with even length");
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        });
    });

    describe("Passing input 'apple'.", function () {
        it("Should resolve with 'word with odd length'.", function () {
            return new Promise((resolve, reject) => {
                return stringLoggerProcessor(unitTestingMocks.stringProcessors.stringLoggerProcessor.context.oddLength,
                    unitTestingMocks.stringProcessors.stringLoggerProcessor.modules)
                    .then((data) => {
                        assert.strictEqual(data, "word with odd length");
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        });
    });

    describe("Passing broken input.", function () {
        it("Should reject with error message.", function () {
            return new Promise((resolve, reject) => {
                return stringLoggerProcessor(unitTestingMocks.stringProcessors.stringLoggerProcessor.context.broken,
                    unitTestingMocks.stringProcessors.stringLoggerProcessor.modules)
                    .then((data) => {
                        // Should not resolve.
                        reject(data);
                    })
                    .catch((error) => {
                        // This is the correct flow.
                        resolve(error);
                    });
            });
        });
    });
});