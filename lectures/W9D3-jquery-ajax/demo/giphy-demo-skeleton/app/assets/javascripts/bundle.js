/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GifApiUtil = __webpack_require__(1);

// Install event listeners
var setEventListeners = function setEventListeners() {
  $('#new-gif-form').on('submit', function (e) {
    e.preventDefault();
    // Fetch a new GIF
    fetchNewGif();
  });

  $('#save-gif-form').on('submit', function (e) {
    e.preventDefault();
    // Save GIF
    saveGif();
  });

  $('#old-gif-form').on('submit', function (e) {
    e.preventDefault();
    // Fetch saved GIF
    fetchSavedGif();
  });

  $(".clear").on("click", function () {
    // Clear out GIF display
    clearGif();
  });
};

$(setEventListeners);
// setEventListeners will run after the dom is fully loaded
// it adds all of our event listeners after we're sure the elements are on the page


// ------------- GIF event handlers - fetchNew, save, fetchSaved, and clear ---------------

var fetchNewGif = function fetchNewGif() {
  // Initiate AJAX call to GIPHY API, 
  // take response and put on the DOM
  GifApiUtil.newGifAJAX().then(function (res) {
    // console.log(res);
    var url = res.data.image_url;
    appendGif(url);
  });
};

var saveGif = function saveGif(e) {
  var $input = $('#save-gif-title');
  var title = $input.val();
  $input.val('');

  // Initiate AJAX request to Rails backend, give a message if successful
  // give an error if request was unsuccessful
  var success = function success(res) {
    $('.messages').empty();
    $('.messages').text('You did it!');
  };

  var failure = function failure(err) {
    // you should look at the err object to see what you have in it
    $('.messages').empty();
    $('.messages').text(err.responseJSON[0]);
  };

  GifApiUtil.saveGifAJAX({
    title: title,
    url: $('.gif-display').data('url') // access data stored on the gif display
  }).then(success, failure); // runs success callback on response status code 200
  // runs fail callback on response status code not 200 (usually some 400)
};

var fetchSavedGif = function fetchSavedGif() {
  var $input = $('#old-gif-query');
  var title = $input.val();
  $input.val('');

  // Initate AJAX request to Rails backend, add GIF to the DOM if successful
  // show errors if request was unsuccessful
  GifApiUtil.fetchSavedGifAJAX(title).then(function (res) {
    return appendGif(res.url);
  }, // success
  function (err) {
    return console.log("Gif not found");
  } // failure
  );
};

var clearGif = function clearGif() {
  var $gifDisplay = $(".gif-display");
  $gifDisplay.empty();
  return $gifDisplay;
};

// ------------- Other helper functions ---------------

var appendGif = function appendGif(newGifURL) {
  // Add gif to the display and keep track of its url
  var $gifDisplay = $('.gif-display');
  $gifDisplay.empty();

  var $newImage = $('<img class="gif" src="' + newGifURL + '">');
  // store 'data' on the object
  $gifDisplay.data("url", newGifURL);
  $gifDisplay.append($newImage);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GifApiUtil = {
  newGifAJAX: function newGifAJAX() {
    // always explicitly return because it makes debugging easier
    // explicitly returning whatever is returned by the ajax method. (a promise)
    return $.ajax({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G&tag=mike'
    });
  },
  saveGifAJAX: function saveGifAJAX(gifArg) {
    // gifArg === {
    // title: 'text',
    // url: 'more text'
    // };
    return $.ajax({
      method: 'POST',
      url: '/gifs', // cant use ruby code in js file
      data: { gif: gifArg }, // structured in a way to work with strong params in controller (gif_params)
      dataType: 'JSON'
    });
  },
  fetchSavedGifAJAX: function fetchSavedGifAJAX(titleArg) {

    return $.ajax({
      method: 'GET',
      url: '/gifs/' + titleArg,
      dataType: 'JSON'
    });
  }
};

module.exports = GifApiUtil;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map