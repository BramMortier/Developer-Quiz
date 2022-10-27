/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/circleGraph.js":
/*!***************************************!*\
  !*** ./src/javascript/circleGraph.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCircleGraph": () => (/* binding */ initCircleGraph)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/javascript/constants.js");


// Circle graph logic
var getScoreGrade = function getScoreGrade(progress) {
  if (progress == 100) return "S";
  if (progress >= 90) return "A";
  if (progress >= 75) return "B";
  if (progress >= 60) return "C";
  if (progress >= 50) return "D";
  return "F";
};
var initCircleGraph = function initCircleGraph(score) {
  var currentProgress = -1;
  var progressEndValue = score;
  var speed = 20;
  var progressInterval = setInterval(function () {
    currentProgress++;
    _constants__WEBPACK_IMPORTED_MODULE_0__.progressValue.innerText = getScoreGrade(currentProgress);
    _constants__WEBPACK_IMPORTED_MODULE_0__.graphProgress.style.background = "\n            conic-gradient(\n                var(--accent) ".concat(currentProgress * 3.6, "deg,\n                var(--primary) ").concat(currentProgress * 3.6, "deg     \n            )\n        ");
    if (currentProgress == progressEndValue) clearInterval(progressInterval);
  }, speed);
};

/***/ }),

/***/ "./src/javascript/constants.js":
/*!*************************************!*\
  !*** ./src/javascript/constants.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amountOfQuestions": () => (/* binding */ amountOfQuestions),
/* harmony export */   "answerList": () => (/* binding */ answerList),
/* harmony export */   "backBtns": () => (/* binding */ backBtns),
/* harmony export */   "graphProgress": () => (/* binding */ graphProgress),
/* harmony export */   "highscores": () => (/* binding */ highscores),
/* harmony export */   "highscoresBtn": () => (/* binding */ highscoresBtn),
/* harmony export */   "nextPageBtn": () => (/* binding */ nextPageBtn),
/* harmony export */   "pages": () => (/* binding */ pages),
/* harmony export */   "possibleAnswers": () => (/* binding */ possibleAnswers),
/* harmony export */   "prevPageBtn": () => (/* binding */ prevPageBtn),
/* harmony export */   "progressValue": () => (/* binding */ progressValue),
/* harmony export */   "questionComparisonList": () => (/* binding */ questionComparisonList),
/* harmony export */   "questionNav": () => (/* binding */ questionNav),
/* harmony export */   "questionPhrase": () => (/* binding */ questionPhrase),
/* harmony export */   "questionScreen": () => (/* binding */ questionScreen),
/* harmony export */   "quitBtn": () => (/* binding */ quitBtn),
/* harmony export */   "resultElements": () => (/* binding */ resultElements),
/* harmony export */   "resultScreen": () => (/* binding */ resultScreen),
/* harmony export */   "settingsBtn": () => (/* binding */ settingsBtn),
/* harmony export */   "settingsScreen": () => (/* binding */ settingsScreen),
/* harmony export */   "startBtn": () => (/* binding */ startBtn),
/* harmony export */   "startScreen": () => (/* binding */ startScreen),
/* harmony export */   "submitQuizBtn": () => (/* binding */ submitQuizBtn),
/* harmony export */   "timelimitActivated": () => (/* binding */ timelimitActivated),
/* harmony export */   "tipsAllowed": () => (/* binding */ tipsAllowed)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
// Screen Elements
var startScreen = document.querySelector(".startscreen");
var questionScreen = document.querySelector(".question");
var settingsScreen = document.querySelector(".settings");
var highscores = document.querySelector(".highscores");
var resultScreen = document.querySelector(".results");
var pages = [startScreen, questionScreen, settingsScreen, highscores, resultScreen];

// Button ELements
var startBtn = document.getElementById("start-btn");
var quitBtn = document.getElementById("quit-btn");
var settingsBtn = document.getElementById("settings-btn");
var backBtns = _toConsumableArray(document.querySelectorAll(".back-btn"));
var highscoresBtn = document.getElementById("highscores-btn");

