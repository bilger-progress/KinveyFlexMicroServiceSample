"use strict"

// Dependencies.
const assert = require("assert");

// Testing functionality.
const integerLoggerProcessor = require("../../../src/integer-processors/integer-logger-processor");

// Mocks set-up:
const unitTestingMocks = require("../mocks/unit-testing.mocks");
unitTestingMocks.integerProcessors.integerLoggerProcessor.modules.backendContext.getAppKey = function () {
    return "kid_123456"
}

describe("Unit testing the 'integer-logger-processor.js' implementation.", function () {
    describe("Passing input '2'.", function () {
        it("Should resolve with 'even'.", function () {
            return new Promise((resolve, reject) => {
                return integerLoggerProcessor(unitTestingMocks.integerProcessors.integerLoggerProcessor.context.even,
                    unitTestingMocks.integerProcessors.integerLoggerProcessor.modules)
                    .then((data) => {
                        assert.strictEqual(data, "even");
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        });
    });

    describe("Passing input '3'.", function () {
        it("Should resolve with 'odd'.", function () {
            return new Promise((resolve, reject) => {
                return integerLoggerProcessor(unitTestingMocks.integerProcessors.integerLoggerProcessor.context.odd,
                    unitTestingMocks.integerProcessors.integerLoggerProcessor.modules)
                    .then((data) => {
                        assert.strictEqual(data, "odd");
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
                return integerLoggerProcessor(unitTestingMocks.integerProcessors.integerLoggerProcessor.context.broken,
                    unitTestingMocks.integerProcessors.integerLoggerProcessor.modules)
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