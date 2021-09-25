
// Importing response/response code services & injecting to other services
const HttpStatusCodes = require('./httpstatuscodes');
const InitiateBuildResponse = require('./response');

// Enum type of responses
const ResponseStatus = {
    success: 'SUCCESS',
    failure: 'FAILURE',
    fatal: 'FATAL',
    nullify: 'NULLIFY'
};

// Initiate & build response service with all required dependencies
const response = InitiateBuildResponse({HttpStatusCodes, ResponseStatus});

// Exporting/exposing response service to the app
module.exports = response;
