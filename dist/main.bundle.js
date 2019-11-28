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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/inputForm.js":
/*!*************************************!*\
  !*** ./src/components/inputForm.js ***!
  \*************************************/
/*! exports provided: InputForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputForm", function() { return InputForm; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InputForm =
/*#__PURE__*/
function () {
  function InputForm() {
    var _this = this;

    _classCallCheck(this, InputForm);

    this.txtTitle = document.createElement('input');
    this.txtTitle.type = 'text';
    this.txtTitle.id = 'txt-title';
    this.txtTitle.placeholder = 'Title';
    this.title = '';
    this.txtTitle.addEventListener('input', function () {
      _this.title = _this.txtTitle.value;
    });
    this.btnAdd = document.createElement('input');
    this.btnAdd.type = 'submit';
    this.btnAdd.id = 'btn-add';
    this.btnAdd.value = 'Add Task';
    this.form = document.createElement('section');
    this.form.appendChild(this.txtTitle);
    this.form.appendChild(this.btnAdd);
  }

  _createClass(InputForm, [{
    key: "getNode",
    value: function getNode() {
      return this.form;
    }
  }, {
    key: "setBtnAddOnClick",
    value: function setBtnAddOnClick(onClick) {
      this.btnAdd.addEventListener('click', onClick);
    } //ToDo: Add onKeyUp

  }]);

  return InputForm;
}();



/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Task =
/*#__PURE__*/
function () {
  function Task(title) {
    _classCallCheck(this, Task);

    this.title = title;
    this.item = document.createElement("div");
    this.item.className = 'task-item';
    this.itemText = document.createElement('p');
    this.itemText.innerHTML = title;
    this.itemText.className = 'task-title';
    this.removeBtn = document.createElement('button');
    this.removeBtn.className = 'task-remove-btn';
    this.removeBtn.innerHTML = 'X';
    this.item.appendChild(this.itemText);
    this.item.appendChild(this.removeBtn);
  }

  _createClass(Task, [{
    key: "getNode",
    value: function getNode() {
      return this.item;
    }
  }, {
    key: "setBtnDeleteClickEvent",
    value: function setBtnDeleteClickEvent(onClick) {
      this.removeBtn.addEventListener('click', onClick);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem() {
      this.item.remove();
    }
  }]);

  return Task;
}();



/***/ }),

/***/ "./src/components/taskList.js":
/*!************************************!*\
  !*** ./src/components/taskList.js ***!
  \************************************/
/*! exports provided: TaskList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskList", function() { return TaskList; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TaskList =
/*#__PURE__*/
function () {
  function TaskList() {
    _classCallCheck(this, TaskList);

    this.list = document.createElement('section');
    this.list.id = 'tasks-container';
  }

  _createClass(TaskList, [{
    key: "addTask",
    value: function addTask(task) {
      this.list.appendChild(task.getNode());
    }
  }, {
    key: "emptyList",
    value: function emptyList() {
      this.list.innerHTML = "";
    }
  }, {
    key: "getNode",
    value: function getNode() {
      return this.list;
    }
  }]);

  return TaskList;
}();



/***/ }),

/***/ "./src/components/userName.js":
/*!************************************!*\
  !*** ./src/components/userName.js ***!
  \************************************/
/*! exports provided: UserName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserName", function() { return UserName; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserName =
/*#__PURE__*/
function () {
  function UserName() {
    _classCallCheck(this, UserName);

    this.username = document.createElement('input');
    this.username.type = 'text';
    this.username.id = 'username';
    this.username.placeholder = 'Username...';
    /*this.titleName = ''
    this.username.addEventListener('input', () => {
        this.titleName = this.username.value
    })*/

    this.btnAdd = document.createElement('input');
    this.btnAdd.type = 'submit';
    this.btnAdd.id = 'btn-add';
    this.btnAdd.value = 'Select';
    this.form = document.createElement('section');
    this.form.appendChild(this.username);
    this.form.appendChild(this.btnAdd);
  }

  _createClass(UserName, [{
    key: "getNode",
    value: function getNode() {
      return this.form;
    }
  }, {
    key: "selectBtnOnClick",
    value: function selectBtnOnClick(select) {
      this.btnAdd.addEventListener('click', select);
    } //ToDo: Add onKeyUp

  }]);

  return UserName;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/dashboard */ "./src/layout/dashboard.js");
/* harmony import */ var _utilities_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/todo-service */ "./src/utilities/todo-service.js");


var app = document.querySelector('#app');
var dashboard = new _layout_dashboard__WEBPACK_IMPORTED_MODULE_0__["Dashboard"]();
app.appendChild(dashboard.getNode());

/***/ }),

/***/ "./src/layout/dashboard.js":
/*!*********************************!*\
  !*** ./src/layout/dashboard.js ***!
  \*********************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/layout/main.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/layout/header.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Dashboard =
/*#__PURE__*/
function () {
  function Dashboard() {
    _classCallCheck(this, Dashboard);

    this.header = new _header__WEBPACK_IMPORTED_MODULE_1__["Header"]();
    this.main = new _main__WEBPACK_IMPORTED_MODULE_0__["Main"]();
    this.node = document.createElement('dashboard');
    this.node.appendChild(this.header.getNode());
    this.node.appendChild(this.main.getNode());
  }

  _createClass(Dashboard, [{
    key: "getNode",
    value: function getNode() {
      return this.node;
    }
  }]);

  return Dashboard;
}();