// Setting Elements
var amountOfQuestions = document.getElementById("amount-of-questions");
var possibleAnswers = document.getElementById("possible-answers");
var tipsAllowed = document.getElementById("tips-allowed");
var timelimitActivated = document.getElementById("timelimit-activated");

// Submit Screen Elements
var submitQuizBtn = document.getElementById("submit-quiz-btn");
var questionComparisonList = document.getElementById("question-comparison-list");
var resultElements = _toConsumableArray(document.querySelectorAll(".results__infopiece"));

// Question Elements
var prevPageBtn = document.getElementById("prev-page");
var nextPageBtn = document.getElementById("next-page");
var questionPhrase = document.getElementById("question");
var answerList = document.getElementById("answer-list");
var questionNav = document.getElementById("question-nav");

// Circle Graph Elements
var graphProgress = document.getElementById("graph-progress");
var progressValue = document.getElementById("progress-value");

/***/ }),

/***/ "./src/javascript/eventListeners.js":
/*!******************************************!*\
  !*** ./src/javascript/eventListeners.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initEvents": () => (/* binding */ initEvents)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/javascript/constants.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./src/javascript/globals.js");
/* harmony import */ var _submitQuiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submitQuiz */ "./src/javascript/submitQuiz.js");
/* harmony import */ var _screenNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screenNav */ "./src/javascript/screenNav.js");
/* harmony import */ var _renderQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderQuestion */ "./src/javascript/renderQuestion.js");





