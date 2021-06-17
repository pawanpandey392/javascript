
// Injecting services into InitiateBuildResponse method
let InitiateBuildResponse = ({HttpStatusCodes, ResponseStatus}) => {

	// Actual response service which handles the logic for various responses
	return function Response({httpStatusCode, responsePayload = null, responseHeader = null} = {}) {

		// Get Http response codes
		GetHttpResponseCode = (statusCodes) => {
			if (!statusCodes) throw new Error('Http status codes not found.');

			// Find the http status code from the injected list of codes
			return Object.freeze({
				getHttpStatusCode: (resCode) => statusCodes.find((value) => value.code === resCode)
			});
		}

		// Get http status codes object
		httpStatusCodesObject = GetHttpResponseCode(HttpStatusCodes.GetHttpCodes());

		// Sanitize http status code
		Sanitize = (httpStatusCode) => {
			if (typeof httpStatusCode === 'string') httpStatusCode = parseInt(httpStatusCode.trim());
			return httpStatusCode;
		};

		// Get common response object
		ResponseObject = ({status, statusCode, payload, header} = {}) => JSON.stringify({
			response: {
				status: status,
				httpCode: statusCode,
				header: header,
				msgInfo: httpStatusCodesObject.getHttpStatusCode(statusCode),
				payload: payload,
			}
		});

		// Get null response object
		NullObject = () => JSON.stringify({
			response: {
				status: null,
				httpCode: null,
				header: null,
				msgInfo: null,
				payload: null,
			}
		});

		return Object.freeze({
			// Success response method responds with Informational/Successful/Redirects responses.
			success: () => ResponseObject({
				status: ResponseStatus.success,
				statusCode: Sanitize(httpStatusCode || 200),
				header: responseHeader,
				payload: responsePayload
			}),
			// Failure response method responds with Client/Server errors
			failure: () => ResponseObject({
				status: ResponseStatus.failure,
				statusCode: Sanitize(httpStatusCode || 501),
				header: responseHeader,
				payload: responsePayload
			}),
			// Fatal response method responds with Server errors
			fatal: () => ResponseObject({
				status: ResponseStatus.fatal,
				statusCode: 500,
				header: null,
				payload: null
			}),
			// Fatal response method responds with null values only
			nullify: () => NullObject()
		});
	}
}

module.exports = InitiateBuildResponse;

// console.table([{code: code, data: data}]);
// console.table([{code: e.code, name: e.name, message: e.message}]);