/***/ }),

/***/ "./src/layout/header.js":
/*!******************************!*\
  !*** ./src/layout/header.js ***!
  \******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Header =
/*#__PURE__*/
function () {
  function Header() {
    _classCallCheck(this, Header);

    this.node = document.createElement('header');
    this.title = document.createElement('h1');
    this.title.innerHTML = 'Task List';
    this.node.appendChild(this.title);
  }

  _createClass(Header, [{
    key: "getNode",
    value: function getNode() {
      return this.node;
    }
  }]);

  return Header;
}();



/***/ }),

/***/ "./src/layout/main.js":
/*!****************************!*\
  !*** ./src/layout/main.js ***!
  \****************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _components_taskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/taskList */ "./src/components/taskList.js");
/* harmony import */ var _components_inputForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/inputForm */ "./src/components/inputForm.js");
/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/task */ "./src/components/task.js");
/* harmony import */ var _utilities_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/todo-service */ "./src/utilities/todo-service.js");
/* harmony import */ var _components_userName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/userName */ "./src/components/userName.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Main =
/*#__PURE__*/
function () {
  function Main() {
    _classCallCheck(this, Main);

    var inputForm = new _components_inputForm__WEBPACK_IMPORTED_MODULE_1__["InputForm"]();
    var taskList = new _components_taskList__WEBPACK_IMPORTED_MODULE_0__["TaskList"]();
    var userName = new _components_userName__WEBPACK_IMPORTED_MODULE_4__["UserName"]();
    this.node = document.createElement('main');
    this.node.appendChild(inputForm.getNode());
    this.node.appendChild(userName.getNode());
    this.node.appendChild(taskList.getNode());
    inputForm.setBtnAddOnClick(function () {
      var text = inputForm.txtTitle.value;
      text = text.trim();
      if (text == '') return;
      var task = new _components_task__WEBPACK_IMPORTED_MODULE_2__["Task"](text);
      task.setBtnDeleteClickEvent(function () {
        Object(_utilities_todo_service__WEBPACK_IMPORTED_MODULE_3__["deleteToDo"])(userName.username.value, text).then(function () {
          task.deleteItem();
        });
      }); //taskList.addTask(task);

      Object(_utilities_todo_service__WEBPACK_IMPORTED_MODULE_3__["addToDo"])(userName.username.value, text).then(function () {
        var task = new _components_task__WEBPACK_IMPORTED_MODULE_2__["Task"](text);
        task.setBtnDeleteClickEvent(function () {
          task.deleteItem();
        });
        taskList.addTask(task);
      });
    });
    /*
    getToDo('uros').then(data =>{ 
        let items = data.items; // ovo je niz iz jsona 
        items.forEach(item => {
            let task = new Task(item.title);
            task.setBtnDeleteClickEvent(()=>{
                task.deleteItem();
            })
            taskList.addTask(task);
        });
    });*/

    userName.selectBtnOnClick(function () {
      Object(_utilities_todo_service__WEBPACK_IMPORTED_MODULE_3__["getToDo"])(userName.username.value).then(function (data) {
        var items = data.items; // ovo je niz iz jsona 

        items.forEach(function (item) {
          var task = new _components_task__WEBPACK_IMPORTED_MODULE_2__["Task"](item.title);
          task.setBtnDeleteClickEvent(function () {
            task.deleteItem();
          });
          taskList.addTask(task);
        });
      });
    });
  }

  _createClass(Main, [{
    key: "getNode",
    value: function getNode() {
      return this.node;
    }
  }]);

  return Main;
}();



/***/ }),

/***/ "./src/utilities/todo-service.js":
/*!***************************************!*\
  !*** ./src/utilities/todo-service.js ***!
  \***************************************/
/*! exports provided: getToDo, getAllToDo, addToDo, deleteToDo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToDo", function() { return getToDo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllToDo", function() { return getAllToDo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToDo", function() { return addToDo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteToDo", function() { return deleteToDo; });
var apiUrl = 'http://localhost';
var apiPort = "4001";

function getToDo(username) {
  var res = fetch("".concat(apiUrl, ":").concat(apiPort, "/api/todo"), {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    method: 'POST',
    body: JSON.stringify({
      id: username
    })
  }).then(function (response) {
    return response.json();
  }, function (error) {
    console.log(error);
  });
  return res;
}

function getAllToDo() {
  var res = fetch("".concat(apiUrl, ":").concat(apiPort, "/api/todo")).then(function (response) {
    return response.json();
  }, function (error) {
    console.log(error);
  });
  return res;
}

function addToDo(username, message) {
  var res = fetch("".concat(apiUrl, ":").concat(apiPort, "/api/todo"), {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    method: 'PUT',
    body: JSON.stringify({
      id: username,
      title: message //to je poruka koju ubacujemo

    })
  }).then(function (response) {
    return response.json();
  }, function (error) {
    console.log(error);
  });
  return res; //vraca promise
}

function deleteToDo(username, message) {
  var res = fetch("".concat(apiUrl, ":").concat(apiPort, "/api/todo"), {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    method: 'PUT',
    body: JSON.stringify({
      id: username,
      title: message //to je poruka koju ubacujemo

    })
  }).then(function (response) {
    return response.json();
  }, function (error) {
    console.log(error);
  });
  return res; //vraca promise
}



/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map