var initEvents = function initEvents() {
  // Button Actions
  _constants__WEBPACK_IMPORTED_MODULE_0__.backBtns.map(function (btn) {
    btn.addEventListener("click", function () {
      (0,_screenNav__WEBPACK_IMPORTED_MODULE_3__.changeScreen)(_constants__WEBPACK_IMPORTED_MODULE_0__.startScreen);
    });
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.settingsBtn.addEventListener("click", function () {
    (0,_screenNav__WEBPACK_IMPORTED_MODULE_3__.changeScreen)(_constants__WEBPACK_IMPORTED_MODULE_0__.settingsScreen);
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.highscoresBtn.addEventListener("click", function () {
    (0,_screenNav__WEBPACK_IMPORTED_MODULE_3__.changeScreen)(_constants__WEBPACK_IMPORTED_MODULE_0__.highscores);
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.quitBtn.addEventListener("click", function () {
    window.close();
  });

  // Quiz submit logic
  _constants__WEBPACK_IMPORTED_MODULE_0__.submitQuizBtn.addEventListener("click", function () {
    (0,_submitQuiz__WEBPACK_IMPORTED_MODULE_2__.submitQuiz)(_globals__WEBPACK_IMPORTED_MODULE_1__.getAnswerStorage(), _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizData());
    (0,_screenNav__WEBPACK_IMPORTED_MODULE_3__.changeScreen)(_constants__WEBPACK_IMPORTED_MODULE_0__.resultScreen);
  });

  // Question pagination logic
  _constants__WEBPACK_IMPORTED_MODULE_0__.nextPageBtn.addEventListener("click", function () {
    if (_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex() > _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizSettings().amountOfQuestions - 1) _globals__WEBPACK_IMPORTED_MODULE_1__.setQuestionIndex(0);
    _globals__WEBPACK_IMPORTED_MODULE_1__.setQuestionIndex(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex() + 1);
    (0,_renderQuestion__WEBPACK_IMPORTED_MODULE_4__.displayQuestion)(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuizData());
    (0,_renderQuestion__WEBPACK_IMPORTED_MODULE_4__.highlightSelectedAnswer)(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex());
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.prevPageBtn.addEventListener("click", function () {
    if (_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex() <= 1) _globals__WEBPACK_IMPORTED_MODULE_1__.setQuestionIndex(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuizSettings().amountOfQuestions + 1);
    _globals__WEBPACK_IMPORTED_MODULE_1__.setQuestionIndex(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex() - 1);
    (0,_renderQuestion__WEBPACK_IMPORTED_MODULE_4__.displayQuestion)(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuizData());
    (0,_renderQuestion__WEBPACK_IMPORTED_MODULE_4__.highlightSelectedAnswer)(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex());
  });
};

/***/ }),

/***/ "./src/javascript/fetchQuiz.js":
/*!*************************************!*\
  !*** ./src/javascript/fetchQuiz.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchQuiz": () => (/* binding */ fetchQuiz)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/javascript/globals.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


// Fetching data
var fetchQuiz = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var url, params, res, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = new URL("https://quizapi.io/api/v1/questions");
            params = {
              apiKey: "Yk930yLz3W65YXkbfkG5Cu1E3Aduuk2LqfAsO1k1",
              limit: _globals__WEBPACK_IMPORTED_MODULE_0__.getQuizSettings().amountOfQuestions,
              difficulty: _globals__WEBPACK_IMPORTED_MODULE_0__.getQuizSettings().difficulty
            };
            url.search = new URLSearchParams(params).toString();
            _context.next = 5;
            return fetch(url);
          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();
          case 8:
            data = _context.sent;
            return _context.abrupt("return", data);
          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function fetchQuiz() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/javascript/globals.js":
/*!***********************************!*\
  !*** ./src/javascript/globals.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAnswerStorage": () => (/* binding */ getAnswerStorage),
/* harmony export */   "getQuestionIndex": () => (/* binding */ getQuestionIndex),
/* harmony export */   "getQuizData": () => (/* binding */ getQuizData),
/* harmony export */   "getQuizScore": () => (/* binding */ getQuizScore),
/* harmony export */   "getQuizSettings": () => (/* binding */ getQuizSettings),
/* harmony export */   "initSessionStorage": () => (/* binding */ initSessionStorage),
/* harmony export */   "setAnswerStorage": () => (/* binding */ setAnswerStorage),
/* harmony export */   "setQuestionIndex": () => (/* binding */ setQuestionIndex),
/* harmony export */   "setQuizData": () => (/* binding */ setQuizData),
/* harmony export */   "setQuizScore": () => (/* binding */ setQuizScore),
/* harmony export */   "setQuizSettings": () => (/* binding */ setQuizSettings)
/* harmony export */ });
var initSessionStorage = function initSessionStorage() {
  if (!sessionStorage.getItem("quizData")) {
    sessionStorage.setItem("quizData", []);
  }
  if (!sessionStorage.getItem("answerStorage")) {
    sessionStorage.setItem("answerStorage", []);
  }
  if (!sessionStorage.getItem("quizSettings")) {
    sessionStorage.setItem("quizSettings", {});
  }
  sessionStorage.setItem("quizScore", 0);
  sessionStorage.setItem("questionIndex", 0);
};

// QuizData get & set
var setQuizData = function setQuizData(data) {
  sessionStorage.setItem("quizData", JSON.stringify(data));
};
var getQuizData = function getQuizData() {
  return JSON.parse(sessionStorage.getItem("quizData"));
};

// AnswerStorage get & set
var setAnswerStorage = function setAnswerStorage(data) {
  sessionStorage.setItem("answerStorage", JSON.stringify(data));
};
var getAnswerStorage = function getAnswerStorage() {
  return JSON.parse(sessionStorage.getItem("answerStorage"));
};

// QuizSettings get & set
var setQuizSettings = function setQuizSettings(data) {
  sessionStorage.setItem("quizSettings", JSON.stringify(data));
};
var getQuizSettings = function getQuizSettings() {
  return JSON.parse(sessionStorage.getItem("quizSettings"));
};

// QuizScore get & set
var setQuizScore = function setQuizScore(score) {
  sessionStorage.setItem("quizScore", score);
};
var getQuizScore = function getQuizScore() {
  return Number(sessionStorage.getItem("quizScore"));
};

// QuestionIndex get & set
var setQuestionIndex = function setQuestionIndex(index) {
  sessionStorage.setItem("questionIndex", index);
};
var getQuestionIndex = function getQuestionIndex() {
  return Number(sessionStorage.getItem("questionIndex"));
};

/***/ }),

