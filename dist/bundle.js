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
// ------------------------------------------- //
// module imports

// ------------------------------------------- //

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
/* harmony export */   "applySettingsBtn": () => (/* binding */ applySettingsBtn),
/* harmony export */   "backBtns": () => (/* binding */ backBtns),
/* harmony export */   "closeHighscoreModal": () => (/* binding */ closeHighscoreModal),
/* harmony export */   "closeSubmitModal": () => (/* binding */ closeSubmitModal),
/* harmony export */   "difficultyBtns": () => (/* binding */ difficultyBtns),
/* harmony export */   "graphProgress": () => (/* binding */ graphProgress),
/* harmony export */   "highscoreModal": () => (/* binding */ highscoreModal),
/* harmony export */   "highscoreUsername": () => (/* binding */ highscoreUsername),
/* harmony export */   "highscoresBtn": () => (/* binding */ highscoresBtn),
/* harmony export */   "highscoresList": () => (/* binding */ highscoresList),
/* harmony export */   "highscoresScreen": () => (/* binding */ highscoresScreen),
/* harmony export */   "hintBtn": () => (/* binding */ hintBtn),
/* harmony export */   "nextPageBtn": () => (/* binding */ nextPageBtn),
/* harmony export */   "openHighscoreModal": () => (/* binding */ openHighscoreModal),
/* harmony export */   "openSubmitModal": () => (/* binding */ openSubmitModal),
/* harmony export */   "pages": () => (/* binding */ pages),
/* harmony export */   "possibleAnswers": () => (/* binding */ possibleAnswers),
/* harmony export */   "prevPageBtn": () => (/* binding */ prevPageBtn),
/* harmony export */   "progressValue": () => (/* binding */ progressValue),
/* harmony export */   "questionComparisonList": () => (/* binding */ questionComparisonList),
/* harmony export */   "questionNav": () => (/* binding */ questionNav),
/* harmony export */   "questionPhrase": () => (/* binding */ questionPhrase),
/* harmony export */   "questionScreen": () => (/* binding */ questionScreen),
/* harmony export */   "quitBtn": () => (/* binding */ quitBtn),
/* harmony export */   "quizPointsScore": () => (/* binding */ quizPointsScore),
/* harmony export */   "resetSettingsBtn": () => (/* binding */ resetSettingsBtn),
/* harmony export */   "resultElements": () => (/* binding */ resultElements),
/* harmony export */   "resultScreen": () => (/* binding */ resultScreen),
/* harmony export */   "saveQuizScoreBtn": () => (/* binding */ saveQuizScoreBtn),
/* harmony export */   "selectedTags": () => (/* binding */ selectedTags),
/* harmony export */   "settingsBtn": () => (/* binding */ settingsBtn),
/* harmony export */   "settingsError": () => (/* binding */ settingsError),
/* harmony export */   "settingsScreen": () => (/* binding */ settingsScreen),
/* harmony export */   "startBtn": () => (/* binding */ startBtn),
/* harmony export */   "startScreen": () => (/* binding */ startScreen),
/* harmony export */   "submitModal": () => (/* binding */ submitModal),
/* harmony export */   "submitQuizBtn": () => (/* binding */ submitQuizBtn),
/* harmony export */   "tagResults": () => (/* binding */ tagResults),
/* harmony export */   "tagSearchbar": () => (/* binding */ tagSearchbar),
/* harmony export */   "tags": () => (/* binding */ tags),
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
var highscoresScreen = document.querySelector(".highscores");
var resultScreen = document.querySelector(".results");
var pages = [startScreen, questionScreen, settingsScreen, highscoresScreen, resultScreen];

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
var difficultyBtns = _toConsumableArray(document.querySelectorAll(".settings__difficuly-btn"));
var tagSearchbar = document.getElementById("tag-searchbar");
var tagResults = document.getElementById("tag-results");
var selectedTags = document.getElementById("selected-tags");
var tags = ["Javascript", "PHP", "Bash", "HTML", "Linux", "Docker", "MySQL", "WordPress", "Laravel", "Kubernetes", "DevOps"];
var applySettingsBtn = document.getElementById("apply-settings");
var resetSettingsBtn = document.getElementById("reset-settings");
var settingsError = document.getElementById("settings-error");

