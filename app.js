var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

app.listen(3000, () => console.log('listening'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('script', {
    test: req.query.param,
  });
});
