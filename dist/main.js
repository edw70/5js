/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/darkmode.js":
/*!*************************!*\
  !*** ./src/darkmode.js ***!
  \*************************/
/***/ (() => {

eval("/*changement dark/light*/ ///\ndocument.addEventListener('DOMContentLoaded', function () {\n  var btnToggle = document.querySelector(\".btn-toggle\");\n  var body = document.body;\n  var slider = document.querySelector(\".slider\");\n\n  // Récupérez la valeur de 'isDarkMode' depuis le local storage\n  var isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));\n\n  // Appliquez la classe 'dark' au body si 'isDarkMode' est true, sinon retirez-la\n  if (isDarkMode) {\n    body.classList.add('dark');\n  } else {\n    body.classList.remove('dark');\n  }\n\n  // Ajoutez un écouteur d'événement sur le slider pour mettre à jour 'isDarkMode' et la classe 'dark'\n  if (slider != null) {\n    slider.addEventListener('click', function () {\n      body.classList.toggle('dark');\n      var isDark = body.classList.contains('dark');\n      localStorage.setItem('isDarkMode', JSON.stringify(isDark));\n    });\n  }\n});\n\n//permet de changer depuis windows\nfunction handleColorSchemeChange(e) {\n  var body = document.body;\n  if (e.matches) {\n    body.classList.add('dark');\n  } else {\n    body.classList.remove('dark');\n  }\n}\nvar colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');\ncolorSchemeQuery.addEventListener('change', handleColorSchemeChange);\nhandleColorSchemeChange(colorSchemeQuery);\n\n//# sourceURL=webpack://my-webpack-project/./src/darkmode.js?");

/***/ }),

/***/ "./src/dictionnary.js":
/*!****************************!*\
  !*** ./src/dictionnary.js ***!
  \****************************/
