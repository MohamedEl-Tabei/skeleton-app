/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./backEnd/controllers/user.controller.js":
/*!************************************************!*\
  !*** ./backEnd/controllers/user.controller.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./backEnd/models/user.model.js\");\n/* harmony import */ var _helpers_util_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/util/errorHandler */ \"./helpers/util/errorHandler.js\");\n\r\n\r\nconst insensitiveFields = \"Fname Lname Email Created_time Updated_time\"\r\nconst createUser = async (req, res) => {\r\n    try {\r\n        const newUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body)\r\n        await newUser.save()\r\n        return res.status(200).json({ message: \"Signed up successfully\" })\r\n    } catch (error) {\r\n        return res.status(400).json({ message: _helpers_util_errorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(error) })\r\n    }\r\n}\r\nconst listUsers = async (req, res) => {\r\n    try {\r\n        const users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().select(insensitiveFields)\r\n        return res.status(200).json(users)\r\n    } catch (error) {\r\n        return res.status(400).json({ message: _helpers_util_errorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(error) })\r\n    }\r\n}\r\nconst readUser=(req,res)=>{\r\n    req.user.Hashed_password= undefined\r\n    res.status(200).json(req.user)\r\n}\r\nconst updateUser= async(req,res)=>{\r\n    try {\r\n        req.user.Updated_time=Date.now()\r\n        let user=Object.assign(req.user,req.body)\r\n        await user.save()\r\n        user.Hashed_password=undefined\r\n        return res.status(200).json(user)\r\n    } catch (error) {\r\n        return res.status(400).json({message:_helpers_util_errorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(error)})\r\n    }\r\n}\r\nconst deleteUser=async (req,res)=>{\r\n    const user=req.user\r\n    const deletedUser=await user.deleteOne()\r\n    res.status(200).json({message:`${deletedUser.Fname} ${deletedUser.Lname}'s profile deleted`})\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ createUser, listUsers ,readUser,updateUser ,deleteUser});\n\n//# sourceURL=webpack://project/./backEnd/controllers/user.controller.js?");

/***/ }),

/***/ "./backEnd/express.js":
/*!****************************!*\
  !*** ./backEnd/express.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes_user_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/user.route */ \"./backEnd/routes/user.route.js\");\n/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../template.html */ \"./template.html.js\");\n\r\n\r\n\r\n\r\n\r\nconst express = __webpack_require__(/*! express */ \"express\")\r\n\r\nconst app = express()\r\n\r\napp.use(express.json())\r\napp.use(express.urlencoded()) \r\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_0___default()())\r\napp.use(helmet__WEBPACK_IMPORTED_MODULE_1___default()())\r\napp.use(compression__WEBPACK_IMPORTED_MODULE_2___default()())   \r\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()()) \r\napp.use(\"/\",_routes_user_route__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\r\n;\r\napp.get('/',(req,res)=>{res.send((0,_template_html__WEBPACK_IMPORTED_MODULE_5__[\"default\"])())})\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app); \n\n//# sourceURL=webpack://project/./backEnd/express.js?");

/***/ }),

