/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/calendar/calendar.js":
/*!*********************************************!*\
  !*** ./src/components/calendar/calendar.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nlet Calendar = function (divId) {\r\n    //Сохраняем идентификатор div\r\n    this.divId = divId;\r\n    // Дни недели с понедельника\r\n    this.DaysOfWeek = [\"Пн\", \"Вт\", \"Ср\", \"Чт\", \"Пт\", \"Сб\", \"Вс\"];\r\n    // Месяцы начиная с января\r\n    this.Months = [\r\n        \"Январь\",\r\n        \"Февраль\",\r\n        \"Март\",\r\n        \"Апрель\",\r\n        \"Май\",\r\n        \"Июнь\",\r\n        \"Июль\",\r\n        \"Август\",\r\n        \"Сентябрь\",\r\n        \"Октябрь\",\r\n        \"Ноябрь\",\r\n        \"Декабрь\",\r\n    ];\r\n    //Устанавливаем текущий месяц, год\r\n    let d = new Date();\r\n    this.currMonth = d.getMonth();\r\n    this.currYear = d.getFullYear();\r\n    this.currDay = d.getDate();\r\n};\r\n// Переход к следующему месяцу\r\nCalendar.prototype.nextMonth = function () {\r\n    if (this.currMonth === 11) {\r\n        this.currMonth = 0;\r\n        this.currYear = this.currYear + 1;\r\n    } else {\r\n        this.currMonth = this.currMonth + 1;\r\n    }\r\n    this.showcurr();\r\n};\r\n// Переход к предыдущему месяцу\r\nCalendar.prototype.previousMonth = function () {\r\n    if (this.currMonth === 0) {\r\n        this.currMonth = 11;\r\n        this.currYear = this.currYear - 1;\r\n    } else {\r\n        this.currMonth = this.currMonth - 1;\r\n    }\r\n    this.showcurr();\r\n};\r\n// Показать текущий месяц\r\nCalendar.prototype.showcurr = function () {\r\n    this.showMonth(this.currYear, this.currMonth);\r\n};\r\n// Показать месяц (год, месяц)\r\nCalendar.prototype.showMonth = function (y, m) {\r\n    const calendar_static_tooltip = document.getElementById(\"calendar_static_tooltip\");\r\n    // calendar_static_tooltip.parentElement.classList.add(\"--hidden\");\r\n\r\n    document.getElementById(this.divId).innerHTML = \"\";\r\n\r\n    // Первый день недели в выбранном месяце\r\n    let firstDayOfMonth = new Date(y, m, 7).getDay();\r\n    // Последний день выбранного месяца\r\n    let lastDateOfMonth = new Date(y, m + 1, 0).getDate();\r\n    // Последний день предыдущего месяца\r\n    let lastDayOfLastMonth = m === 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();\r\n\r\n    let table = document.createElement(\"table\");\r\n    table.className = \"calendar__table\";\r\n\r\n    let thead = document.createElement(\"thead\");\r\n    thead.className = \"calendar__head\";\r\n    thead.innerHTML = `\r\n    <tr class=\"calendar__row calendar__row_type_caption\">\r\n        <td>\r\n            <button\r\n                id=\"calendar_prev_btn\"\r\n                type=\"button\"\r\n                class=\"calendar__thumb icon icon_type_arrow-thin-left\"\r\n                aria-label=\"Предыдущий месяц\">\r\n            </button>\r\n        </td>\r\n        <td colspan=\"5\">\r\n            <p class=\"calendar__caption\">${this.Months[m]} ${y}</p>\r\n        </td>\r\n        <td>\r\n            <button\r\n                id=\"calendar_next_btn\"\r\n                type=\"button\"\r\n                class=\"calendar__thumb icon icon_type_arrow-thin-right\"\r\n                aria-label=\"Следующий месяц\">\r\n            </button>\r\n        </td>\r\n    </tr>`;\r\n\r\n    let tbody = document.createElement(\"tbody\");\r\n    tbody.className = \"calendar__body\";\r\n\r\n    let trDays = document.createElement(\"tr\");\r\n    trDays.className = \"calendar__row\";\r\n\r\n    for (let i = 0; i < this.DaysOfWeek.length; i++) {\r\n        let td = document.createElement(\"td\");\r\n        td.className = \"calendar__day\";\r\n        td.textContent = this.DaysOfWeek[i];\r\n        trDays.append(td);\r\n    }\r\n\r\n    thead.append(trDays);\r\n    table.append(thead);\r\n\r\n    // Записываем дни\r\n    let i = 1;\r\n    let currentTr;\r\n    do {\r\n        let dow = new Date(y, m, i).getDay();\r\n        // Начать новую строку в понедельник\r\n        if (dow === 1) {\r\n            currentTr = document.createElement(\"tr\");\r\n            currentTr.className = \"calendar__row\";\r\n        }\r\n        // Если первый день недели не понедельник показать последние дни предыдущего месяца\r\n        else if (i === 1) {\r\n            currentTr = document.createElement(\"tr\");\r\n            currentTr.className = \"calendar__row\";\r\n            let k = lastDayOfLastMonth - firstDayOfMonth + 1;\r\n            for (let j = 0; j < firstDayOfMonth; j++) {\r\n                let td = document.createElement(\"td\");\r\n                td.className = \"calendar__day calendar__day_not-current\";\r\n                td.textContent = k;\r\n                currentTr.append(td);\r\n                k++;\r\n            }\r\n        }\r\n        // Записываем текущий день в цикл\r\n        let chk = new Date();\r\n        let chkY = chk.getFullYear();\r\n        let chkM = chk.getMonth();\r\n\r\n        let currentDayElement = document.createElement(\"td\");\r\n        currentDayElement.className = \"calendar__day\";\r\n        currentDayElement.textContent = i;\r\n\r\n        if (chkY === this.currYear && chkM === this.currMonth && i === this.currDay && m === this.currMonth) {\r\n            currentDayElement.classList.add(\"calendar__day_today\");\r\n        }\r\n\r\n        if (y === 2023 && m === 7 && i === 23) {\r\n            this.addTooltip(currentDayElement);\r\n        }\r\n        if (y === 2023 && m === 7 && i === 10) {\r\n            this.addTooltip(currentDayElement);\r\n        }\r\n\r\n        currentTr.append(currentDayElement);\r\n\r\n        // закрыть строку в воскресенье\r\n        if (dow === 0) {\r\n            tbody.append(currentTr);\r\n        }\r\n        // Если последний день месяца не воскресенье, показать первые дни следующего месяца\r\n        else if (i === lastDateOfMonth) {\r\n            let k = 1;\r\n            for (dow; dow < 7; dow++) {\r\n                let td = document.createElement(\"td\");\r\n                td.className = \"calendar__day calendar__day_not-current\";\r\n                td.textContent = k;\r\n                currentTr.append(td);\r\n                k++;\r\n            }\r\n            tbody.append(currentTr);\r\n        }\r\n        i++;\r\n    } while (i <= lastDateOfMonth);\r\n\r\n    table.append(tbody);\r\n    document.getElementById(this.divId).append(table);\r\n\r\n    document.getElementById(\"calendar_prev_btn\").onclick = () => this.previousMonth();\r\n    document.getElementById(\"calendar_next_btn\").onclick = () => this.nextMonth();\r\n};\r\n\r\nCalendar.prototype.selectMonth = function (year, month) {\r\n    this.showMonth(year, month);\r\n};\r\n\r\nCalendar.prototype.addTooltip = function (element) {\r\n    element.onclick = () => {\r\n        Array.from(document.getElementsByClassName(\"calendar__day calendar__day_selected\")).map((item) =>\r\n            item.classList.remove(\"calendar__day_selected\")\r\n        );\r\n    };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\r\n\n\n//# sourceURL=webpack://moscow-center-of-education/./src/components/calendar/calendar.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_calendar_calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/calendar/calendar.js */ \"./src/components/calendar/calendar.js\");\n\r\n\r\n// Мобильное меню\r\n\r\nconst mobileMenuBtn = document.querySelector(\".content-header__btn\");\r\nconst mobileMenu = document.querySelector(\".header\");\r\nconst mobileMenuOpen = () => {\r\n    mobileMenu.classList.add(\"header_open\");\r\n    mobileMenuBtn.classList.add(\"content-header__btn_active\");\r\n};\r\nconst mobileMenuClose = () => {\r\n    mobileMenu.classList.remove(\"header_open\");\r\n    mobileMenuBtn.classList.remove(\"content-header__btn_active\");\r\n};\r\nmobileMenuBtn.addEventListener(\"click\", () => {\r\n    if (mobileMenu.classList.contains(\"header_open\")) {\r\n        mobileMenuClose();\r\n    } else {\r\n        mobileMenuOpen();\r\n    }\r\n});\r\n// Закрытие окна по нажатию на фон.\r\n\r\nmobileMenu.addEventListener(\"click\", (evt) => {\r\n    if (evt.target.classList.contains(\"header\")) {\r\n        mobileMenuClose();\r\n    }\r\n});\r\n\r\n// Аккордион\r\n\r\nconst accordionContainers = document.querySelectorAll(\".accordion\");\r\nconst accordionOpen = (container) => {\r\n    container.classList.add(\"accordion_open\");\r\n};\r\nconst accordionClose = (container) => {\r\n    container.classList.remove(\"accordion_open\");\r\n};\r\naccordionContainers.forEach((item) => {\r\n    item.querySelector(\".accordion__button\").addEventListener(\"click\", () => {\r\n        if (item.classList.contains(\"accordion_open\")) {\r\n            accordionClose(item);\r\n        } else {\r\n            accordionOpen(item);\r\n        }\r\n    });\r\n});\r\n\r\n// Селект\r\n\r\nconst selectContainers = document.querySelectorAll(\".select-field\");\r\nconst selectListOpen = (container) => {\r\n    container.classList.add(\"select-field_open\");\r\n};\r\nconst selectListClose = (container) => {\r\n    container.classList.remove(\"select-field_open\");\r\n};\r\nselectContainers.forEach((item) => {\r\n    item.querySelector(\".select-field__field\").addEventListener(\"click\", () => {\r\n        if (item.classList.contains(\"select-field_open\")) {\r\n            selectListClose(item);\r\n        } else {\r\n            selectListOpen(item);\r\n        }\r\n    });\r\n});\r\n\r\n// Календарь\r\n\r\nconst calendarEvents = new _components_calendar_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"calendar\");\r\ncalendarEvents.selectMonth(null, calendarEvents.currYear, calendarEvents.currMonth);\r\n\n\n//# sourceURL=webpack://moscow-center-of-education/./src/scripts/main.js?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;