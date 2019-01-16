module.exports = {
    integerProcessors: {
        integerLoggerProcessor: {
            context: {
                even: {
                    body: {
                        number: 2
                    }
                },
                odd: {
                    body: {
                        number: 3
                    }
                },
                broken: {
                    body: {
                        number: "banana"
                    }
                }
            },
            modules: {
                backendContext: {
                    getAppKey: {}
                }
            }
        }
    },
    stringProcessors: {
        stringLoggerProcessor: {
            context: {
                evenLength: {
                    body: {
                        word: "banana"
                    }
                },
                oddLength: {
                    body: {
                        word: "apple"
                    }
                },
                broken: {
                    body: {
                        word: 123456
                    }
                }
            },
            modules: {
                backendContext: {
                    getAppKey: {}
                }
            }
        }
    }
}