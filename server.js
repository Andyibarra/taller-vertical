var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
//var router 		= express.Router();

app.use(bodyParser.urlencoded({extended:true})); //to extended chars (UNICODE)
app.use(bodyParser.json());
app.use(express.static('public'));



//test : db.regtest.insert({"name":"Rogelio", "lname":"Quesos", email:"rog_quesos@gmail.com", "nationality":"North American", "Comments":"fdsfsfsdfsfdf","especiality":"pediatrician", "center":"Colima"})
//doing some middleware

app.get('/', function(req, res){
	res.sendFile('/public/index.html');
});

app.get('/admin', function(req, res){
	res.sendFile(__dirname + '/public/views/admin/index.html');
});

var router = express.Router();

app.use(function(req, res, next){

	 // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Accept');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();

});

//  User side
app.use('/api/form', require('./app/router/forms'));


//start server
var port = process.env.PORT || 80;
app.listen(port);
console.log('Listening on port ' + port);