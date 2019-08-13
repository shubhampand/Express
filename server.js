const express=require('express');
// creating express application
const app=express();
// create and start node server
app.listen(4502,()=>{
console.log("server started......");
});
app.use(express.static('public'));
//configure view engine :hbs
var path=require('path');
app.set('views',path.join(__dirname,'views')); //location
app.set('view engine','hbs'); //extension
app.get('/',(request,response)=>{
	//response.end("<h1>hello Node js</h1>");
//transfer request to html page
response.render('index');//1- extensiom 2-location
});
//configure body parser
const bodyparser= require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended:true

}));
app.post('/logincheck',(request,response)=>{
	var userid=request.body.uid;
	var pass=request.body.pwd;
	if(userid=="admin" && pass=="admin")
		response.render('index',{msg:'login Success'});
	else
		response.render('index',{msg:'login Fail'});
});