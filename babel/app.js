const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const connect = require('connect-ensure-login');
mongoose.connect('mongodb://localhost/test');

passport.use(new Strategy((username, password, cb) => {
    User.findOne({username, password}, (err, user) => {
        if (err) return cb(err)
        if (!user) { return cb(null, false); }
        return cb(null, user);
    })
}));

passport.serializeUser((user, cb) => {
    cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
    User.findOne({_id: id}, (err, user) => {
        if (err) { return cb(err); }
        cb(null, user);
    });
});

const app = express();

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

const db = mongoose.connection;
db.on('error', (console.error.bind(console, 'connection error:')));
db.once('open', () => {
  console.log('connected to db');
});

const blogSchema = mongoose.Schema({
    _id: String,
    title: String
})
const userSchema = mongoose.Schema({
    username: String,
    password: String
})

const Blogs = mongoose.model('Blogs', blogSchema)
const User = mongoose.model('User', userSchema)

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    logger.log({
        level: "info",
        url: req.url,
        date: new Date()
    });
    next();
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', passport.authenticate('local'), (req, res) => {
    res.redirect('/')
})

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', (req, res, next) => {
  if (req.body.password1 !== req.body.password2) {
    res.redirect('/register')
  } else {
    User.findOne({username: req.body.username}, (err, user) => {
      if (user) {
        res.redirect('/register')
      } else {
        new User({username: req.body.username, password: req.body.password1}).save((err, user) => {
          res.redirect('/login')
        })
      }
    })
  }
})

app.get('/users', connect.ensureLoggedIn(), (req, res) => {
  User.find((err, blogs) => {
    if (err) return next(err)
    res.json(blogs)
  })
});

app.get('/blogs',(req, res) => {
  Blogs.find((err, blogs) => {
    if (err) return next(err)
    res.json(blogs)
  })
});

app.get('/blogs/:id', (req, res) => {
  Blogs.findOne({_id: req.params.id}, (err, blogs) => {
    if (err) return next(err)
    res.json(blogs)
  })
});

app.post('/blogs', (req, res, next) => {
  let blog = new Blogs({_id: req.body.id, title: req.body.title});
  blog.save((err, blog) => {
      if (err) return next(err)
      res.json(blog);
  })
})

app.put('/blogs/:id', (req, res) => {
  Blogs.findByIdAndUpdate(req.params.id, {title: req.body.title}, (err, blog) => {
      if (err) return next(err)
      res.json(blog)
  })
})

app.delete('/blogs/:id', (req, res, next) => {
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
  res.render('index', { title: 'Hey', message: 'Hello there!', user: req.user });
});

app.use((err, req, res, next) => {
    err.stack = null;
    console.error(err);
    res.status(500).send({err: err.stack})
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