// Highscore Elements
var highscoresList = document.getElementById("highscores-list");

// Submit Screen Elements
var submitQuizBtn = document.getElementById("submit-quiz-btn");
var questionComparisonList = document.getElementById("question-comparison-list");
var resultElements = _toConsumableArray(document.querySelectorAll(".results__infopiece"));
var quizPointsScore = document.getElementById("points-score");
var saveQuizScoreBtn = document.getElementById("save-score");
var highscoreUsername = document.getElementById("highscore-user");

// Question Elements
var prevPageBtn = document.getElementById("prev-page");
var nextPageBtn = document.getElementById("next-page");
var hintBtn = document.getElementById("hint-btn");
var questionPhrase = document.getElementById("question");
var answerList = document.getElementById("answer-list");
var questionNav = document.getElementById("question-nav");

// Circle Graph Elements
var graphProgress = document.getElementById("graph-progress");
var progressValue = document.getElementById("progress-value");

// Modals
var submitModal = document.getElementById("submit-modal");
var openSubmitModal = document.getElementById("open-submit-modal");
var closeSubmitModal = document.getElementById("close-submit-modal");
var highscoreModal = document.getElementById("highscore-modal");
var openHighscoreModal = document.getElementById("open-highscore-modal");
var closeHighscoreModal = document.getElementById("close-highscore-modal");

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
/* harmony import */ var _highscores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highscores */ "./src/javascript/highscores.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings */ "./src/javascript/settings.js");
/* harmony import */ var _renderQuestion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderQuestion */ "./src/javascript/renderQuestion.js");
// ------------------------------------------- //
// module imports







// ------------------------------------------- //

