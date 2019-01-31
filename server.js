//athendication for login
//import express
const exp=require('express');

const app=exp();

//import path
const path=require('path');

//import body-perser
var bodyparser=require('body-parser');

//import http
const http=require('http');

//import mongoose
var mongoose=require('mongoose');

//import jwt 
const jwt=require('jsonwebtoken')

//import api 
const api=require('./server/route/api');

//perser for post data
app.use(bodyparser.json());
// app.use(bodyParser.urlencoded({extended:false}));

//point static path to dist
app.use(exp.static(path.join(__dirname,'dist/carouselwala')));

//set our api route
app.use('/api',api);

//catch all other routes & return the index file
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/carouselwala/index.html'));
});

//get post from environment & store in express
const port=process.env.PORT || '1122';
app.set('port',port);

//creat Http server
const server=http.createServer(app);

//listen on provided port,on all network interfaces
//server.listen(port,()=>console.log('API running on localhost:${port}'));


app.listen(port,()=>{
    console.log('server is listening');
});