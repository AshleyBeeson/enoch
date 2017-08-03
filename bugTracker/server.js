const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var Bug = require('./models/bug');
const routes = require('./routes/api');

const app = express();




var port = 3001;


mongoose.connect('mongodb://localhost/buglist');
mongoose.Promise=global.Promise;


app.use(express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api',routes);

//error handling
app.use(function(err,req,res,next){
res.status(422).send({error:err.message});

});

app.get('/*',function(req,res){
	res.sendFile(__dirname + '/public/index.html')
});


app.listen(port,function(){
	console.log('app running on port' + port);
});