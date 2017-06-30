// npm init -y
// npm install --save express morgan pug body-parser
// pug lets you render html templates

var express = require('express');

// this is middleware, it parses body of request to turn it into a js obj
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'pug');

// request is given data
// response is response body

app.get('/', function(request, response){
  response.send('Hello World!');
  // can send back a string with a shitton of html
});

app.get('/names/:name', function(req, res){
  res.send(`Your name is ${req.params.name}`);
});

app.get('/happy', function(req, res){
  res.render('happy', {number: 5});
});

app.post('/blah', function(req, res){
  // res.send(req.body);
});

app.listen(3000, function(){
  console.log("The server has started on port 3000. Head to localhost:3000 in the browser")
});

// activate with node app.js, sets up localhost.
// or nodemon (make sure npm install -g nodemon works)


// questions send to tim@rithmschool.com
