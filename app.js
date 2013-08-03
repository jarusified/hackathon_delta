var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/',function(req,res){
	res.render("register.jade");
});

app.get('/bid',function(req,res){
	res.render("bid.jade");
});

app.post('/',function(req,res){
	var username=req.body.username;
	mongo.connect('mongodb://localhost:27017/users_h',{auto_reconnect:true},function(err,db){
	  if(err) throw err;
	  var link=db.collection('users_h');
	  link.insert({uname:username, password:password, confpassword:confpassword},function(err,doc){
		if(err) throw err;
		else{
			res.redirect('/registration_complete');
			
		}
	  });
    });



})

app.post('/bid')
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
