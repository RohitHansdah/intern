var http = require('http');
var app = http();
app.get('/',function(req,res)
{
    res.sendfile('home.html');
})
app.get('/signup',function(req,res)
 {
    res.sendfile('signup.html');
 })
 app.get('/login',function(req,res)
 {
    res.sendfile('login.html');
 })
 app.listen('3000',()=>
 {
     console.log("server is working");
 })

