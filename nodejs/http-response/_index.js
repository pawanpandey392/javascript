let response = require('./source/index');

let httpStatusCode = '    741    ';
let responseHeader = {
  'env': 'dev',
  'requestId': 'e0173930-cd9d-11eb-84af-ab96261be146'
};
let responsePayload = {
  'accountType': 'SA',
  'accountDetails': [
    {
      'accountNumber': '0000000886',
      'productName': '902',
      'openDate': '2005-08-24',
      'productType': 'OTHERS'
    }
  ]
};

// TESTING SUCCESS/FAILURE METHOD WITH VARIOUS DATA SETS

// Case 1
// let success = response({responsePayload, httpStatusCode, responseHeader}).success();
// let failure = response({responsePayload, httpStatusCode: 504, responseHeader}).failure();
// let fatal = response({responsePayload, httpStatusCode: 504, responseHeader}).fatal();
let nullify = response({responsePayload, httpStatusCode: 504, responseHeader}).nullify();

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

// console.log('----------------------------------------------------------------------------');
// console.log(success);
// console.log('----------------------------------------------------------------------------');
// console.log(failure);
// console.log('----------------------------------------------------------------------------');
// console.log(fatal);
console.log('----------------------------------------------------------------------------');
console.log(nullify);
console.log('----------------------------------------------------------------------------');
console.log('----------------------------------------------------------------------------');
console.log('----------------------------------------------------------------------------');
console.log('----------------------------------------------------------------------------');
console.log('----------------------------------------------------------------------------');
console.log('----------------------------------------------------------------------------');
console.log('----------------------------------------------------------------------------');