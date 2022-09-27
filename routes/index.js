const router = require('express').Router();
const path = require('path');
const catchAsync = require('./../utils/catchAsync');

router.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, '../public/index.html'));
  res.render('index', { title: 'MyApp ' });
});

router.get('/task', (req, res, next) => {
  // res.sendFile(path.resolve(__dirname, '../public/task.html'));
  res.render('task', { title: 'Task' });
});

module.exports = router;
