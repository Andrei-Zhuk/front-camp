const express = require('express');
const bodyParser = require('body-parser');
const uniqid = require('uniqid');
const winston = require('winston');

const app = express();
const blogs = [];
const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

app.use(bodyParser.json());
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/blogs', (req, res) => {
  logger.log({
      level: "info",
      url: req.url,
      date: new Date()
  });
  res.json(JSON.stringify(blogs));
});

app.get('/blogs/:id', (req, res) => {
  logger.log({
      level: "info",
      url: req.url,
      date: new Date()
  });
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].id === req.params.id) {
      res.json(JSON.stringify(blogs[i]));
      return;
    }
  }
  res.send(`blog ${req.params.id} doesnt exist`);
});

app.post('/blogs', (req, res) => {
  logger.log({
      level: "info",
      url: req.url,
      date: new Date()
  });
  req.body.map((el) => {
    el.id = uniqid();
    return el;
  })
  blogs.push(...req.body)
  res.json(JSON.stringify(req.body));
})

app.put('/blogs/:id', (req, res) => {
  logger.log({
      level: "info",
      url: req.url,
      date: new Date()
  });
  if (blogs.some((el) => el.id === req.params.id)) {
    res.send(`blog ${req.params.id} already exists`);
  } else {
    var blog = {
      id: req.params.id,
      ...req.body
    };
    blogs.push(blog);
    res.json(JSON.stringify(blog));
  }
})

app.delete('/blogs/:id', (req, res) => {
  logger.log({
      level: "info",
      url: req.url,
      date: new Date()
  });
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].id === req.params.id) {
      res.json(JSON.stringify(blogs[i]));
      blogs.splice(i, 1);
      return;
    }
  }
  res.send(`blog ${req.params.id} doesnt exist`);
})

app.get('/*', (req, res) => {
  logger.log({
      level: "info",
      url: req.url,
      date: new Date()
  });
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
