var express = require('express');
var app = new express();

app.use(express.static('app'));

app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500).json({success:false, data:'internal server error'});
});

var port = process.env.PORT || 1111;
app.listen(port);
console.log('server running at port - ' + port);