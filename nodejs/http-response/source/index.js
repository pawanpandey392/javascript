
// Importing response/response code services & injecting to other services
const ResponseStatus = require('./utility');
const HttpStatusCodes = require('./httpstatuscodes');
const InitiateBuildResponse = require('./response');

// Initiate & build response service with all required dependencies
const response = InitiateBuildResponse({HttpStatusCodes, ResponseStatus});

// Exporting/exposing response service to the app
module.exports = response;