/***/ (() => {

eval("/*fonction du dictionnaire*/\nvar divsToHide;\nvar form = document.getElementById(\"myForm\");\nif (form != null) {\n  form.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    divsToHide = document.querySelectorAll(\".tmpDiv\");\n    search();\n  });\n}\nfunction search() {\n  var word = document.getElementById(\"Recherche\").value;\n  var resultat = document.getElementById(\"resultat\");\n  var pageDefault = document.getElementById(\"page_default\");\n  console.log(divsToHide);\n  if (word.length != 0) {\n    var url = \"https://api.dictionaryapi.dev/api/v2/entries/en/\" + word;\n    fetch(url).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      // console.log(data);\n\n      if (data.length > 0) {\n        var _words$meanings$, _words$meanings$2, _words$meanings$3, _words$meanings$4, _words$phonetics$, _words$phonetics$2;\n        var words = data[0];\n        var definition = (_words$meanings$ = words.meanings[0]) === null || _words$meanings$ === void 0 || (_words$meanings$ = _words$meanings$.definitions[0]) === null || _words$meanings$ === void 0 ? void 0 : _words$meanings$.definition;\n        var definition1 = (_words$meanings$2 = words.meanings[0]) === null || _words$meanings$2 === void 0 || (_words$meanings$2 = _words$meanings$2.definitions[1]) === null || _words$meanings$2 === void 0 ? void 0 : _words$meanings$2.definition;\n        var phonethique = words.phonetic;\n        var synonyme = (_words$meanings$3 = words.meanings[0]) === null || _words$meanings$3 === void 0 ? void 0 : _words$meanings$3.synonyms[0];\n        var synonyme1 = (_words$meanings$4 = words.meanings[0]) === null || _words$meanings$4 === void 0 ? void 0 : _words$meanings$4.synonyms[1];\n        var audio = (_words$phonetics$ = words.phonetics[0]) === null || _words$phonetics$ === void 0 ? void 0 : _words$phonetics$.audio;\n        var audio1 = (_words$phonetics$2 = words.phonetics[1]) === null || _words$phonetics$2 === void 0 ? void 0 : _words$phonetics$2.audio;\n        var htmlContent = \"<div class='carte1 tmpDiv'><p class='nom'> Définition : </p>\" + \"<p class='nom1'>\" + word + \"</p>\" + \"<p class='def'>\" + definition + \"</p>\";\n        if (definition1 !== undefined) {\n          htmlContent += \"<p class='def2'>\" + definition1 + \"</p>\";\n        }\n        htmlContent += \"</div>\";\n        var phonethiqueHTML = \"\";\n        if (phonethique) {\n          // Ajouter la partie avec le paragraphe phonétique si phonethique est défini\n          phonethiqueHTML = \"<div class='carte2 tmpDiv'><p class='nom'> phonétique : </p><p class='phonetique'>\" + phonethique + \"</p>\";\n\n          // Vérifier si l'audio existe et ajouter l'élément audio correspondant\n          if (audio) {\n            phonethiqueHTML += \"<audio id='audioPlayer' src='\" + audio + \"' controls></audio>\";\n          } else if (audio1) {\n            phonethiqueHTML += \"<audio id='audioPlayer1' src='\" + audio1 + \"' controls></audio>\";\n          }\n\n          // Fermer la div de la carte2\n          phonethiqueHTML += \"</div>\";\n        } else if (audio || audio1) {\n          // Si phonethique n'est pas défini, ajouter uniquement l'élément audio\n          phonethiqueHTML += \"<div class='carte2 tmpDiv'><p class='nom'> audio : </p><br><br>\";\n          if (audio) {\n            phonethiqueHTML += \"<audio id='audioPlayer' src='\" + audio + \"' controls></audio>\";\n          } else if (audio1) {\n            phonethiqueHTML += \"<audio id='audioPlayer1' src='\" + audio1 + \"' controls></audio>\";\n          }\n          phonethiqueHTML += \"</div>\";\n        }\n\n        // Ajouter phonethiqueHTML à htmlContent\n        htmlContent += phonethiqueHTML;\n        if (synonyme) {\n          var synonymeText = \"<div class='carte3 tmpDiv'><p class='nom'> synonyme : </p>\" + \"<p class='synonyme'>\" + synonyme;\n          if (synonyme1 !== undefined) {\n            synonymeText += \", \" + synonyme1;\n          }\n          synonymeText += \".</p></div>\";\n          htmlContent += synonymeText;\n        }\n        pageDefault.classList.add(\"not_display\");\n        resultat.innerHTML = htmlContent;\n      } else {\n        if (pageDefault != null) {\n          resultat.classList.add(\"not_display\");\n          if (divsToHide != null) {\n            divsToHide.forEach(function (divToHide) {\n              divToHide.classList.add(\"not_display\");\n            });\n          }\n          pageDefault.classList.remove(\"not_display\");\n          pageDefault.innerHTML = \"<p class='rest'>🤷‍♂️ <br> Oops! No definition found!</p>\";\n        }\n      }\n    });\n  } else {\n    if (pageDefault != null) {\n      resultat.classList.add(\"not_display\");\n      if (divsToHide != null) {\n        divsToHide.forEach(function (divToHide) {\n          divToHide.classList.add(\"not_display\");\n        });\n      }\n      pageDefault.classList.remove(\"not_display\");\n      pageDefault.innerHTML = \"<p class='rest'><span>&#9757;</span>Please fill in the Word field!  </p>\";\n    }\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/dictionnary.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _dictionnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionnary.js */ \"./src/dictionnary.js\");\n/* harmony import */ var _dictionnary_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dictionnary_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _popup_deco_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup_deco.js */ \"./src/popup_deco.js\");\n/* harmony import */ var _popup_deco_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_popup_deco_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _polices_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polices.js */ \"./src/polices.js\");\n/* harmony import */ var _polices_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_polices_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _darkmode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./darkmode.js */ \"./src/darkmode.js\");\n/* harmony import */ var _darkmode_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_darkmode_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/polices.js":
/*!************************!*\
  !*** ./src/polices.js ***!
  \************************/
/***/ (() => {

eval("/*mise à jour de la police*/\nfunction mettreAJourPolice() {\n  var selectedFonts = [];\n  checkboxes.forEach(function (checkbox) {\n    if (checkbox.checked) {\n      selectedFonts.push(checkbox.value);\n    }\n  });\n  var bodyElement = document.getElementsByTagName('body')[0];\n  bodyElement.style.fontFamily = selectedFonts.join(', ');\n  var placeholder = document.getElementById(\"Recherche\");\n  if (placeholder != null) {\n    placeholder.style.fontFamily = selectedFonts.join(', ');\n  }\n}\nvar checkboxes = document.querySelectorAll('.polices');\ncheckboxes.forEach(function (checkbox, index) {\n  checkbox.addEventListener('change', function () {\n    if (this.checked) {\n      checkboxes.forEach(function (otherCheckbox, otherIndex) {\n        if (otherCheckbox !== checkbox) {\n          otherCheckbox.checked = false;\n        }\n      });\n    }\n    mettreAJourPolice();\n  });\n  if (index === 0) {\n    checkbox.checked = true;\n  } else {\n    checkbox.checked = false;\n  }\n});\nmettreAJourPolice();\n\n//# sourceURL=webpack://my-webpack-project/./src/polices.js?");

/***/ }),

/***/ "./src/popup_deco.js":
/*!***************************!*\
  !*** ./src/popup_deco.js ***!
  \***************************/
/***/ (() => {

eval("/*popup*/\n// Récupérer les éléments du DOM\nvar openBtn = document.getElementById('openPopup');\nvar closeBtn = document.getElementById('closePopup');\nvar popup = document.getElementById('popup');\n\n// Fonction pour ouvrir le popup\nfunction openPopup() {\n  popup.style.display = 'block';\n}\n\n// Fonction pour fermer le popup\nfunction closePopup() {\n  popup.style.display = 'none';\n}\n\n// Ajouter les écouteurs d'événements\nif (openBtn != null) {\n  openBtn.addEventListener('click', openPopup);\n  closeBtn.addEventListener('click', closePopup);\n}\n;\n\n/* /*welcome*/\n\n// Utilisez l'événement mousemove sur l'objet document pour détecter\n// le mouvement de la souris sur l'ensemble de la page.\ndocument.addEventListener(\"mousemove\", function (e) {\n  var mouseX = e.pageX;\n  var mouseY = e.pageY;\n  traX = 4 * mouseX / 570 + 40;\n  traY = 4 * mouseY / 570 + 50;\n  var welcomeElement = document.getElementById(\"welcome\");\n  if (welcomeElement) {\n    welcomeElement.style.backgroundPosition = traX + \"%\" + traY + \"%\";\n  }\n  document.querySelectorAll(\".rest\").forEach(function (element) {\n    element.style.backgroundPosition = traX + \"%\" + traY + \"%\";\n  });\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/popup_deco.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;