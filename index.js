const express = require('express')
const app = express()
app.set('view-engine', 'ejs')
const router = express.Router();
app.use(express.static('public'))

app.get('/hi', function(req, res) {
  res.render('dl.ejs');
});
app.get('/moodbooster', function(req, res) {
  res.render('moodbooster.ejs');
});
app.get('/moodbooster/old', function(req, res) {
  res.render('moodbooster-old.ejs');
});
app.listen(1000)