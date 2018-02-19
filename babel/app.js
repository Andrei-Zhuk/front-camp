const express = require('express');
const bodyParser = require('body-parser');
const uniqid = require('uniqid');
const winston = require('winston');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

passport.use(new Strategy(
    function(username, password, cb) {
        User.findOne({email: username, password: password}, function (err, user) {
          if (err) return cb(err)
          if (!user) { return cb(null, false); }
          return cb(null, user);
        })
    }
));

passport.serializeUser(function(user, cb) {
    console.log('serialized');
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    console.log('deserialized');
    User.findOne({id: id}, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});

function checkLog (req, res, next) {
    console.log(req.user);
    if (req.user) {
        next()
    } else {
        res.redirect('/login')
    }
}

const app = express();
const blogs = [];
const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

var db = mongoose.connection;
db.on('error', (console.error.bind(console, 'connection error:')));
db.once('open', function() {
  console.log('connected to db');
});

const blogSchema = mongoose.Schema({
    _id: String,
    title: String
})
const userSchema = mongoose.Schema({
    email: String,
    password: String
})

const Blogs = mongoose.model('Blogs', blogSchema)
const User = mongoose.model('User', userSchema)

app.set('views', './views');
app.set('view engine', 'pug');

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', passport.authenticate('local'), function (req, res) {
    console.log("post user", req.user);
    res.redirect('/')
})

app.get('/users', checkLog, (req, res) => {
  logger.log({
      level: "info",
      url: req.url,
      date: new Date()
  });
  User.find(function (err, blogs) {
    if (err) return next(err)
    res.json(blogs)
  })
});

app.get('/blogs', (req, res) => {
  logger.log({
      level: "info",
      url: req.url,
      date: new Date()
  });
  Blogs.find(function (err, blogs) {
    if (err) return next(err)
    res.json(blogs)
  })
});

app.get('/blogs/:id', (req, res) => {
  logger.log({
      level: "info",
      url: req.url,
      date: new Date()
  });
  Blogs.findOne({_id: req.params.id},function (err, blogs) {
    if (err) return next(err)
    res.json(blogs)
  })
});

app.post('/blogs', (req, res) => {
  logger.log({
      level: "info",
      url: req.url,
      date: new Date()
  });
  let blog = new Blogs({title: req.body.title, _id: req.body.id});
  blog.save((err, blog) => {
      if (err) return next(err)
      res.json(blog);
  })
})

app.put('/blogs/:id', (req, res) => {
  logger.log({
      level: "info",
      url: req.url,
      date: new Date()
  });
  Blogs.findByIdAndUpdate(req.params.id, {title: req.body.title}, (err, blog) => {
      if (err) return next(err)
      res.json(blog)
  })
})

app.delete('/blogs/:id', (req, res, next) => {
  logger.log({
      level: "info",
      url: req.url,
      date: new Date()
  });
  Blogs.findOne({_id: req.params.id}, (err, blog) => {
      if (err) return next(err)
      if (!blog) return next(new Error())
      blog.remove((err, el) => {
          if (err) next(err)
          res.json(el);
      })
  })
})

app.get('/*', function (req, res) {
  console.log("get user", req.user);
  logger.log({
      level: "info",
      url: req.url,
      date: new Date()
  });
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