/***/ "./src/javascript/helperFunctions.js":
/*!*******************************************!*\
  !*** ./src/javascript/helperFunctions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareAnswer": () => (/* binding */ compareAnswer),
/* harmony export */   "findCorrectAnswerIndex": () => (/* binding */ findCorrectAnswerIndex),
/* harmony export */   "trimString": () => (/* binding */ trimString)
/* harmony export */ });
// Compares the indexes of the given answer and the correct answer
var compareAnswer = function compareAnswer(answerEntry) {
  if (answerEntry.selectedAnswer !== -1 && answerEntry.correctAnswer !== -1 && answerEntry.selectedAnswer === answerEntry.correctAnswer) {
    return true;
  }
};

// Limit a string to 60 chars
var trimString = function trimString(text) {
  return text.length > 60 ? "".concat(text.substring(0, 60), "...") : text;
};

// Finds the correct answer by index in the correct-answers object
var findCorrectAnswerIndex = function findCorrectAnswerIndex(answers) {
  var correctIndex;
  answers.map(function (answer, index) {
    if (answer == "true") correctIndex = index;
  });
  return correctIndex;
};

/***/ }),

/***/ "./src/javascript/renderQuestion.js":
/*!******************************************!*\
  !*** ./src/javascript/renderQuestion.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayQuestion": () => (/* binding */ displayQuestion),
/* harmony export */   "highlightSelectedAnswer": () => (/* binding */ highlightSelectedAnswer),
/* harmony export */   "renderQuestionNavigation": () => (/* binding */ renderQuestionNavigation),
/* harmony export */   "updateAnswerStorage": () => (/* binding */ updateAnswerStorage)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/javascript/constants.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./src/javascript/globals.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helperFunctions */ "./src/javascript/helperFunctions.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




// Display current question
var highlightSelectedAnswer = function highlightSelectedAnswer(questionIndex) {
  var selectedIndex = _globals__WEBPACK_IMPORTED_MODULE_1__.getAnswerStorage()[questionIndex - 1].selectedAnswer;
  if (selectedIndex == undefined) return;
  _toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_0__.answerList.children).map(function (el, index) {
    if (selectedIndex === index) {
      el.classList.add("question__answer--selected");
    } else {
      el.classList.remove("question__answer--selected");
    }
  });
};
var renderQuestionNavigation = function renderQuestionNavigation(questions) {
  _constants__WEBPACK_IMPORTED_MODULE_0__.questionNav.innerHTML = "";
  questions.map(function (question, index) {
    var questionNumberEl = document.createElement("li");
    if (index === _globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex() - 1) questionNumberEl.classList.add("question__number--selected");
    questionNumberEl.classList.add("question__number");
    questionNumberEl.addEventListener("click", function (e) {
      _globals__WEBPACK_IMPORTED_MODULE_1__.setQuestionIndex(Number(e.target.innerText) > 9 ? Number(e.target.innerText) : Number(e.target.innerText.slice(1)));
      displayQuestion(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuizData());
      highlightSelectedAnswer(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex());
    });
    questionNumberEl.innerText = index >= 9 ? index + 1 : "0".concat(index + 1);
    _constants__WEBPACK_IMPORTED_MODULE_0__.questionNav.appendChild(questionNumberEl);
  });
};
var updateAnswerStorage = function updateAnswerStorage(questionIndex, selectedAnswer, correctAnswer) {
  var answerStorageCurrent = _globals__WEBPACK_IMPORTED_MODULE_1__.getAnswerStorage();
  answerStorageCurrent[questionIndex - 1] = {
    selectedAnswer: selectedAnswer,
    correctAnswer: correctAnswer
  };
  _globals__WEBPACK_IMPORTED_MODULE_1__.setAnswerStorage(answerStorageCurrent);
};
var displayQuestion = function displayQuestion(data) {
  renderQuestionNavigation(data);
  var currentQuestion = data[_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex() - 1];
  var currentQuestionAnswers = Object.values(currentQuestion.answers);
  var correctAnswer = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.findCorrectAnswerIndex)(Object.values(currentQuestion.correct_answers));
  _constants__WEBPACK_IMPORTED_MODULE_0__.questionPhrase.innerText = currentQuestion.question;
  _constants__WEBPACK_IMPORTED_MODULE_0__.answerList.innerHTML = "";
  currentQuestionAnswers.map(function (answer, index) {
    if (answer !== null) {
      var answerEl = document.createElement("li");
      answerEl.classList.add("question__answer");
      answerEl.innerHTML = "<p>".concat(answer.replace("<", "&lt;"), "</p>");
      _constants__WEBPACK_IMPORTED_MODULE_0__.answerList.appendChild(answerEl);
      answerEl.addEventListener("click", function () {
        updateAnswerStorage(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex(), index, correctAnswer);
        highlightSelectedAnswer(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex());
      });
    }
  });
};

