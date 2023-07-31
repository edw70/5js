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

/***/ "./src/dictionnary.js":
/*!****************************!*\
  !*** ./src/dictionnary.js ***!
  \****************************/
/***/ (() => {

eval("/*fonction du dictionnaire*/\nvar btnSubmit = document.querySelector(\"#confirme\");\nbtnSubmit.addEventListener(\"click\", function (e) {\n  search();\n});\nfunction search() {\n  var word = document.getElementById(\"Recherche\").value;\n  var resultat = document.getElementById(\"resultat\");\n  if (word.length != 0) {\n    var url = \"https://api.dictionaryapi.dev/api/v2/entries/en/\" + word;\n    fetch(url).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      console.log(data);\n      if (data.length > 0) {\n        var _words$meanings$, _words$meanings$2, _words$meanings$3, _words$meanings$4, _words$phonetics$, _words$phonetics$2;\n        var words = data[0];\n        var definition = (_words$meanings$ = words.meanings[0]) === null || _words$meanings$ === void 0 || (_words$meanings$ = _words$meanings$.definitions[0]) === null || _words$meanings$ === void 0 ? void 0 : _words$meanings$.definition;\n        var definition1 = (_words$meanings$2 = words.meanings[0]) === null || _words$meanings$2 === void 0 || (_words$meanings$2 = _words$meanings$2.definitions[1]) === null || _words$meanings$2 === void 0 ? void 0 : _words$meanings$2.definition;\n        var phonethique = words.phonetic;\n        var synonyme = (_words$meanings$3 = words.meanings[0]) === null || _words$meanings$3 === void 0 ? void 0 : _words$meanings$3.synonyms[0];\n        var synonyme1 = (_words$meanings$4 = words.meanings[0]) === null || _words$meanings$4 === void 0 ? void 0 : _words$meanings$4.synonyms[1];\n        var audio = (_words$phonetics$ = words.phonetics[0]) === null || _words$phonetics$ === void 0 ? void 0 : _words$phonetics$.audio;\n        var audio1 = (_words$phonetics$2 = words.phonetics[1]) === null || _words$phonetics$2 === void 0 ? void 0 : _words$phonetics$2.audio;\n        var htmlContent = \"<div class='carte1'><p class='nom'> Définition : </p>\" + \"<p class='nom1'>\" + word + \"</p>\" + \"<p class='def'>\" + definition + \"</p>\";\n        if (definition1 !== undefined) {\n          htmlContent += \"<p class='def2'>\" + definition1 + \"</p>\";\n        }\n        htmlContent += \"</div>\";\n        var phonethiqueHTML = \"\"; // Déclarer la variable phonethiqueHTML ici\n\n        if (phonethique) {\n          // Ajouter la partie avec le paragraphe phonétique si phonethique est défini\n          phonethiqueHTML = \"<div class='carte2'><p class='nom'> phonétique : </p><p class='phonetique'>\" + phonethique + \"</p>\";\n\n          // Vérifier si l'audio existe et ajouter l'élément audio correspondant\n          if (audio) {\n            phonethiqueHTML += \"<audio id='audioPlayer' src='\" + audio + \"' controls></audio>\";\n          } else if (audio1) {\n            phonethiqueHTML += \"<audio id='audioPlayer1' src='\" + audio1 + \"' controls></audio>\";\n          }\n\n          // Fermer la div de la carte2\n          phonethiqueHTML += \"</div>\";\n        } else if (audio || audio1) {\n          // Si phonethique n'est pas défini, ajouter uniquement l'élément audio\n          phonethiqueHTML += \"<div class='carte2'><p class='nom'> audio : </p><br><br>\";\n          if (audio) {\n            phonethiqueHTML += \"<audio id='audioPlayer' src='\" + audio + \"' controls></audio>\";\n          } else if (audio1) {\n            phonethiqueHTML += \"<audio id='audioPlayer1' src='\" + audio1 + \"' controls></audio>\";\n          }\n          phonethiqueHTML += \"</div>\";\n        }\n\n        // Ajouter phonethiqueHTML à htmlContent\n        htmlContent += phonethiqueHTML;\n        if (synonyme) {\n          var synonymeText = \"<div class='carte3'><p class='nom'> synonyme : </p>\" + \"<p class='synonyme'>\" + synonyme;\n          if (synonyme1 !== undefined) {\n            synonymeText += \", \" + synonyme1;\n          }\n          synonymeText += \".</p></div>\";\n          htmlContent += synonymeText;\n        }\n        resultat.innerHTML = htmlContent;\n      } else {\n        resultat.innerHTML = \"<p class='rest'>🤷‍♂️ <br> Oops! No definition found!</p>\";\n      }\n    });\n  } else {\n    resultat.innerHTML = \"<p class='rest'><span>&#9757;</span>Please fill in the Word field!  </p>\";\n  }\n}\n// Ajouter un écouteur d'événement sur le champ de recherche (avec l'ID \"Recherche\")\ndocument.getElementById(\"Recherche\").addEventListener(\"keydown\", function (event) {\n  // Vérifier si la touche pressée est la touche \"Entrée\" (code de touche 13)\n  if (event.key === \"Enter\") {\n    // Appeler la fonction search\n    search();\n  }\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/dictionnary.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _dictionnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionnary.js */ \"./src/dictionnary.js\");\n/* harmony import */ var _dictionnary_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dictionnary_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

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