/***/ "./backEnd/middlewares/user.middleware.js":
/*!************************************************!*\
  !*** ./backEnd/middlewares/user.middleware.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_util_encryptAndDecryptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/util/encryptAndDecryptData */ \"./helpers/util/encryptAndDecryptData.js\");\n/* harmony import */ var _helpers_validator_user_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/validator/user.validator */ \"./helpers/validator/user.validator.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_util_errorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/util/errorHandler */ \"./helpers/util/errorHandler.js\");\n\r\n\r\n\r\n\r\nconst dataHandlerMiddleware = async function () {\r\n    const user = await this\r\n    _helpers_validator_user_validator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].emailValidation(user.Email)\r\n    _helpers_validator_user_validator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nameValidation(user.Fname, \"First name\")\r\n    _helpers_validator_user_validator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nameValidation(user.Lname, \"Last name\")\r\n    user.Email = user.Email.toLowerCase()\r\n    user.Fname = user.Fname.toLowerCase()\r\n    user.Lname = user.Lname.toLowerCase()\r\n    const userWithSameEmail=await mongoose__WEBPACK_IMPORTED_MODULE_2___default().model(\"User\").findOne({ Email: user.Email })\r\n    if (user.isNew && userWithSameEmail) {\r\n        throw new Error(`${user.Email} is used`)\r\n    }\r\n    if (user.isModified && userWithSameEmail && userWithSameEmail._id!=user.id) {\r\n        throw new Error(`${user.Email} is used`)\r\n    }\r\n    if(user.isNew || user.Password!=undefined){\r\n        _helpers_validator_user_validator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].passwordValidation(user.Password)\r\n        user.Hashed_password = await (0,_helpers_util_encryptAndDecryptData__WEBPACK_IMPORTED_MODULE_0__.hash)(user.Password)\r\n    }\r\n}\r\nconst userByIdParam = async (req, res, nxt, id) => {\r\n    try {\r\n        if(!mongoose__WEBPACK_IMPORTED_MODULE_2___default().Types.ObjectId.isValid(id))\r\n        {\r\n            throw new Error(\"Looks like you've followed a broken link\")\r\n        }\r\n        const user= await mongoose__WEBPACK_IMPORTED_MODULE_2___default().model(\"User\").findById(id)\r\n        if(!user)\r\n        {\r\n            throw new Error(\"User not found\")\r\n        }\r\n        \r\n        req.user=user\r\n        await nxt()\r\n    } catch (error) {\r\n        res.status(404).json({message:_helpers_util_errorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(error)})        \r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ dataHandlerMiddleware, userByIdParam });\n\n//# sourceURL=webpack://project/./backEnd/middlewares/user.middleware.js?");

/***/ }),

/***/ "./backEnd/models/user.model.js":
/*!**************************************!*\
  !*** ./backEnd/models/user.model.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middlewares_user_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middlewares/user.middleware */ \"./backEnd/middlewares/user.middleware.js\");\nconst userSchema = {\r\n    Fname: {\r\n        type: String,\r\n        trim: true,\r\n        required:true\r\n    },\r\n    Lname: {\r\n        type: String,\r\n        trim: true,\r\n        required:true\r\n\r\n    },\r\n    Email: {\r\n        type: String,\r\n        trim: true,\r\n        required:true,\r\n        index:{unique:true,background:true},\r\n    },\r\n    Created_time: {\r\n        type: Date,\r\n        default: Date.now()\r\n    },\r\n    Updated_time: {\r\n        type: Date\r\n    },\r\n    Hashed_password: {\r\n        type: String,\r\n    },\r\n}\r\n;\r\n\r\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)(userSchema)\r\nUserSchema.virtual(\"Password\")\r\nUserSchema.pre(\"save\",_middlewares_user_middleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dataHandlerMiddleware)\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\r\n\n\n//# sourceURL=webpack://project/./backEnd/models/user.model.js?");

/***/ }),

/***/ "./backEnd/routes/user.route.js":
/*!**************************************!*\
  !*** ./backEnd/routes/user.route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./backEnd/controllers/user.controller.js\");\n/* harmony import */ var _middlewares_user_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares/user.middleware */ \"./backEnd/middlewares/user.middleware.js\");\n\r\n\r\n\r\nconst router=(0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\nrouter.param(\"id\",_middlewares_user_middleware__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userByIdParam)\r\n\r\nrouter.route(\"/api/users\").post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createUser)\r\nrouter.route(\"/api/users\").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listUsers)\r\nrouter.route(\"/api/users/:id\").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].readUser)\r\nrouter.route(\"/api/users/:id\").put(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateUser)\r\nrouter.route(\"/api/users/:id\").delete(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteUser)\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://project/./backEnd/routes/user.route.js?");

/***/ }),

