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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

var _Toolbar = __webpack_require__(19);

var _AddPost = __webpack_require__(16);

var _PostList = __webpack_require__(18);

var _actions = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main(props) {
    var savePost = props.savePost,
        changeSearchText = props.changeSearchText,
        searchText = props.searchText,
        posts = props.posts;

    var filteredPosts = posts.filter(function (post) {
        return post.author.indexOf(searchText) !== -1;
    });
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/' },
                    'Home'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/post' },
                    'Add new post'
                )
            )
        ),
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render(props) {
                    return _react2.default.createElement(_Toolbar.Toolbar, { changeSearchText: changeSearchText, searchText: searchText });
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/post', render: function render(props) {
                    return _react2.default.createElement(_AddPost.AddPost, { savePost: savePost });
                } }),
            _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' })
        ),
        _react2.default.createElement(_PostList.PostList, { posts: filteredPosts })
    );
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        posts: state.posts,
        searchText: state.searchText
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        savePost: function savePost(text) {
            dispatch((0, _actions.savePost)(text));
        },
        changeSearchText: function changeSearchText(text) {
            dispatch((0, _actions.changeSearchText)(text));
        }
    };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Main));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initState = {
    posts: [{
        title: 'first',
        content: 'first',
        author: 'first',
        id: 'first'
    }],
    searchText: ""
};

var postReducers = function postReducers() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case 'SAVE_POST':
            return _extends({}, state, {
                posts: [].concat(_toConsumableArray(state.posts), [action.post])
            });
            break;
        case 'REMOVE_POST':
            console.log('REMOVE_POST');
            return _extends({}, state, {
                posts: state.posts.filter(function (post) {
                    return post.id !== action.id;
                })
            });
            break;
        case 'CHANGE_SEARCH_TEXT':
            return _extends({}, state, {
                searchText: action.text
            });
            break;
        default:
            return state;
    }
};

exports.default = postReducers;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("connect-ensure-login");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var savePost = exports.savePost = function savePost(post) {
    return {
        type: 'SAVE_POST',
        post: post
    };
};

var removePost = exports.removePost = function removePost(id) {
    return {
        type: 'REMOVE_POST',
        id: id
    };
};

var changeSearchText = exports.changeSearchText = function changeSearchText(text) {
    return {
        type: 'CHANGE_SEARCH_TEXT',
        text: text
    };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AddPost = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _uniqid = __webpack_require__(21);

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
            var savePost = this.props.savePost;
            var _state = this.state,
                title = _state.title,
                content = _state.content,
                author = _state.author;

            var id = (0, _uniqid2.default)();
            savePost({ title: title, content: content, author: author, id: id });
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = function Post(props) {
    var id = props.id,
        title = props.title,
        author = props.author,
        content = props.content,
        removePost = props.removePost;

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
                    removePost(id);
                } },
            'Delete'
        )
    );
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        removePost: function removePost(id) {
            console.log('dispatch');
            dispatch((0, _actions.removePost)(id));
        }
    };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Post);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PostList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Post = __webpack_require__(17);

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostList = exports.PostList = function PostList(props) {
    var posts = props.posts;


    return posts.map(function (post) {
        return _react2.default.createElement(_Post2.default, _extends({ key: post.id }, post));
    });
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Toolbar = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toolbar = exports.Toolbar = function Toolbar(props) {
    var changeSearchText = props.changeSearchText,
        searchText = props.searchText;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', { type: 'text', value: searchText, onChange: function onChange(e) {
                changeSearchText(e.target.value);
            }, placeholder: 'Type an author to filter posts' })
    );
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(11);

var _Main = __webpack_require__(3);

var _Main2 = _interopRequireDefault(_Main);

var _redux = __webpack_require__(12);

var _reactRedux = __webpack_require__(2);

var _reduxThunk = __webpack_require__(13);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterDom = __webpack_require__(1);

var _Reducers = __webpack_require__(4);

var _Reducers2 = _interopRequireDefault(_Reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(7);
var bodyParser = __webpack_require__(5);
var winston = __webpack_require__(14);
var passport = __webpack_require__(9);
var Strategy = __webpack_require__(10).Strategy;
var mongoose = __webpack_require__(8);
var connect = __webpack_require__(6);

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

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
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
// app.use(express.static('./'));

app.get('/app.bundle.js', function (req, res) {
    res.sendFile(__dirname + '/app.bundle.js');
});

app.get('/*', function (req, res) {
    var store = (0, _redux.createStore)(_Reducers2.default);

    var context = {};
    var app = _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.url, context: context },
            _react2.default.createElement(_Main2.default, null)
        )
    );
    var appString = (0, _server.renderToString)(app);
    if (context.url) {
        return res.redirect(context.url);
    }

    var preloadedState = store.getState();

    var body = '<!doctype html>\n                <html>\n                  <head>\n                    <title>Posts</title>\n                  </head>\n                  <script>\n                    // WARNING: See the following for security issues around embedding JSON in HTML:\n                    // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n                    window.PRELOADED_STATE = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n                  </script>\n\n                  <body>\n                    <div id="app">' + appString + '</div>\n                  </body>\n\n                  <script src="app.bundle.js"></script>\n                </html>';

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

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("uniqid");

/***/ })
/******/ ]);