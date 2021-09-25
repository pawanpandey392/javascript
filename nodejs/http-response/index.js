let ResponseService = require('./source/index');

module.exports = {
    ResponseService
}

// Case 1
// let success = response({responsePayload, httpStatusCode, responseHeader}).success();
// let failure = response({responsePayload, httpStatusCode: 504, responseHeader}).failure();
// let fatal = response({responsePayload, httpStatusCode: 504, responseHeader}).fatal();
// let nullify = response({responsePayload, httpStatusCode: 504, responseHeader}).nullify();

// Case 2
// let success = response({httpStatusCode}).success();
// let failure = response({httpStatusCode: 700}).failure();
// let fatal = response({httpStatusCode: 700}).fatal();
// let nullify = response({httpStatusCode: 700}).nullify();

// Case 3
// let success = response({}).success();
// let failure = response({}).failure();
// let fatal = response({}).fatal();
// let nullify = response({}).nullify();

// Case 4
// let success = response().success();
// let failure = response().failure();
// let fatal = response().fatal();
// let nullify = response().nullify();
