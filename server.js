
var express = require('express');
var app = express();

app.use(express.static('public'));


app.get("/", function (request, response) {
  
  var ipRaw = request.headers['x-forwarded-for'];
  var ipArr = ipRaw.split(/,/);
  var ip = ipArr[0];
  
  var lang = request.headers["accept-language"]
  
  var osRaw = request.headers["user-agent"];
  var osArr = osRaw.split(/[()]+/).filter(function(e) { return e; });
  var os = osArr[1];
  
  var output = {"IP":ip, "Lang":lang, "OS": os}
  
  response.send(output);
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