/***/ }),

/***/ "./src/javascript/screenNav.js":
/*!*************************************!*\
  !*** ./src/javascript/screenNav.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeScreen": () => (/* binding */ changeScreen)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/javascript/constants.js");


// Screen navigation logic
var changeScreen = function changeScreen(destinationScreen) {
  destinationScreen.classList.remove("container--inactive");
  _constants__WEBPACK_IMPORTED_MODULE_0__.pages.map(function (page) {
    if (page !== destinationScreen) {
      page.classList.add("container--inactive");
    }
  });
};

/***/ }),

/***/ "./src/javascript/settings.js":
/*!************************************!*\
  !*** ./src/javascript/settings.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quizSettings": () => (/* binding */ quizSettings)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/javascript/constants.js");


// Quiz settings object
var quizSettings = {
  amountOfQuestions: Number(_constants__WEBPACK_IMPORTED_MODULE_0__.amountOfQuestions.innerText),
  possibleAnswers: Number(_constants__WEBPACK_IMPORTED_MODULE_0__.possibleAnswers.innerText),
  tipsOn: _constants__WEBPACK_IMPORTED_MODULE_0__.tipsAllowed.innerText === "Off" ? false : true,
  timelimitOn: _constants__WEBPACK_IMPORTED_MODULE_0__.timelimitActivated.innerText === "Off" ? false : true,
  difficulty: "Easy"
};

/***/ }),

/***/ "./src/javascript/submitQuiz.js":
/*!**************************************!*\
  !*** ./src/javascript/submitQuiz.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitQuiz": () => (/* binding */ submitQuiz)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/javascript/constants.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./src/javascript/globals.js");
/* harmony import */ var _circleGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./circleGraph */ "./src/javascript/circleGraph.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helperFunctions */ "./src/javascript/helperFunctions.js");




