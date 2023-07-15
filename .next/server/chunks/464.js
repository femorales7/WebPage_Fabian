"use strict";
exports.id = 464;
exports.ids = [464];
exports.modules = {

/***/ 8464:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = getCookieParser;
__webpack_unused_export__ = sendStatusCode;
__webpack_unused_export__ = redirect;
__webpack_unused_export__ = checkIsManualRevalidate;
__webpack_unused_export__ = clearPreviewData;
__webpack_unused_export__ = sendError;
__webpack_unused_export__ = setLazyProp;
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
function getCookieParser(headers) {
    return function parseCookie() {
        const header = headers.cookie;
        if (!header) {
            return {};
        }
        const { parse: parseCookieFn  } = __webpack_require__(252);
        return parseCookieFn(Array.isArray(header) ? header.join(";") : header);
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === "string") {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== "number" || typeof url !== "string") {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
__webpack_unused_export__ = PRERENDER_REVALIDATE_HEADER;
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
__webpack_unused_export__ = PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
function checkIsManualRevalidate(req, previewProps) {
    return {
        isManualRevalidate: req.headers[PRERENDER_REVALIDATE_HEADER] === previewProps.previewModeId,
        revalidateOnlyGenerated: !!req.headers[PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER]
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
__webpack_unused_export__ = COOKIE_NAME_PRERENDER_BYPASS;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
__webpack_unused_export__ = COOKIE_NAME_PRERENDER_DATA;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
__webpack_unused_export__ = RESPONSE_LIMIT_DEFAULT;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
__webpack_unused_export__ = SYMBOL_PREVIEW_DATA;
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
__webpack_unused_export__ = SYMBOL_CLEARED_COOKIES;
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize  } = __webpack_require__(252);
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }), 
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
__webpack_unused_export__ = ApiError;
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req  }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
}

//# sourceMappingURL=index.js.map

/***/ })

};
;