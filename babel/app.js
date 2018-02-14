const express = require('express');
const bodyParser = require('body-parser');
const uniqid = require('uniqid');
const winston = require('winston');
const passport = require('passport');
const Strategy = require('passport-http-bearer').Strategy;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');



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

passport.use(new Strategy(
  function(token, done) {
      console.log('yessss');
    User.findOne({ token: token }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user, { scope: 'all' });
    });
  }
));

app.use(bodyParser.json());
app.set('views', './views');
app.set('view engine', 'pug');

app.post('/login', passport.authenticate('bearer', { session: false }), (req, res) => {
    console.log('wait');
})

app.get('/users', (req, res) => {
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
  for (let i = 0; i < req.body.length; i++) {
      let blog = new Blogs({title: req.body[i].title, _id: req.body[i].id});
      blog.save((err, blog) => {
          if (err) return next(err)
      })
  }
  Blogs.find(function (err, blogs) {
    if (err) return next(err)
    res.json(blogs)
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

app.get('/*', (req, res) => {
  logger.log({
      level: "info",
      url: req.url,
      date: new Date()
  });
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.use((err, req, res, next) => {
    err.stack = null;
    res.status(500).send({ error: err.stack })
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