var submitQuiz = function submitQuiz(answers, questions) {
  _constants__WEBPACK_IMPORTED_MODULE_0__.questionComparisonList.innerHTML = "";
  _globals__WEBPACK_IMPORTED_MODULE_1__.setQuizScore(0);
  answers.map(function (answer) {
    if ((0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.compareAnswer)(answer)) {
      _globals__WEBPACK_IMPORTED_MODULE_1__.setQuizScore(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuizScore() + 1);
    }
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.resultElements.map(function (el) {
    var resultType = el.childNodes[1].innerText.slice(0, -1).toLowerCase();
    var resultValue = el.childNodes[3];
    if (resultType === "score") resultValue.innerText = "".concat(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuizScore() / _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizSettings().amountOfQuestions * 100, "%");
    if (resultType === "total questions") resultValue.innerText = _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizSettings().amountOfQuestions;
    if (resultType === "answered correct") resultValue.innerText = _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizScore();
    if (resultType === "topic") resultValue.innerText = "Random";
    if (resultType === "difficulty") resultValue.innerText = _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizSettings().difficulty;
    if (resultType === "final") resultValue.innerText = _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizScore() / _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizSettings().amountOfQuestions * 100 >= 50 ? "Pass" : "Fail";
  });
  (0,_circleGraph__WEBPACK_IMPORTED_MODULE_2__.initCircleGraph)(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuizScore() / _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizSettings().amountOfQuestions * 100);
  questions.map(function (question, index) {
    var answerCorrect = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.compareAnswer)(answers[index]);
    var questionComparisonEl = document.createElement("div");
    var answerArray = Object.values(question.answers);
    var correctAnswer = answerArray[(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.findCorrectAnswerIndex)(Object.values(question.correct_answers))];
    var givenAnswer = answerArray[answers[index].selectedAnswer];
    if (givenAnswer == undefined) givenAnswer = "No answer selected";
    questionComparisonEl.classList.add("results__question");
    if (!answerCorrect) questionComparisonEl.classList.add("results__question--wrong");
    questionComparisonEl.innerHTML = "\n            <div class=\"results__question-info\">\n                <p>".concat((0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.trimString)(question.question), "</p>\n                <div class=\"results__question-icon\">\n                    <img src=\"./src/images/icons/").concat(answerCorrect ? "check" : "wrong", ".svg\" alt=\"checkmark\" />\n                </div>\n            </div> \n            <div class=\"results__answer-info\">\n                <div class=\"results__wrong-answer\">\n                    <p>Your answer</p>\n                    <p class=\"red\">").concat(givenAnswer.replace("<", "&lt;"), "</p>\n                </div>\n                <div class=\"results__correct-answer\">\n                    <p>Correct answer</p>\n                    <p class=\"green\">").concat(correctAnswer.replace("<", "&lt;"), "</p>\n                </div>\n            </div>\n        ");
    _constants__WEBPACK_IMPORTED_MODULE_0__.questionComparisonList.appendChild(questionComparisonEl);
  });
};

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/javascript/constants.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals */ "./src/javascript/globals.js");
/* harmony import */ var _renderQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderQuestion */ "./src/javascript/renderQuestion.js");
/* harmony import */ var _screenNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screenNav */ "./src/javascript/screenNav.js");
/* harmony import */ var _fetchQuiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetchQuiz */ "./src/javascript/fetchQuiz.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings */ "./src/javascript/settings.js");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eventListeners */ "./src/javascript/eventListeners.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// ------------------------------------------- //
// sass entry point


// module imports







// ------------------------------------------- //

window.onload = function () {
  _globals__WEBPACK_IMPORTED_MODULE_2__.initSessionStorage();
  (0,_eventListeners__WEBPACK_IMPORTED_MODULE_7__.initEvents)();
};
_constants__WEBPACK_IMPORTED_MODULE_1__.startBtn.addEventListener("click", function () {
  (0,_screenNav__WEBPACK_IMPORTED_MODULE_4__.changeScreen)(_constants__WEBPACK_IMPORTED_MODULE_1__.questionScreen);
  startNewQuiz();
});

// Quiz answer storage
var createAnswerStorage = function createAnswerStorage(data) {
  var answerStorageBase = data.map(function (answer, index) {
    return {
      selectedAnswer: -1,
      correctAnswer: -1
    };
  });
  _globals__WEBPACK_IMPORTED_MODULE_2__.setAnswerStorage(answerStorageBase);
};

// Quiz init
var startNewQuiz = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _globals__WEBPACK_IMPORTED_MODULE_2__.setQuizSettings(_settings__WEBPACK_IMPORTED_MODULE_6__.quizSettings);
            _context.t0 = _globals__WEBPACK_IMPORTED_MODULE_2__;
            _context.next = 4;
            return (0,_fetchQuiz__WEBPACK_IMPORTED_MODULE_5__.fetchQuiz)();
          case 4:
            _context.t1 = _context.sent;
            _context.t0.setQuizData.call(_context.t0, _context.t1);
            createAnswerStorage(_globals__WEBPACK_IMPORTED_MODULE_2__.getQuizData());
            _globals__WEBPACK_IMPORTED_MODULE_2__.setQuestionIndex(1);
            (0,_renderQuestion__WEBPACK_IMPORTED_MODULE_3__.displayQuestion)(_globals__WEBPACK_IMPORTED_MODULE_2__.getQuizData());
          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function startNewQuiz() {
    return _ref.apply(this, arguments);
  };
}();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map