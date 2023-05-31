"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/providers/linkedin":
/*!***********************************************!*\
  !*** external "next-auth/providers/linkedin" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/linkedin");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_linkedin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/linkedin */ \"next-auth/providers/linkedin\");\n/* harmony import */ var next_auth_providers_linkedin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_linkedin__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        // Google Provider\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_linkedin__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.LINKEDIN_CLIENT_ID,\n            clientSecret: process.env.LINKEDIN_CLIENT_SECRET,\n            token: {\n                url: \"https://www.linkedin.com/oauth/v2/accessToken\",\n                request: async (context)=>{\n                    const body = querystring.stringify({\n                        grant_type: \"authorization_code\",\n                        code: context.params.code,\n                        redirect_uri: context.provider.callbackUrl,\n                        client_id: context.provider.clientId,\n                        client_secret: context.provider.clientSecret\n                    });\n                    const { data  } = await axios.post(context.provider.token.url, body);\n                    return {\n                        tokens: [\n                            data.access_token\n                        ]\n                    };\n                }\n            },\n            userinfo: {\n                url: \"https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))\",\n                async request (context) {\n                    const { data  } = await axios.get(context.provider.userinfo.url, {\n                        headers: {\n                            Authorization: `Bearer ${context.tokens[0]}`\n                        }\n                    });\n                    return data;\n                }\n            }\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUN1QjtBQUNJO0FBQ0o7QUFFeEQsaUVBQWVBLGdEQUFRLENBQUU7SUFDckJJLFNBQVMsRUFBRTtRQUNQLGtCQUFrQjtRQUNsQkgsaUVBQWMsQ0FBQztZQUNYSSxRQUFRLEVBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTO1lBQ2hDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxhQUFhO1NBQzFDLENBQUM7UUFFRlAsaUVBQWMsQ0FBQztZQUNYRSxRQUFRLEVBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxTQUFTO1lBQ2hDRixZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxhQUFhO1NBQzFDLENBQUM7UUFFRlYsbUVBQWdCLENBQUM7WUFDYkcsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ00sa0JBQWtCO1lBQ3hDSixZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxzQkFBc0I7WUFDaERDLEtBQUssRUFBRTtnQkFDSEMsR0FBRyxFQUFFLCtDQUErQztnQkFDcERDLE9BQU8sRUFBRSxPQUFNQyxPQUFPLEdBQUk7b0JBQ3RCLE1BQU1DLElBQUksR0FBR0MsV0FBVyxDQUFDQyxTQUFTLENBQUM7d0JBQy9CQyxVQUFVLEVBQUUsb0JBQW9CO3dCQUNoQ0MsSUFBSSxFQUFFTCxPQUFPLENBQUNNLE1BQU0sQ0FBQ0QsSUFBSTt3QkFDekJFLFlBQVksRUFBRVAsT0FBTyxDQUFDUSxRQUFRLENBQUNDLFdBQVc7d0JBQzFDQyxTQUFTLEVBQUVWLE9BQU8sQ0FBQ1EsUUFBUSxDQUFDckIsUUFBUTt3QkFDcEN3QixhQUFhLEVBQUVYLE9BQU8sQ0FBQ1EsUUFBUSxDQUFDakIsWUFBWTtxQkFDL0MsQ0FBQztvQkFFRixNQUFNLEVBQUVxQixJQUFJLEdBQUUsR0FBRyxNQUFNQyxLQUFLLENBQUNDLElBQUksQ0FBQ2QsT0FBTyxDQUFDUSxRQUFRLENBQUNYLEtBQUssQ0FBQ0MsR0FBRyxFQUFFRyxJQUFJLENBQUM7b0JBRW5FLE9BQU87d0JBQ0hjLE1BQU0sRUFBRTs0QkFBQ0gsSUFBSSxDQUFDSSxZQUFZO3lCQUFDO3FCQUM5QixDQUFDO2lCQUNMO2FBQ0o7WUFFREMsUUFBUSxFQUFFO2dCQUNObkIsR0FBRyxFQUFDLG9KQUFvSjtnQkFDeEosTUFBTUMsT0FBTyxFQUFDQyxPQUFPLEVBQUU7b0JBQ25CLE1BQU0sRUFBRVksSUFBSSxHQUFFLEdBQUcsTUFBTUMsS0FBSyxDQUFDSyxHQUFHLENBQUNsQixPQUFPLENBQUNRLFFBQVEsQ0FBQ1MsUUFBUSxDQUFDbkIsR0FBRyxFQUFFO3dCQUM1RHFCLE9BQU8sRUFBRTs0QkFDTEMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFcEIsT0FBTyxDQUFDZSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDL0M7cUJBQ0osQ0FBQztvQkFDRixPQUFPSCxJQUFJLENBQUM7aUJBQ2Y7YUFDSjtTQUNKLENBQUM7S0FDTDtDQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoYXBwLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnO1xyXG5pbXBvcnQgTGlua2VkSW5Qcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2xpbmtlZGluJztcclxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViJztcclxuIFxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCAoe1xyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgLy8gR29vZ2xlIFByb3ZpZGVyXHJcbiAgICAgICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICBjbGllbnRJZDogIHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcclxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVUXHJcbiAgICAgICAgfSksXHJcblxyXG4gICAgICAgIEdpdGh1YlByb3ZpZGVyKHtcclxuICAgICAgICAgICAgY2xpZW50SWQ6ICBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXHJcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVFxyXG4gICAgICAgIH0pLCBcclxuXHJcbiAgICAgICAgTGlua2VkSW5Qcm92aWRlcih7XHJcbiAgICAgICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5MSU5LRURJTl9DTElFTlRfSUQsXHJcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuTElOS0VESU5fQ0xJRU5UX1NFQ1JFVCxcclxuICAgICAgICAgICAgdG9rZW46IHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9vYXV0aC92Mi9hY2Nlc3NUb2tlbicsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiBhc3luYyBjb250ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2R5ID0gcXVlcnlzdHJpbmcuc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhbnRfdHlwZTogJ2F1dGhvcml6YXRpb25fY29kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGNvbnRleHQucGFyYW1zLmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogY29udGV4dC5wcm92aWRlci5jYWxsYmFja1VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50X2lkOiBjb250ZXh0LnByb3ZpZGVyLmNsaWVudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRfc2VjcmV0OiBjb250ZXh0LnByb3ZpZGVyLmNsaWVudFNlY3JldCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChjb250ZXh0LnByb3ZpZGVyLnRva2VuLnVybCwgYm9keSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnM6IFtkYXRhLmFjY2Vzc190b2tlbl0sXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB1c2VyaW5mbzoge1xyXG4gICAgICAgICAgICAgICAgdXJsOidodHRwczovL2FwaS5saW5rZWRpbi5jb20vdjIvbWU/cHJvamVjdGlvbj0oaWQsbG9jYWxpemVkRmlyc3ROYW1lLGxvY2FsaXplZExhc3ROYW1lLHByb2ZpbGVQaWN0dXJlKGRpc3BsYXlJbWFnZX5kaWdpdGFsbWVkaWFBc3NldDpwbGF5YWJsZVN0cmVhbXMpKScsXHJcbiAgICAgICAgICAgICAgICBhc3luYyByZXF1ZXN0KGNvbnRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChjb250ZXh0LnByb3ZpZGVyLnVzZXJpbmZvLnVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29udGV4dC50b2tlbnNbMF19YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICBdXHJcbn0pIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJMaW5rZWRJblByb3ZpZGVyIiwiR2l0aHViUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIiwiR0lUSFVCX0lEIiwiR0lUSFVCX1NFQ1JFVCIsIkxJTktFRElOX0NMSUVOVF9JRCIsIkxJTktFRElOX0NMSUVOVF9TRUNSRVQiLCJ0b2tlbiIsInVybCIsInJlcXVlc3QiLCJjb250ZXh0IiwiYm9keSIsInF1ZXJ5c3RyaW5nIiwic3RyaW5naWZ5IiwiZ3JhbnRfdHlwZSIsImNvZGUiLCJwYXJhbXMiLCJyZWRpcmVjdF91cmkiLCJwcm92aWRlciIsImNhbGxiYWNrVXJsIiwiY2xpZW50X2lkIiwiY2xpZW50X3NlY3JldCIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJ0b2tlbnMiLCJhY2Nlc3NfdG9rZW4iLCJ1c2VyaW5mbyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();