var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
//var router 		= express.Router();

app.use(bodyParser.urlencoded({extended:true})); //to extended chars (UNICODE)
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/', function(req, res){
	res.sendFile('/public/index.html');
});


var router = express.Router();

//  User side
app.use('/api/form', require('./app/router/forms'));


//start server
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening on port ' + port);