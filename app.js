var express = require('express');

var app = express();

app.listen(3000, () => console.log('listening'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('script', {
    test: req.query.param,
  });
});
