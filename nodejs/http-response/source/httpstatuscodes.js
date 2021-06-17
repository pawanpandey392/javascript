module.exports.GetHttpCodes = () => {
  return [
    {
      code: 100,
      msg: 'Continue.',
      name: 'CONTINUE',
      description: 'The server has received the request headers and the client should proceed to send the request body.'
    },
    {
      code: 101,
      msg: 'Switching Protocols.',
      name: 'SWITCHING_PROTOCOLS',
      description: 'The requester has asked the server to switch protocols and the server has agreed to do so.'
    },
    {
      code: 103,
      msg: 'Early Hints.',
      name: 'EARLY_HINTS',
      description: 'Used to return some response headers before final HTTP message.'
    },
    {
      code: 200,
      msg: 'OK.',
      name: 'OK',
      description: 'All right! Standard response for successful HTTP requests.'
    },
    {
      code: 201,
      msg: 'Created.',
      name: 'CREATED',
      description: 'Resource was created successfully.'
    },
    {
      code: 202,
      msg: 'Accepted.',
      name: 'ACCEPTED',
      description: 'The request has been accepted for processing, but the processing has not been completed.'
    },
    {
      code: 203,
      msg: 'Non-Authoritative Information.',
      name: 'NON_AUTHORITATIVE_INFORMATION',
      description: 'The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin\'s response.'
    },
    {
      code: 204,
      msg: 'No Content.',
      name: 'NO_CONTENT',
      description: 'Resource updated successfully.'
    },
    {
      code: 205,
      msg: 'Reset Content.',
      name: 'RESET_CONTENT',
      description: 'The server successfully processed the request, asks that the requester reset its document view, and is not returning any content.'
    },
    {
      code: 206,
      msg: 'Partial Content.',
      name: 'PARTIAL_CONTENT',
      description: 'The server is delivering only part of the resource (byte serving) due to a range header sent by the client.'
    },
    {
      code: 300,
      msg: 'Multiple Choices.',
      name: 'MULTIPLE_CHOICES',
      description: 'Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation).'
    },
    {
      code: 301,
      msg: 'Moved Permanently.',
      name: 'MOVED_PERMANENTLY',
      description: 'This and all future requests should be directed to the given URI.'
    },
    {
      code: 302,
      msg: 'Found.',
      name: 'FOUND',
      description: 'Tells the client to look at (browse to) another URL.'
    },
    {
      code: 303,
      msg: 'See Other.',
      name: 'SEE_OTHER',
      description: 'The response to the request can be found under another URI using the GET method.'
    },
    {
      code: 304,
      msg: 'Not Modified.',
      name: 'NOT_MODIFIED',
      description: 'Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.'
    },
    {
      code: 307,
      msg: 'Temporary Redirect.',
      name: 'TEMPORARY_REDIRECT',
      description: 'In this case, the request should be repeated with another URI.'
    },
    {
      code: 308,
      msg: 'Permanent Redirect.',
      name: 'PERMANENT_REDIRECT',
      description: 'The request and all future requests should be repeated using another URI.'
    },
    {
      code: 400,
      msg: 'Bad Request.',
      name: 'BAD_REQUEST',
      description: 'The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).'
    },
    {
      code: 401,
      msg: 'Unauthorized.',
      name: 'UNAUTHORIZED',
      description: 'You are not logged in, e.g. using a valid access token.'
    },
    {
      code: 402,
      msg: 'Payment Required.',
      name: 'PAYMENT_REQUIRED',
      description: 'Reserved for future use.'
    },
    {
      code: 403,
      msg: 'Forbidden.',
      name: 'FORBIDDEN',
      description: 'You are authenticated but do not have access to what you are trying to do.'
    },
    {
      code: 404,
      msg: 'Not Found.',
      name: 'NOT_FOUND',
      description: 'The resource you are requesting does not exist.'
    },
    {
      code: 405,
      msg: 'Method Not Allowed.',
      name: 'METHOD_NOT_ALLOWED',
      description: 'The request type is not allowed, e.g. /users is a resource and POST /users is a valid action but PUT / users is not.'
    },
    {
      code: 406,
      msg: 'Not Acceptable.',
      name: 'NOT_ACCEPTABLE',
      description: 'The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.'
    },
    {
      code: 407,
      msg: 'Proxy Authentication Required.',
      name: 'PROXY_AUTHENTICATION_REQUIRED',
      description: 'The client must first authenticate itself with the proxy.'
    },
    {
      code: 408,
      msg: 'Request Timeout.',
      name: 'REQUEST_TIMEOUT',
      description: 'The server timed out waiting for the request.'
    },
    {
      code: 409,
      msg: 'Conflict.',
      name: 'CONFLICT',
      description: 'Indicates that the request could not be processed because of conflict in the current state of the resource, such as an edit conflict between multiple simultaneous updates.'
    },
    {
      code: 410,
      msg: 'Gone.',
      name: 'GONE',
      description: 'Indicates that the resource requested is no longer available and will not be available again.'
    },
    {
      code: 411,
      msg: 'Length Required.',
      name: 'LENGTH_REQUIRED',
      description: 'The request did not specify the length of its content, which is required by the requested resource.'
    },
    {
      code: 412,
      msg: 'Precondition Failed.',
      name: 'PRECONDITION_FAILED',
      description: 'The server does not meet one of the preconditions that the requester put on the request header fields.'
    },
    {
      code: 413,
      msg: 'Payload Too Large.',
      name: 'PAYLOAD_TOO_LARGE',
      description: 'The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".'
    },
    {
      code: 414,
      msg: 'URI Too Long.',
      name: 'URI_TOO_LONG',
      description: 'The URI provided was too long for the server to process.'
    },
    {
      code: 415,
      msg: 'Unsupported Media Type.',
      name: 'UNSUPPORTED_MEDIA_TYPE',
      description: 'The request entity has a media type which the server or resource does not support.'
    },
    {
      code: 416,
      msg: 'Range Not Satisfiable.',
      name: 'RANGE_NOT_SATISFIABLE',
      description: 'The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.'
    },
    {
      code: 417,
      msg: 'Expectation Failed.',
      name: 'EXPECTATION_FAILED',
      description: 'The server cannot meet the requirements of the Expect request-header field.'
    },
    {
      code: 418,
      msg: 'I\'m a teapot.',
      name: 'I_AM_A_TEAPOT',
      description: 'This HTTP status is used as an Easter egg in some websites.'
    },
    {
      code: 422,
      msg: 'Unprocessable Entity.',
      name: 'UNPROCESSABLE_ENTITY',
      description: 'Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.'
    },
    {
      code: 425,
      msg: 'Too Early.',
      name: 'TOO_EARLY',
      description: 'Indicates that the server is unwilling to risk processing a request that might be replayed.'
    },
    {
      code: 426,
      msg: 'Upgrade Required.',
      name: 'UPGRADE_REQUIRED',
      description: 'The client should switch to a different protocol such as TLS/1.3, given in the Upgrade header field.'
    },
    {
      code: 428,
      msg: 'Precondition Required.',
      name: 'PRECONDITION_REQUIRED',
      description: 'The origin server requires the request to be conditional. Intended to prevent the \'lost update\' problem, where a client GETs a resource\'s state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.'
    },
    {
      code: 429,
      msg: 'Too Many Requests.',
      name: 'TOO_MANY_REQUESTS',
      description: 'The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes.'
    },
    {
      code: 431,
      msg: 'Request Header Fields Too Large.',
      name: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
      description: 'The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.'
    },
    {
      code: 451,
      msg: 'Unavailable For Legal Reasons.',
      name: 'UNAVAILABLE_FOR_LEGAL_REASONS',
      description: 'A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.'
    },
    {
      code: 500,
      msg: 'Internal Server Error.',
      name: 'INTERNAL_SERVER_ERROR',
      description: 'An error occured on the server which was not the consumer\'s fault.'
    },
    {
      code: 501,
      msg: 'Not Implemented.',
      name: 'NOT_IMPLEMENTED',
      description: 'The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability (e.g., a new feature of a web-service API).'
    },
    {
      code: 502,
      msg: 'Bad Gateway.',
      name: 'BAD_GATEWAY',
      description: 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.'
    },
    {
      code: 503,
      msg: 'Service Unavailable.',
      name: 'SERVICE_UNAVAILABLE',
      description: 'The server cannot handle the request (because it is overloaded or down for maintenance). Generally, this is a temporary state.'
    },
    {
      code: 504,
      msg: 'Gateway Timeout.',
      name: 'GATEWAY_TIMEOUT',
      description: 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.'
    },
    {
      code: 505,
      msg: 'HTTP Version Not Supported.',
      name: 'HTTP_VERSION_NOT_SUPPORTED',
      description: 'The server does not support the HTTP protocol version used in the request.'
    },
    {
      code: 506,
      msg: 'Variant Also Negotiates.',
      name: 'VARIANT_ALSO_NEGOTIATES',
      description: 'Transparent content negotiation for the request results in a circular reference.'
    },
    {
      code: 507,
      msg: 'Insufficient Storage.',
      name: 'INSUFFICIENT_STORAGE',
      description: 'The server is unable to store the representation needed to complete the request.'
    },
    {
      code: 508,
      msg: 'Loop Detected.',
      name: 'LOOP_DETECTED',
      description: 'The server detected an infinite loop while processing the request.'
    },
    {
      code: 510,
      msg: 'Not Extended.',
      name: 'NOT_EXTENDED',
      description: 'Further extensions to the request are required for the server to fulfil it.'
    },
    {
      code: 511,
      msg: 'Network Authentication Required.',
      name: 'NETWORK_AUTHENTICATION_REQUIRED',
      description: 'The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network.'
    },
    {
      code: 611,
      msg: 'Read error',
      name: 'READ_ERROR',
      description: 'Indicates that an error occurred when the crawler retrieved a document.',
    },
    {
      code: 612,
      msg: 'Connect error',
      name: 'CONNECT_ERROR',
      description: 'Indicates that an error occurred when the crawler attempted to connect to a Web server.',
    },
    {
      code: 613,
      msg: 'Read timeout',
      name: 'READ_TIMEOUT',
      description: 'Indicates that a timeout occurred while the crawler was retrieving a document.',
    },
    {
      code: 614,
      msg: 'SSL handshake failed',
      name: 'SSL_HANDSHAKE_FAILED',
      description: 'Indicates that the crawler is unable to crawl secure (HTTPS) sites',
    },
    {
      code: 615,
      msg: 'Other read error',
      name: 'OTHER_READ_ERROR',
      description: '',
    },
    {
      code: 617,
      msg: 'Encoding error',
      name: 'ENCODING_ERROR',
      description: 'Indicates the inability to create a String from a document\'s byte content because the encoding string (charset) is invalid or the document contains invalid bytes.',
    },
    {
      code: 618,
      msg: 'Redirect with no redirect URL',
      name: 'REDIRECT_WITH_NO_REDIRECT_URL',
      description: 'Indicates that the redirect URL is not valid when the crawler receives the following HTTP status codes. It is possible that the location of the HTTP response header is not valid.',
    },
    {
      code: 680,
      msg: 'DNS lookup failure',
      name: 'DNS_LOOKUP_FAILURE',
      description: 'Indicates that the crawler was not able to obtain IP addresses for hosts in the crawl space, perhaps because of network access problems.',
    },
    {
      code: 690,
      msg: 'Malformed URL',
      name: 'MALFORMED_URL',
      description: 'This code represents outcomes that do not reflect the true outcome of a download from a remote host, but rather a temporary condition inside the crawler, such as one component that shuts down while another is waiting for a result or sending a result.',
    },
    {
      code: 691,
      msg: 'Lost connection (URL Fetcher)',
      name: 'LOST_CONNECTION',
      description: 'This code represents outcomes that do not reflect the true outcome of a download from a remote host, but rather a temporary condition inside the crawler, such as one component that shuts down while another is waiting for a result or sending a result.',
    },
    {
      code: 692,
      msg: 'Write timeout (URL Fetcher)',
      name: 'WRITE_TIMEOUT',
      description: 'This code represents outcomes that do not reflect the true outcome of a download from a remote host, but rather a temporary condition inside the crawler, such as one component that shuts down while another is waiting for a result or sending a result.',
    },
    {
      code: 693,
      msg: 'Select fail (URL Fetcher)',
      name: 'SELECT_FAIL',
      description: 'This code represents outcomes that do not reflect the true outcome of a download from a remote host, but rather a temporary condition inside the crawler, such as one component that shuts down while another is waiting for a result or sending a result.',
    },
    {
      code: 694,
      msg: 'Write error (URLFetcher)',
      name: 'WRITE_ERROR',
      description: 'This code represents outcomes that do not reflect the true outcome of a download from a remote host, but rather a temporary condition inside the crawler, such as one component that shuts down while another is waiting for a result or sending a result.',
    },
    {
      code: 695,
      msg: 'Incomplete block header (URLFetcher)',
      name: 'INCOMPLETE_BLOCK_HEADER',
      description: 'This code represents outcomes that do not reflect the true outcome of a download from a remote host, but rather a temporary condition inside the crawler, such as one component that shuts down while another is waiting for a result or sending a result.',
    },
    {
      code: 699,
      msg: 'Unexpected error (URLFetcher)',
      name: 'UNEXPECTED_ERROR',
      description: 'This code represents outcomes that do not reflect the true outcome of a download from a remote host, but rather a temporary condition inside the crawler, such as one component that shuts down while another is waiting for a result or sending a result.',
    },
    {
      code: 700,
      msg: 'Parse error (no header end)',
      name: 'PARSE_ERROR',
      description: '',
    },
    {
      code: 710,
      msg: 'Parse error (header)',
      name: 'PARSE_ERROR',
      description: 'Indicate that problems prevented the crawler from doing a complete download, or that the crawler encountered invalid HTML data at a site.',
    },
    {
      code: 720,
      msg: 'Parse error (no HTTP code)',
      name: 'PARSE_ERROR',
      description: 'Indicate that problems prevented the crawler from doing a complete download, or that the crawler encountered invalid HTML data at a site.',
    },
    {
      code: 730,
      msg: 'Parse error (body)',
      name: 'PARSE_ERROR',
      description: 'Indicate that problems prevented the crawler from doing a complete download, or that the crawler encountered invalid HTML data at a site.',
    },
    {
      code: 740,
      msg: 'Excluded by robots.txt file',
      name: 'EXCLUDED_BY_ROBOTS_TXT_FILE',
      description: 'Indicates that anchor links that point to the excluded document can be included in the index.',
    },
    {
      code: 4044,
      msg: 'Excluded by robots.txt file',
      name: 'EXCLUDED_BY_ROBOTS_TXT_FILE',
      description: 'Indicates that the anchor links in documents that point to the excluded document are also excluded from the index.',
    },
    {
      code: 741,
      msg: 'Robots temporarily unavailable',
      name: 'ROBOTS_TEMPORARILY_UNAVAILABLE',
      description: 'Indicates that a site has a robots.txt file that allows the crawl, but the download failed',
    },
    {
      code: 770,
      msg: 'Bad protocol or nonstandard system port',
      name: 'BAD_PROTOCOL_OR_NONSTANDARD_SYSTEM_PORT',
      description: 'This status codes mostly occur when you make changes to the crawl space after the crawler has been running for awhile. These status codes typically do not indicate problems that you need to address.',
    },
    {
      code: 780,
      msg: 'Excluded by file type exclusions',
      name: 'EXCLUDED_BY_FILE_TYPE_EXCLUSIONS',
      description: 'This status codes mostly occur when you make changes to the crawl space after the crawler has been running for awhile. These status codes typically do not indicate problems that you need to address.',
    },
    {
      code: 786,
      msg: 'Invalid URL',
      name: 'INVALID_URL',
      description: 'This status codes mostly occur when you make changes to the crawl space after the crawler has been running for awhile. These status codes typically do not indicate problems that you need to address.',
    },
    {
      code: 3020,
      msg: 'Soft redirect',
      name: 'SOFT_REDIRECT',
      description: 'Indicates that a document with status code 200 contains a location header that refers the user agent to another URL.',
    }
  ];
}