/***/ "./backEnd/server.js":
/*!***************************!*\
  !*** ./backEnd/server.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./backEnd/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\nconst port = _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port;\r\nconst mongoUri=_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri\r\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(mongoUri);\r\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connection.on('error',()=> {throw new Error('unable to connect to database')})\r\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(port, (err) => err ? console.log(err) : console.log(`server run on port ${port}`))\r\n\n\n//# sourceURL=webpack://project/./backEnd/server.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst config={\r\n    env:\"development\"||0,\r\n    port:process.env.PORT||3001,\r\n    jwtSecret:process.env.JWT_SECRET||\"secret key\",\r\n    mongoUri:\"mongodb+srv://mohamedeltab33y:mohamedeltab33y@cluster0.0q5zh7p.mongodb.net/?retryWrites=true&w=majority\"\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config); \n\n//# sourceURL=webpack://project/./config/config.js?");

/***/ }),

/***/ "./helpers/util/encryptAndDecryptData.js":
/*!***********************************************!*\
  !*** ./helpers/util/encryptAndDecryptData.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hash\": () => (/* binding */ hash)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst hash=async(data)=>{\r\n    const saltRounds=10\r\n    const salt=await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().genSalt(saltRounds)\r\n    const hashedData=await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(data,salt)\r\n    return hashedData\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://project/./helpers/util/encryptAndDecryptData.js?");

/***/ }),

/***/ "./helpers/util/errorHandler.js":
/*!**************************************!*\
  !*** ./helpers/util/errorHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getErrorMessage = (err) => {\r\n    let message=\"\"\r\n    if(err.errors){\r\n        for (var errName in err.errors) {\r\n            if (err.errors[errName].message) {\r\n                message = err.errors[errName].message\r\n            }\r\n        }\r\n    }\r\n    else {\r\n        message=err.message\r\n    }\r\n    return message;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({getErrorMessage});\n\n//# sourceURL=webpack://project/./helpers/util/errorHandler.js?");

/***/ }),

/***/ "./helpers/validator/user.validator.js":
/*!*********************************************!*\
  !*** ./helpers/validator/user.validator.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst passwordValidation=(password)=>{\r\n    if(password==undefined)\r\n        throw new Error(\"Password is required\")\r\n    if(!/^.{8,}$/.test(password))\r\n        throw new Error(\"Password must be 8 character or more\")\r\n    if(!/(?=.*[a-z])/.test(password))\r\n        throw new Error('Password must include a lowercase letter')\r\n    if(!/(?=.*[A-Z])/.test(password))\r\n        throw new Error('Password must include an uppercase letter')\r\n    if(!/(?=.*[0-9])/.test(password))\r\n        throw new Error('Password must include a number')\r\n    if(!/(?=.*[!@#$%^&*-+=])/.test(password))\r\n        throw new Error('Password must include a special character !@#$%^&*-+=')    \r\n}\r\nconst emailValidation=(email)=>{\r\n    if(email==undefined)\r\n        throw new Error(\"Email is required\")\r\n    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(email))\r\n        throw new Error(\"Enter a valid email like example@example.com\")\r\n}\r\nconst nameValidation=(name,nameStr)=>{\r\n    if(name==undefined)\r\n        throw new Error(`${nameStr} is required`)\r\n    if(!/^.{2,}$/.test(name))\r\n        throw new Error(`${nameStr} must be 2 characters or more`)\r\n    if(!/^.[a-zA-Z]*$/.test(name))\r\n        throw new Error(`${nameStr} must consist of letters only`)\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({passwordValidation,emailValidation,nameValidation});\n\n//# sourceURL=webpack://project/./helpers/validator/user.validator.js?");

/***/ }),

/***/ "./template.html.js":
/*!**************************!*\
  !*** ./template.html.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `\r\n<!doctype html>\r\n<html lang=\"en\">\r\n    <head>\r\n        <meta charset=\"utf-8\">\r\n        <title>MERN Skeleton</title>\r\n    </head>\r\n    <body>  \r\n        <div id=\"root\">Hello World</div>  \r\n    </body>      \r\n</html>`);\n\n//# sourceURL=webpack://project/./template.html.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./backEnd/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;