var initEvents = function initEvents() {
  // Button actions
  _constants__WEBPACK_IMPORTED_MODULE_0__.backBtns.map(function (btn) {
    btn.addEventListener("click", function () {
      (0,_screenNav__WEBPACK_IMPORTED_MODULE_3__.changeScreen)(_constants__WEBPACK_IMPORTED_MODULE_0__.startScreen);
    });
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.settingsBtn.addEventListener("click", function () {
    (0,_screenNav__WEBPACK_IMPORTED_MODULE_3__.changeScreen)(_constants__WEBPACK_IMPORTED_MODULE_0__.settingsScreen);
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.highscoresBtn.addEventListener("click", function () {
    (0,_screenNav__WEBPACK_IMPORTED_MODULE_3__.changeScreen)(_constants__WEBPACK_IMPORTED_MODULE_0__.highscoresScreen);
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.quitBtn.addEventListener("click", function () {
    window.close();
  });

  // Quiz settings counter buttons
  _constants__WEBPACK_IMPORTED_MODULE_0__.amountOfQuestions.addEventListener("click", function (e) {
    (0,_settings__WEBPACK_IMPORTED_MODULE_5__.updateCounter)(e, _settings__WEBPACK_IMPORTED_MODULE_5__.maxAmountOfQuestions);
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.possibleAnswers.addEventListener("click", function (e) {
    (0,_settings__WEBPACK_IMPORTED_MODULE_5__.updateCounter)(e, _settings__WEBPACK_IMPORTED_MODULE_5__.maxPossibleAnswers);
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.tipsAllowed.addEventListener("click", function (e) {
    (0,_settings__WEBPACK_IMPORTED_MODULE_5__.updateToggle)(e);
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.timelimitActivated.addEventListener("click", function (e) {
    (0,_settings__WEBPACK_IMPORTED_MODULE_5__.updateToggle)(e);
  });

  // Quiz settings difficulty buttons
  _constants__WEBPACK_IMPORTED_MODULE_0__.difficultyBtns.map(function (btn) {
    btn.addEventListener("click", function (e) {
      (0,_settings__WEBPACK_IMPORTED_MODULE_5__.updateDifficulty)(e);
    });
  });

  // Quiz settings tag search change events
  _constants__WEBPACK_IMPORTED_MODULE_0__.tagSearchbar.addEventListener("focus", function () {
    if ((0,_settings__WEBPACK_IMPORTED_MODULE_5__.updateTagResults)()) {
      _constants__WEBPACK_IMPORTED_MODULE_0__.tagResults.style.display = "flex";
    }
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.tagSearchbar.addEventListener("input", function () {
    _constants__WEBPACK_IMPORTED_MODULE_0__.tagResults.style.display = (0,_settings__WEBPACK_IMPORTED_MODULE_5__.updateTagResults)() ? "flex" : "none";
  });

  // Quiz settings control buttons
  _constants__WEBPACK_IMPORTED_MODULE_0__.applySettingsBtn.addEventListener("click", function () {
    (0,_settings__WEBPACK_IMPORTED_MODULE_5__.updateSelectedTags)();
    _globals__WEBPACK_IMPORTED_MODULE_1__.setQuizSettings((0,_settings__WEBPACK_IMPORTED_MODULE_5__.generateQuizSettings)());
    (0,_settings__WEBPACK_IMPORTED_MODULE_5__.testQuizSettings)();
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.resetSettingsBtn.addEventListener("click", function () {
    (0,_settings__WEBPACK_IMPORTED_MODULE_5__.resetQuizSettings)();
  });

  // Quiz submit logic
  _constants__WEBPACK_IMPORTED_MODULE_0__.submitQuizBtn.addEventListener("click", function () {
    (0,_submitQuiz__WEBPACK_IMPORTED_MODULE_2__.submitQuiz)(_globals__WEBPACK_IMPORTED_MODULE_1__.getAnswerStorage(), _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizData());
    _constants__WEBPACK_IMPORTED_MODULE_0__.submitModal.classList.add("modal--hidden");
    (0,_screenNav__WEBPACK_IMPORTED_MODULE_3__.changeScreen)(_constants__WEBPACK_IMPORTED_MODULE_0__.resultScreen);
  });

  // Save Quiz score logic
  _constants__WEBPACK_IMPORTED_MODULE_0__.saveQuizScoreBtn.addEventListener("click", function () {
    (0,_highscores__WEBPACK_IMPORTED_MODULE_4__.saveHighscore)();
    _constants__WEBPACK_IMPORTED_MODULE_0__.highscoreModal.classList.add("modal--hidden");
    (0,_screenNav__WEBPACK_IMPORTED_MODULE_3__.changeScreen)(_constants__WEBPACK_IMPORTED_MODULE_0__.highscoresScreen);
  });

  // Question pagination logic
  _constants__WEBPACK_IMPORTED_MODULE_0__.nextPageBtn.addEventListener("click", function () {
    if (_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex() > _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizSettings().amountOfQuestions - 1) _globals__WEBPACK_IMPORTED_MODULE_1__.setQuestionIndex(0);
    _globals__WEBPACK_IMPORTED_MODULE_1__.setQuestionIndex(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex() + 1);
    (0,_renderQuestion__WEBPACK_IMPORTED_MODULE_6__.displayQuestion)(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuizData());
    (0,_renderQuestion__WEBPACK_IMPORTED_MODULE_6__.highlightSelectedAnswer)(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex());
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.prevPageBtn.addEventListener("click", function () {
    if (_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex() <= 1) _globals__WEBPACK_IMPORTED_MODULE_1__.setQuestionIndex(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuizSettings().amountOfQuestions + 1);
    _globals__WEBPACK_IMPORTED_MODULE_1__.setQuestionIndex(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex() - 1);
    (0,_renderQuestion__WEBPACK_IMPORTED_MODULE_6__.displayQuestion)(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuizData());
    (0,_renderQuestion__WEBPACK_IMPORTED_MODULE_6__.highlightSelectedAnswer)(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex());
  });

  // Modal events
  _constants__WEBPACK_IMPORTED_MODULE_0__.openSubmitModal.addEventListener("click", function () {
    _constants__WEBPACK_IMPORTED_MODULE_0__.submitModal.classList.remove("modal--hidden");
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.closeSubmitModal.addEventListener("click", function () {
    _constants__WEBPACK_IMPORTED_MODULE_0__.submitModal.classList.add("modal--hidden");
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.openHighscoreModal.addEventListener("click", function () {
    _constants__WEBPACK_IMPORTED_MODULE_0__.highscoreModal.classList.remove("modal--hidden");
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.closeHighscoreModal.addEventListener("click", function () {
    _constants__WEBPACK_IMPORTED_MODULE_0__.highscoreModal.classList.add("modal--hidden");
  });

  // Quiz hint button logic
  _constants__WEBPACK_IMPORTED_MODULE_0__.hintBtn.addEventListener("click", function () {
    (0,_renderQuestion__WEBPACK_IMPORTED_MODULE_6__.useHint)();
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
// ------------------------------------------- //
// module imports

// ------------------------------------------- //

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
              difficulty: _globals__WEBPACK_IMPORTED_MODULE_0__.getQuizSettings().difficulty,
              tags: _globals__WEBPACK_IMPORTED_MODULE_0__.getQuizSettings().tags
            };
            url.search = new URLSearchParams(params).toString();
            _context.prev = 3;
            _context.next = 6;
            return fetch(url);
          case 6:
            res = _context.sent;
            if (!(res.status >= 200 && res.status <= 299)) {
              _context.next = 14;
              break;
            }
            _context.next = 10;
            return res.json();
          case 10:
            data = _context.sent;
            return _context.abrupt("return", data);
          case 14:
            throw Error("Data fetching error");
          case 15:
            _context.next = 20;
            break;
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", undefined);
          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 17]]);
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
/* harmony export */   "createAnswerStorage": () => (/* binding */ createAnswerStorage),
/* harmony export */   "getAnswerStorage": () => (/* binding */ getAnswerStorage),
/* harmony export */   "getHighscores": () => (/* binding */ getHighscores),
/* harmony export */   "getQuestionIndex": () => (/* binding */ getQuestionIndex),
/* harmony export */   "getQuizData": () => (/* binding */ getQuizData),
/* harmony export */   "getQuizScore": () => (/* binding */ getQuizScore),
/* harmony export */   "getQuizSettings": () => (/* binding */ getQuizSettings),
/* harmony export */   "initLocalStorage": () => (/* binding */ initLocalStorage),
/* harmony export */   "initSessionStorage": () => (/* binding */ initSessionStorage),
/* harmony export */   "setAnswerStorage": () => (/* binding */ setAnswerStorage),
/* harmony export */   "setHighscores": () => (/* binding */ setHighscores),
/* harmony export */   "setQuestionIndex": () => (/* binding */ setQuestionIndex),
/* harmony export */   "setQuizData": () => (/* binding */ setQuizData),
/* harmony export */   "setQuizScore": () => (/* binding */ setQuizScore),
/* harmony export */   "setQuizSettings": () => (/* binding */ setQuizSettings),
/* harmony export */   "updateAnswerStorage": () => (/* binding */ updateAnswerStorage)
/* harmony export */ });
/* harmony import */ var _highscores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highscores */ "./src/javascript/highscores.js");
// ------------------------------------------- //
// module imports

// ------------------------------------------- //

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
var initLocalStorage = function initLocalStorage() {
  if (!localStorage.getItem("highscores")) {
    localStorage.setItem("highscores", JSON.stringify(_highscores__WEBPACK_IMPORTED_MODULE_0__.highscores));
  }
};

// QuizData get & set
var setQuizData = function setQuizData(data) {
  sessionStorage.setItem("quizData", JSON.stringify(data));
};
var getQuizData = function getQuizData() {
  return JSON.parse(sessionStorage.getItem("quizData"));
};

// AnswerStorage get & set
var createAnswerStorage = function createAnswerStorage(data) {
  var answerStorageBase = data.map(function (answer, index) {
    return {
      selectedAnswer: -1,
      correctAnswer: -1
    };
  });
  setAnswerStorage(answerStorageBase);
};
var updateAnswerStorage = function updateAnswerStorage(questionIndex, selectedAnswer, correctAnswer) {
  var answerStorageCurrent = getAnswerStorage();
  answerStorageCurrent[questionIndex - 1] = {
    selectedAnswer: selectedAnswer,
    correctAnswer: correctAnswer
  };
  setAnswerStorage(answerStorageCurrent);
};
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

// Highscores get & set
var setHighscores = function setHighscores(data) {
  localStorage.setItem("highscores", JSON.stringify(data));
};
var getHighscores = function getHighscores() {
  return JSON.parse(localStorage.getItem("highscores"));
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
/* harmony export */   "randomInteger": () => (/* binding */ randomInteger),
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

// Generate random number
var randomInteger = function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/***/ }),

/***/ "./src/javascript/highscores.js":
/*!**************************************!*\
  !*** ./src/javascript/highscores.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculatePointsScore": () => (/* binding */ calculatePointsScore),
/* harmony export */   "highscores": () => (/* binding */ highscores),
/* harmony export */   "renderHighscores": () => (/* binding */ renderHighscores),
/* harmony export */   "saveHighscore": () => (/* binding */ saveHighscore)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/javascript/globals.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/javascript/constants.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helperFunctions */ "./src/javascript/helperFunctions.js");
// ------------------------------------------- //
// module imports



// ------------------------------------------- //

var easyMultiplier = 0.85;
var mediumMultiplier = 1;
var hardMultiplier = 1.25;
var highscores = [{
  user: "Bram Mortier",
  score: 22489
}, {
  user: "Manu Van Leirberghe",
  score: 18754
}, {
  user: "Fien Haelvoet",
  score: 15689
}];
var saveHighscore = function saveHighscore() {
  var user = _constants__WEBPACK_IMPORTED_MODULE_1__.highscoreUsername.value;
  var score = _constants__WEBPACK_IMPORTED_MODULE_1__.quizPointsScore.innerText;
  var highscoreEntry = {
    user: user,
    score: score
  };
  highscores = _globals__WEBPACK_IMPORTED_MODULE_0__.getHighscores();
  highscores.push(highscoreEntry);
  _globals__WEBPACK_IMPORTED_MODULE_0__.setHighscores(highscores);
  renderHighscores();
};
var calculatePointsScore = function calculatePointsScore(quizScore) {
  var quizDifficulty = _globals__WEBPACK_IMPORTED_MODULE_0__.getQuizSettings().difficulty;

  // multiply score by amount of question in quiz
  quizScore *= _globals__WEBPACK_IMPORTED_MODULE_0__.getQuizSettings().amountOfQuestions;

  // multiply score by topics chosen + 3
  quizScore *= _globals__WEBPACK_IMPORTED_MODULE_0__.getQuizSettings().tags.length + 3;

  // luck multiplier
  quizScore *= (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.randomInteger)(20, 25);
  quizScore += (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.randomInteger)(0, 100);

  // difficulty multiplier
  if (quizDifficulty == "Easy") quizScore *= easyMultiplier;
  if (quizDifficulty == "Medium") quizScore *= mediumMultiplier;
  if (quizDifficulty == "Hard") quizScore *= hardMultiplier;
  return Math.ceil(quizScore);
};
var renderHighscores = function renderHighscores() {
  _globals__WEBPACK_IMPORTED_MODULE_0__.setHighscores(_globals__WEBPACK_IMPORTED_MODULE_0__.getHighscores().sort(function (a, b) {
    return b.score - a.score;
  }));
  _constants__WEBPACK_IMPORTED_MODULE_1__.highscoresList.innerHTML = "";
  _globals__WEBPACK_IMPORTED_MODULE_0__.getHighscores().map(function (highscore, index) {
    var highscoreEl = document.createElement("li");
    highscoreEl.classList.add("highscores__entry");
    if (index === 0) highscoreEl.classList.add("highscores__entry--champion");
    highscoreEl.innerHTML = "\n            <div class=\"highscores__entry-user\">\n                <img src=\"./src/images/icons/".concat(index === 0 ? "crown" : "user", ".svg\" alt=\"user\" />\n                <p>").concat(highscore.user, "</p>\n            </div>\n            <div class=\"highscores__entry-points\">\n                <p class=\"score font-gimlet\">").concat(highscore.score, "</p>\n                <p class=\"score--label\">Points</p>\n            </div>\n        ");
    _constants__WEBPACK_IMPORTED_MODULE_1__.highscoresList.appendChild(highscoreEl);
  });
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
/* harmony export */   "useHint": () => (/* binding */ useHint)
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
// ------------------------------------------- //
// module imports



// ------------------------------------------- //

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
var displayQuestion = function displayQuestion(data) {
  renderQuestionNavigation(data);
  if (_globals__WEBPACK_IMPORTED_MODULE_1__.getQuizSettings().tipsOn === true) _constants__WEBPACK_IMPORTED_MODULE_0__.hintBtn.classList.add("question__hint-btn--active");
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
        _globals__WEBPACK_IMPORTED_MODULE_1__.updateAnswerStorage(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex(), index, correctAnswer);
        highlightSelectedAnswer(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex());
      });
    }
  });
};
var useHint = function useHint() {
  console.log(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuestionIndex());
  console.log(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuizData());
  // TODO: select a random wrong answer from the current quesitonIndex
  // TODO: apply a class that will gray it out and set its pointer events to none
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
// ------------------------------------------- //
// module imports

// ------------------------------------------- //

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
/* harmony export */   "addTag": () => (/* binding */ addTag),
/* harmony export */   "checkCounterValue": () => (/* binding */ checkCounterValue),
/* harmony export */   "generateQuizSettings": () => (/* binding */ generateQuizSettings),
/* harmony export */   "maxAmountOfQuestions": () => (/* binding */ maxAmountOfQuestions),
/* harmony export */   "maxPossibleAnswers": () => (/* binding */ maxPossibleAnswers),
/* harmony export */   "resetDifficulty": () => (/* binding */ resetDifficulty),
/* harmony export */   "resetQuizSettings": () => (/* binding */ resetQuizSettings),
/* harmony export */   "testQuizSettings": () => (/* binding */ testQuizSettings),
/* harmony export */   "updateCounter": () => (/* binding */ updateCounter),
/* harmony export */   "updateDifficulty": () => (/* binding */ updateDifficulty),
/* harmony export */   "updateSelectedTags": () => (/* binding */ updateSelectedTags),
/* harmony export */   "updateTagResults": () => (/* binding */ updateTagResults),
/* harmony export */   "updateToggle": () => (/* binding */ updateToggle)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/javascript/constants.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./src/javascript/globals.js");
/* harmony import */ var _fetchQuiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchQuiz */ "./src/javascript/fetchQuiz.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// ------------------------------------------- //
// module imports



// ------------------------------------------- //

var maxAmountOfQuestions = 20;
var maxPossibleAnswers = 6;
var difficulty = "Easy";
var selectedTags = "";

// Quiz settings object
var generateQuizSettings = function generateQuizSettings() {
  return {
    amountOfQuestions: Number(_constants__WEBPACK_IMPORTED_MODULE_0__.amountOfQuestions.children[1].innerText),
    possibleAnswers: Number(_constants__WEBPACK_IMPORTED_MODULE_0__.possibleAnswers.children[1].innerText),
    tipsOn: _constants__WEBPACK_IMPORTED_MODULE_0__.tipsAllowed.children[1].innerText === "off" ? false : true,
    timelimitOn: _constants__WEBPACK_IMPORTED_MODULE_0__.timelimitActivated.children[1].innerText === "off" ? false : true,
    difficulty: difficulty,
    tags: selectedTags
  };
};
var testQuizSettings = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_fetchQuiz__WEBPACK_IMPORTED_MODULE_2__.fetchQuiz)();
          case 2:
            _context.t0 = _context.sent;
            _context.t1 = undefined;
            if (!(_context.t0 == _context.t1)) {
              _context.next = 9;
              break;
            }
            resetQuizSettings();
            _constants__WEBPACK_IMPORTED_MODULE_0__.settingsError.style.display = "initial";
            _context.next = 10;
            break;
          case 9:
            _constants__WEBPACK_IMPORTED_MODULE_0__.settingsError.style.display = "none";
          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function testQuizSettings() {
    return _ref.apply(this, arguments);
  };
}();
var resetQuizSettings = function resetQuizSettings() {
  resetDifficulty();
  _constants__WEBPACK_IMPORTED_MODULE_0__.selectedTags.innerHTML = "";
  _constants__WEBPACK_IMPORTED_MODULE_0__.settingsError.style.display = "none";
  _constants__WEBPACK_IMPORTED_MODULE_0__.amountOfQuestions.children[1].innerText = 10;
  _constants__WEBPACK_IMPORTED_MODULE_0__.possibleAnswers.children[1].innerText = 4;
  _constants__WEBPACK_IMPORTED_MODULE_0__.tipsAllowed.children[1].innerText = "off";
  _constants__WEBPACK_IMPORTED_MODULE_0__.timelimitActivated.children[1].innerText = "off";
  difficulty = "Easy";
  selectedTags = "";
  _globals__WEBPACK_IMPORTED_MODULE_1__.setQuizSettings(generateQuizSettings());
};
var checkCounterValue = function checkCounterValue(currentValue, maxValue) {
  if (currentValue == maxValue) return currentValue - 1;
  if (currentValue == 1) return currentValue + 1;
  return currentValue;
};
var updateCounter = function updateCounter(event, counterMax) {
  var settingValue = event.target.parentElement.children[1];
  var settingBtn = event.target;
  if (settingBtn.getAttribute("data-action") === "higher") {
    settingValue.innerText = checkCounterValue(Number(settingValue.innerText), counterMax) + 1;
  }
  if (settingBtn.getAttribute("data-action") === "lower") {
    settingValue.innerText = checkCounterValue(Number(settingValue.innerText), counterMax) - 1;
  }
};
var updateToggle = function updateToggle(event) {
  var toggleValue = event.target.parentElement.children[1];
  if (toggleValue.innerText === "off") {
    toggleValue.innerText = "on";
  } else {
    toggleValue.innerText = "off";
  }
};
var updateDifficulty = function updateDifficulty(event) {
  var targetBtn = event.target;
  difficulty = targetBtn.innerText;
  targetBtn.classList.remove("btn--secondary");
  targetBtn.classList.add("btn--primary");
  _constants__WEBPACK_IMPORTED_MODULE_0__.difficultyBtns.map(function (btn) {
    if (btn.innerText !== targetBtn.innerText) {
      btn.classList.remove("btn--primary");
      btn.classList.add("btn--secondary");
    }
  });
};
var resetDifficulty = function resetDifficulty() {
  _constants__WEBPACK_IMPORTED_MODULE_0__.difficultyBtns.map(function (btn) {
    btn.classList.remove("btn--primary");
    btn.classList.add("btn--secondary");
    if (btn.innerText === "Easy") {
      btn.classList.remove("btn--secondary");
      btn.classList.add("btn--primary");
    }
  });
};
var updateTagResults = function updateTagResults() {
  var searchValue = _constants__WEBPACK_IMPORTED_MODULE_0__.tagSearchbar.value;
  var isResult = false;
  _constants__WEBPACK_IMPORTED_MODULE_0__.tagResults.innerHTML = "";
  _constants__WEBPACK_IMPORTED_MODULE_0__.tags.map(function (tag) {
    if (tag.toLowerCase().includes(searchValue.toLowerCase()) && searchValue !== "") {
      var tagResultEl = document.createElement("div");
      tagResultEl.classList.add("settings__tag-result");
      tagResultEl.innerHTML = "".concat(tag);
      tagResultEl.addEventListener("click", function () {
        addTag(tag);
      });
      _constants__WEBPACK_IMPORTED_MODULE_0__.tagResults.appendChild(tagResultEl);
      isResult = true;
    }
  });
  return isResult;
};
var addTag = function addTag(tag) {
  _constants__WEBPACK_IMPORTED_MODULE_0__.tagResults.style.display = "none";
  _constants__WEBPACK_IMPORTED_MODULE_0__.tagSearchbar.value = "";
  var selectedTagEl = document.createElement("div");
  selectedTagEl.classList.add("settings__selected-tag");
  selectedTagEl.innerHTML = "\n        <p>".concat(tag, "</p>\n        <img src=\"./src/images/icons/wrong.svg\" alt=\"delete\" />\n    ");
  _constants__WEBPACK_IMPORTED_MODULE_0__.selectedTags.appendChild(selectedTagEl);
  updateSelectedTags();
};
var updateSelectedTags = function updateSelectedTags() {
  var selectedTagsElArray = _toConsumableArray(document.querySelectorAll(".settings__selected-tag"));
  selectedTags = selectedTagsElArray.map(function (tag) {
    tag.children[1].addEventListener("click", function () {
      _constants__WEBPACK_IMPORTED_MODULE_0__.selectedTags.removeChild(tag);
      updateSelectedTags();
    });
    return tag.children[0].innerText;
  });
  if (selectedTags.length === 0) selectedTags = "";
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
/* harmony import */ var _highscores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highscores */ "./src/javascript/highscores.js");
// ------------------------------------------- //
// module imports





// ------------------------------------------- //

var submitQuiz = function submitQuiz(answers, questions) {
  _constants__WEBPACK_IMPORTED_MODULE_0__.questionComparisonList.innerHTML = "";
  _globals__WEBPACK_IMPORTED_MODULE_1__.setQuizScore(0);
  answers.map(function (answer) {
    if ((0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.compareAnswer)(answer)) {
      _globals__WEBPACK_IMPORTED_MODULE_1__.setQuizScore(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuizScore() + 1);
    }
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.quizPointsScore.innerText = (0,_highscores__WEBPACK_IMPORTED_MODULE_4__.calculatePointsScore)(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuizScore());
  var scoreToPercentage = Math.round(_globals__WEBPACK_IMPORTED_MODULE_1__.getQuizScore() / _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizSettings().amountOfQuestions * 100);
  _constants__WEBPACK_IMPORTED_MODULE_0__.resultElements.map(function (el) {
    var resultType = el.children[0].innerText.slice(0, -1).toLowerCase();
    var resultValue = el.children[1];
    if (resultType === "score") resultValue.innerText = "".concat(scoreToPercentage, "%");
    if (resultType === "total questions") resultValue.innerText = _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizSettings().amountOfQuestions;
    if (resultType === "answered correct") resultValue.innerText = _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizScore();
    if (resultType === "topic") resultValue.innerText = _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizSettings().tags == "" ? "Random" : _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizSettings().tags.join(" ");
    if (resultType === "difficulty") resultValue.innerText = _globals__WEBPACK_IMPORTED_MODULE_1__.getQuizSettings().difficulty;
    if (resultType === "final") resultValue.innerText = scoreToPercentage >= 50 ? "Pass" : "Fail";
  });
  (0,_circleGraph__WEBPACK_IMPORTED_MODULE_2__.initCircleGraph)(scoreToPercentage);
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
/* harmony import */ var _highscores__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./highscores */ "./src/javascript/highscores.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings */ "./src/javascript/settings.js");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./eventListeners */ "./src/javascript/eventListeners.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// ------------------------------------------- //
// sass entry point


// module imports








// ------------------------------------------- //

// Window load
window.onload = function () {
  _globals__WEBPACK_IMPORTED_MODULE_2__.initSessionStorage();
  _globals__WEBPACK_IMPORTED_MODULE_2__.initLocalStorage();
  _globals__WEBPACK_IMPORTED_MODULE_2__.setHighscores(_globals__WEBPACK_IMPORTED_MODULE_2__.getHighscores());
  _globals__WEBPACK_IMPORTED_MODULE_2__.setQuizSettings((0,_settings__WEBPACK_IMPORTED_MODULE_7__.generateQuizSettings)());
  (0,_highscores__WEBPACK_IMPORTED_MODULE_6__.renderHighscores)();
  (0,_eventListeners__WEBPACK_IMPORTED_MODULE_8__.initEvents)();
};

// Start event
_constants__WEBPACK_IMPORTED_MODULE_1__.startBtn.addEventListener("click", function () {
  startNewQuiz();
  (0,_screenNav__WEBPACK_IMPORTED_MODULE_4__.changeScreen)(_constants__WEBPACK_IMPORTED_MODULE_1__.questionScreen);
});

// Quiz start
var startNewQuiz = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _globals__WEBPACK_IMPORTED_MODULE_2__.setQuizSettings((0,_settings__WEBPACK_IMPORTED_MODULE_7__.generateQuizSettings)());
            _context.t0 = _globals__WEBPACK_IMPORTED_MODULE_2__;
            _context.next = 4;
            return (0,_fetchQuiz__WEBPACK_IMPORTED_MODULE_5__.fetchQuiz)();
          case 4:
            _context.t1 = _context.sent;
            _context.t0.setQuizData.call(_context.t0, _context.t1);
            _globals__WEBPACK_IMPORTED_MODULE_2__.createAnswerStorage(_globals__WEBPACK_IMPORTED_MODULE_2__.getQuizData());
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