export const HTTP_CODES = [
    {
        code: 100,
        label: "Continue",
        tags: [
            "informational",
            "continue"
        ]
    },
    {
        code: 101,
        label: "Switching Protocols",
        tags: [
            "informational",
            "switching"
        ]
    },
    {
        code: 102,
        label: "Processing",
        tags: [
            "informational",
            "processing"
        ]
    },
    {
        code: 103,
        label: "Early Hints",
        tags: [
            "informational",
            "hints"
        ]
    },
    {
        code: 200,
        label: "OK",
        tags: [
            "success",
            "ok"
        ]
    },
    {
        code: 201,
        label: "Created",
        tags: [
            "success",
            "created"
        ]
    },
    {
        code: 202,
        label: "Accepted",
        tags: [
            "success",
            "accepted"
        ]
    },
    {
        code: 203,
        label: "Non Authoritative Information",
        tags: [
            "success",
            "non-authoritative"
        ]
    },
    {
        code: 204,
        label: "No Content",
        tags: [
            "success",
            "no-content"
        ]
    },
    {
        code: 205,
        label: "Reset Content",
        tags: [
            "success",
            "reset-content"
        ]
    },
    {
        code: 206,
        label: "Partial Content",
        tags: [
            "success",
            "partial-content"
        ]
    },
    {
        code: 207,
        label: "Multi-Status",
        tags: [
            "success",
            "multi-status"
        ]
    },
    {
        code: 300,
        label: "Multiple Choices",
        tags: [
            "redirection",
            "multiple-choices"
        ]
    },
    {
        code: 301,
        label: "Moved Permanently",
        tags: [
            "redirection",
            "moved-permanently"
        ]
    },
    {
        code: 302,
        label: "Moved Temporarily",
        tags: [
            "redirection",
            "moved-temporarily"
        ]
    },
    {
        code: 303,
        label: "See Other",
        tags: [
            "redirection",
            "see-other"
        ]
    },
    {
        code: 304,
        label: "Not Modified",
        tags: [
            "redirection",
            "not-modified"
        ]
    },
    {
        code: 305,
        label: "Use Proxy",
        constant: "USE_PROXY",
        tags: [
            "redirection",
            "use-proxy",
            "deprecated"
        ]
    },
    {
        code: 307,
        label: "Temporary Redirect",
        tags: [
            "redirection",
            "temporary-redirect"
        ]
    },
    {
        code: 308,
        label: "Permanent Redirect",
        tags: [
            "redirection",
            "permanent-redirect"
        ]
    },
    {
        code: 400,
        label: "Bad Request",
        tags: [
            "client-error",
            "bad-request"
        ]
    },
    {
        code: 401,
        label: "Unauthorized",
        tags: [
            "client-error",
            "unauthorized"
        ]
    },
    {
        code: 402,
        label: "Payment Required",
        tags: [
            "client-error",
            "payment-required"
        ]
    },
    {
        code: 403,
        label: "Forbidden",
        tags: [
            "client-error",
            "forbidden"
        ]
    },
    {
        code: 404,
        label: "Not Found",
        tags: [
            "client-error",
            "not-found"
        ]
    },
    {
        code: 405,
        label: "Method Not Allowed",
        tags: [
            "client-error",
            "method-not-allowed"
        ]
    },
    {
        code: 406,
        label: "Not Acceptable",
        tags: [
            "client-error",
            "not-acceptable"
        ]
    },
    {
        code: 407,
        label: "Proxy Authentication Required",
        tags: [
            "client-error",
            "proxy-authentication-required"
        ]
    },
    {
        code: 408,
        label: "Request Timeout",
        tags: [
            "client-error",
            "request-timeout"
        ]
    },
    {
        code: 409,
        label: "Conflict",
        tags: [
            "client-error",
            "conflict"
        ]
    },
    {
        code: 410,
        label: "Gone",
        tags: [
            "client-error",
            "gone"
        ]
    },
    {
        code: 411,
        label: "Length Required",
        tags: [
            "client-error",
            "length-required"
        ]
    },
    {
        code: 412,
        label: "Precondition Failed",
        tags: [
            "client-error",
            "precondition-failed"
        ]
    },
    {
        code: 413,
        label: "Request Entity Too Large",
        tags: [
            "client-error",
            "request-entity-too-large"
        ]
    },
    {
        code: 414,
        label: "Request-URI Too Long",
        tags: [
            "client-error",
            "uri-too-long"
        ]
    },
    {
        code: 415,
        label: "Unsupported Media Type",
        tags: [
            "client-error",
            "unsupported-media-type"
        ]
    },
    {
        code: 416,
        label: "Requested Range Not Satisfiable",
        tags: [
            "client-error",
            "range-not-satisfiable"
        ]
    },
    {
        code: 417,
        label: "Expectation Failed",
        tags: [
            "client-error",
            "expectation-failed"
        ]
    },
    {
        code: 418,
        label: "I'm a teapot",
        tags: [
            "client-error",
            "teapot",
            "joke"
        ]
    },
    {
        code: 419,
        label: "Insufficient Space on Resource",
        tags: [
            "server-error",
            "insufficient-space"
        ]
    },
    {
        code: 420,
        label: "Method Failure",
        constant: "METHOD_FAILURE",
        tags: [
            "server-error",
            "method-failure",
            "deprecated"
        ]
    },
    {
        code: 421,
        label: "Misdirected Request",
        tags: [
            "server-error",
            "misdirected-request"
        ]
    },
    {
        code: 422,
        label: "Unprocessable Entity",
        tags: [
            "client-error",
            "unprocessable-entity"
        ]
    },
    {
        code: 423,
        label: "Locked",
        tags: [
            "client-error",
            "locked"
        ]
    },
    {
        code: 424,
        label: "Failed Dependency",
        tags: [
            "client-error",
            "failed-dependency"
        ]
    },
    {
        code: 426,
        label: "Upgrade Required",
        tags: [
            "client-error",
            "upgrade-required"
        ]
    },
    {
        code: 428,
        label: "Precondition Required",
        tags: [
            "client-error",
            "precondition-required"
        ]
    },
    {
        code: 429,
        label: "Too Many Requests",
        tags: [
            "client-error",
            "too-many-requests"
        ]
    },
    {
        code: 431,
        label: "Request Header Fields Too Large",
        tags: [
            "client-error",
            "header-fields-too-large"
        ]
    },
    {
        code: 451,
        label: "Unavailable For Legal Reasons",
        tags: [
            "client-error",
            "legal-restriction"
        ]
    },
    {
        code: 500,
        label: "Internal Server Error",
        tags: [
            "server-error",
            "internal-error"
        ]
    },
    {
        code: 501,
        label: "Not Implemented",
        tags: [
            "server-error",
            "not-implemented"
        ]
    },
    {
        code: 502,
        label: "Bad Gateway",
        tags: [
            "server-error",
            "bad-gateway"
        ]
    },
    {
        code: 503,
        label: "Service Unavailable",
        tags: [
            "server-error",
            "service-unavailable"
        ]
    },
    {
        code: 504,
        label: "Gateway Timeout",
        tags: [
            "server-error",
            "gateway-timeout"
        ]
    },
    {
        code: 505,
        label: "HTTP Version Not Supported",
        tags: [
            "server-error",
            "http-version-not-supported"
        ]
    },
    {
        code: 507,
        label: "Insufficient Storage",
        tags: [
            "server-error",
            "insufficient-storage"
        ]
    },
    {
        code: 511,
        label: "Network Authentication Required",
        tags: [
            "server-error",
            "network-authentication-required"
        ]
    }
]