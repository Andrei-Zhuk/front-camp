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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Main = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Toolbar = __webpack_require__(13);

var _AddPost = __webpack_require__(10);

var _PostList = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = exports.Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main(props) {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

        _this.state = {
            isAddingPost: false,
            posts: [],
            searchText: ""
        };
        _this.handleSavePost = _this.handleSavePost.bind(_this);
        _this.handleCancelPost = _this.handleCancelPost.bind(_this);
        _this.handleAddPost = _this.handleAddPost.bind(_this);
        _this.handleDeletePost = _this.handleDeletePost.bind(_this);
        _this.handleChangeSearchText = _this.handleChangeSearchText.bind(_this);
        return _this;
    }

    _createClass(Main, [{
        key: 'handleAddPost',
        value: function handleAddPost() {
            this.setState({
                isAddingPost: true
            });
        }
    }, {
        key: 'handleSavePost',
        value: function handleSavePost(post) {
            this.setState({
                posts: [post].concat(_toConsumableArray(this.state.posts)),
                isAddingPost: false
            });
        }
    }, {
        key: 'handleCancelPost',
        value: function handleCancelPost() {
            this.setState({
                isAddingPost: false
            });
        }
    }, {
        key: 'handleDeletePost',
        value: function handleDeletePost(id) {
            this.setState({
                posts: this.state.posts.filter(function (post) {
                    return post.id !== id;
                })
            });
        }
    }, {
        key: 'handleChangeSearchText',
        value: function handleChangeSearchText(e) {
            this.setState({
                searchText: e.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var that = this;
            var filteredPosts = this.state.posts.filter(function (post) {
                return post.author.indexOf(that.state.searchText) !== -1;
            });
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Toolbar.Toolbar, { handleAddPost: this.handleAddPost, searchText: this.state.searchText, handleChangeSearchText: this.handleChangeSearchText }),
                this.state.isAddingPost ? _react2.default.createElement(_AddPost.AddPost, { handleSavePost: this.handleSavePost, handleCancelPost: this.handleCancelPost }) : null,
                _react2.default.createElement(_PostList.PostList, { posts: filteredPosts, handleDeletePost: this.handleDeletePost })
            );
        }
    }]);

    return Main;
}(_react2.default.Component);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("connect-ensure-login");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AddPost = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _uniqid = __webpack_require__(15);

