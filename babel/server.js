const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const connect = require('connect-ensure-login');
import React from 'react';
import { renderToString } from 'react-dom/server';
import Main from 'Main';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import {StaticRouter} from 'react-router-dom';

import postReducers from 'Reducers';
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

const app = express();

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

app.get('/app.bundle.js', (req, res) => {
    res.sendFile(__dirname + '/app.bundle.js')
})

app.get('/*', (req, res) => {
    let store = createStore(postReducers)

    const context = {};
    const app = (
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <Main/>
            </StaticRouter>
        </Provider>
    )
    const appString = renderToString(app);
    if (context.url) {
        return res.redirect(context.url);
    }

    const preloadedState = store.getState();

    let body = `<!doctype html>
                <html>
                  <head>
                    <title>Posts</title>
                  </head>
                  <script>
                    // WARNING: See the following for security issues around embedding JSON in HTML:
                    // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                    window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                  </script>

                  <body>
                    <div id="app">${appString}</div>
                  </body>

                  <script src="app.bundle.js"></script>
                </html>`

    res.send(body);
});

app.get('/app.bundle.js', (req, res) => {
  res.sendFile(__dirname + '/app.bundle.js');
});

app.use((err, req, res, next) => {
    res.status(500).send({err: err.stack})
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