var _uniqid2 = _interopRequireDefault(_uniqid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddPost = exports.AddPost = function (_React$Component) {
    _inherits(AddPost, _React$Component);

    function AddPost(props) {
        _classCallCheck(this, AddPost);

        var _this = _possibleConstructorReturn(this, (AddPost.__proto__ || Object.getPrototypeOf(AddPost)).call(this, props));

        _this.state = {
            title: "",
            content: "",
            author: ""
        };
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.savePost = _this.savePost.bind(_this);
        _this.cancelPost = _this.cancelPost.bind(_this);
        return _this;
    }

    _createClass(AddPost, [{
        key: 'handleInputChange',
        value: function handleInputChange(e) {
            var name = e.target.name;
            var value = e.target.value;
            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: 'savePost',
        value: function savePost(e) {
            e.preventDefault();
            var handleSavePost = this.props.handleSavePost;
            var _state = this.state,
                title = _state.title,
                content = _state.content,
                author = _state.author;

            var id = (0, _uniqid2.default)();
            handleSavePost({ title: title, content: content, author: author, id: id });
            this.setState({
                title: "",
                content: "",
                author: ""
            });
        }
    }, {
        key: 'cancelPost',
        value: function cancelPost(e) {
            e.preventDefault();
            var handleCancelPost = this.props.handleCancelPost;

            handleCancelPost();
            this.setState({
                title: "",
                content: "",
                author: ""
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'form',
                        null,
                        _react2.default.createElement('input', { placeholder: 'Type a title', name: 'title', value: this.state.title, onChange: this.handleInputChange }),
                        _react2.default.createElement('input', { placeholder: 'Type a content', name: 'content', value: this.state.content, onChange: this.handleInputChange }),
                        _react2.default.createElement('input', { placeholder: 'Type an author', name: 'author', value: this.state.author, onChange: this.handleInputChange }),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.savePost },
                            'Save'
                        ),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.cancelPost },
                            'Cansel'
                        )
                    )
                )
            );
        }
    }]);

    return AddPost;
}(_react2.default.Component);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Post = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = exports.Post = function Post(props) {
    var id = props.id,
        title = props.title,
        author = props.author,
        content = props.content,
        handleDeletePost = props.handleDeletePost;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h2',
            null,
            'Title:   ',
            title
        ),
        _react2.default.createElement(
            'h3',
            null,
            'Author: ',
            author
        ),
        _react2.default.createElement(
            'p',
            null,
            'Content: ',
            content
        ),
        _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                    handleDeletePost(id);
                } },
            'Delete'
        )
    );
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PostList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Post = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostList = exports.PostList = function PostList(props) {
    var handleDeletePost = props.handleDeletePost,
        posts = props.posts;


    return posts.map(function (post) {
        return _react2.default.createElement(_Post.Post, _extends({ key: post.id }, post, { handleDeletePost: handleDeletePost }));
    });
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Toolbar = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toolbar = exports.Toolbar = function Toolbar(props) {
    var handleAddPost = props.handleAddPost,
        handleChangeSearchText = props.handleChangeSearchText,
        searchText = props.searchText;

    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("input", { type: "text", value: searchText, onChange: handleChangeSearchText, placeholder: "Type an author to filter posts" }),
        _react2.default.createElement(
            "button",
            { onClick: handleAddPost },
            "Add Post"
        )
    );
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(8);

var _Main = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(4);
var bodyParser = __webpack_require__(2);
var winston = __webpack_require__(9);
var passport = __webpack_require__(6);
var Strategy = __webpack_require__(7).Strategy;
var mongoose = __webpack_require__(5);
var connect = __webpack_require__(3);

// mongoose.connect('mongodb://localhost/test');

// passport.use(new Strategy((username, password, cb) => {
//     User.findOne({username, password}, (err, user) => {
//         if (err) return cb(err)
//         if (!user) { return cb(null, false); }
//         return cb(null, user);
//     })
// }));
//
// passport.serializeUser((user, cb) => {
//     cb(null, user.id);
// });
//
// passport.deserializeUser((id, cb) => {
//     User.findOne({_id: id}, (err, user) => {
//         if (err) { return cb(err); }
//         cb(null, user);
//     });
// });

var app = express();

// const logger = winston.createLogger({
//   transports: [
//     new winston.transports.File({ filename: 'combined.log' })
//   ]
// });
//
// const db = mongoose.connection;
// db.on('error', (console.error.bind(console, 'connection error:')));
// db.once('open', () => {
//   console.log('connected to db');
// });
//
// const blogSchema = mongoose.Schema({
//     _id: String,
//     title: String
// })
// const userSchema = mongoose.Schema({
//     username: String,
//     password: String
// })
//
// const Blogs = mongoose.model('Blogs', blogSchema)
// const User = mongoose.model('User', userSchema)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// app.use(passport.initialize());
// app.use(passport.session());

// app.use((req, res, next) => {
//     logger.log({
//         level: "info",
//         url: req.url,
//         date: new Date()
//     });
//     next();
// })

// app.get('/login', (req, res) => {
//     res.render('login');
// })
//
// app.post('/login', passport.authenticate('local'), (req, res) => {
//     res.redirect('/')
// })
//
// app.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
// })
//
// app.get('/register', (req, res) => {
//     res.render('register');
// })
//
// app.post('/register', (req, res, next) => {
//   if (req.body.password1 !== req.body.password2) {
//     res.redirect('/register')
//   } else {
//     User.findOne({username: req.body.username}, (err, user) => {
//       if (user) {
//         res.redirect('/register')
//       } else {
//         new User({username: req.body.username, password: req.body.password1}).save((err, user) => {
//           res.redirect('/login')
//         })
//       }
//     })
//   }
// })
//
// app.get('/users', connect.ensureLoggedIn(), (req, res) => {
//   User.find((err, blogs) => {
//     if (err) return next(err)
//     res.json(blogs)
//   })
// });
//
// app.get('/blogs',(req, res) => {
//   Blogs.find((err, blogs) => {
//     if (err) return next(err)
//     res.json(blogs)
//   })
// });
//
// app.get('/blogs/:id', (req, res) => {
//   Blogs.findOne({_id: req.params.id}, (err, blogs) => {
//     if (err) return next(err)
//     res.json(blogs)
//   })
// });
//
// app.post('/blogs', (req, res, next) => {
//   let blog = new Blogs({_id: req.body.id, title: req.body.title});
//   blog.save((err, blog) => {
//       if (err) return next(err)
//       res.json(blog);
//   })
// })
//
// app.put('/blogs/:id', (req, res) => {
//   Blogs.findByIdAndUpdate(req.params.id, {title: req.body.title}, (err, blog) => {
//       if (err) return next(err)
//       res.json(blog)
//   })
// })
//
// app.delete('/blogs/:id', (req, res, next) => {
//   Blogs.findOne({_id: req.params.id}, (err, blog) => {
//       if (err) return next(err)
//       if (!blog) return next(new Error())
//       blog.remove((err, el) => {
//           if (err) next(err)
//           res.json(el);
//       })
//   })
// })

app.get('/', function (req, res) {
  console.log(_Main.Main);
  var appString = (0, _server.renderToString)(_react2.default.createElement(_Main.Main, null));
  var body = '<!DOCTYPE html>\n                <html>\n                  <head>\n                    <title>Posts</title>\n                  </head>\n\n                  <body>\n                    <div id="app">' + appString + '</div>\n                  </body>\n\n                  <script src="app.bundle.js"></script>\n                </html>';

  res.send(body);
});

app.get('/app.bundle.js', function (req, res) {
  res.sendFile(__dirname + '/app.bundle.js');
});

app.use(function (err, req, res, next) {
  res.status(500).send({ err: err.stack });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("uniqid");

/***/ })
/******/ ]);