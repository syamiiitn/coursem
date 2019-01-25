//import express 
var exp=require('express');
var app=exp();

//import path
var path=require('path');

//getting mongodb client object
//import body-perser
var bodyparser=require('body-parser');

//import mongodb driver
var mongoclient=require('mongodb').MongoClient;

//import bcrypt 
var bcrypt=require('bcrypt');

//import mongoose
var mongoose=require('mongoose');

var dbo;

var s;

var url="mongodb://vivekgoud:vivekgoud2212@ds013270.mlab.com:13270/coursewala"
//connect with coursewala db
mongoclient.connect(url,(err,client)=>{
    if(err)
    {
        console.log('error in db connection')
    }
    else
    {
        //get object of coursewala database
        dbo=client.db('coursewala');
        console.log('connected with db')
    }
})

app.use(bodyparser.json());
app.use(exp.static(path.join(__dirname,'dist/carouselwala')));


 
   // post request handler of registration form
app.post('/home/registration',(req,res,next)=>{
    console.log(req.body);
    dbo.collection('registration').find({name:req.body.name}).toArray((err,data)=>
    {
       
     //if user does not exist then hash password and save it
        if(data.length===0)
        {
        bcrypt.hash(req.body.password,10,(err,hashcode)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
             dbo.collection('registration').insertOne({ name:req.body.name,
                                                    email:req.body.email,
                                                    password:hashcode,
                                                    confirmpassword:hashcode,
                                                    contactno:req.body.contactno,
                                                    dateofbirth:req.body.dateofbirth,
                                                    gender:req.body.gender },()=>{
                                                       
                                                    res.json("registered successfully");
                                                       
                                                     })
                                                
            }
        })
        
        }
        else
        //if user exist already
        {
         res.json("username already existed...choose another name");
        }

    })
});
 



//request handler of login
app.post('/user/login',(req,res,next)=>
{
 dbo.collection('registration').find({name:req.body.name}).toArray((err,data)=>
 {
    s=req.body.name;
     
     if(err)
     {
         console.log(err);
     }
     else
     {
      if(data.length===0)
        {
         res.json('user not existed')
        }
        else
        {
         // if password matched then true is assigned to success else fals
         bcrypt.compare(req.body.password,data[0].password,(err,success)=>
         {
             if(err)
             {
                 console.log(err);
             }
             else if(success===true)
             {
                 res.json("logged in successfully")
             }
             else
             {
                 res.json("wrong password")
             }
         })   
        }
     }
 })   
})




//get data to the profile
app.get('/user/profile',(req,res,next)=>{
  dbo.collection('registration').find({name:s}).toArray((err,data)=>{
      if(err)
      {
          console.log(err);
      }
      else{
          res.send(data);
      }
  })
})

//request handler for userprofile update
app.put('/user/profile',(req,res)=>
{
    console.log(req.body);
    //object received from client
    

    //converting string id into object
    console.log(req.body._id);
    var objectid=new mongoose.Types.ObjectId(req.body._id);
    console.log(objectid);

    //updating document in database
    dbo.collection('registration').update({_id:objectid},{$set:
                                            {name:req.body.name,
                                             email:req.body.email,
                                             dateofbirth:req.body.dateofbirth,
                                              contactno:req.body.contactno}},(err,success)=>
                                              {
                                                if(err)
                                                {
                                                 console.log(err);
                                                } 
                                                else
                                                {
                                              dbo.collection('registration').find({}).toArray((err,data)=>
                                                {
                                                    if(err)
                                                    {
                                                        console.log(err)
                                                    }
                                                    else
                                                    {
                                                        res.json(data);
                                                    }
                                                })          
                                                }
                                              })
})
 

//get subscriber data to server from db
app.get('/admin/subscribers',(req,res,next)=>{
    dbo.collection('registration').find({}).toArray((err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.json(data)
        }
    })
})



//post course data to db 
app.post('/admin/course',(req,res,next)=>{
    dbo.collection('courses').insert(req.body),()=>{}
})


//get courses from db
app.get('/admin/course',(req,res,next)=>{
    dbo.collection('courses').find({name:s}).toArray((err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.json(data)
        }
    })
})


//updating document in database
app.put('/admin/course',(req,res)=>{

    //object received from client
    console.log(req.body);

    //converting string id into objectid
    console.log(req.body._id);
    var objectid=new mongoose.Types.ObjectId(req.body._id);
    console.log(objectid);

    
    dbo.collection('courses').updateOne({_id:objectid},{$set:{
                                                          coursename:req.body.coursename,
                                                          authorname:req.body.authorname,
                                                          adetailes:req.body.adetailes,
                                                          img:req.body.img,
                                                          price:req.body.price,
                                                          use:req.body.use,
                                                          file:req.body.file,
                                                          mainfile:req.body.mainfile}},(err,success)=>{
                                                              if(err)
                                                              {
                                                                  console.log('error is '+err)
                                                              }
                                                              else
                                                              {
                                                          dbo.collection('courses').find({}).toArray((err,data)=>{
                                                              if(err)
                                                              {
                                                                  console.log(err)
                                                              }
                                                              else
                                                              {
                                                                  res.json(data)
                                                              }
                                                          })        
                                                              }
                                                          })
})

//delete operatino of courses in db
app.delete('/admin/course',(req,res)=>{
    console.log(req.body);
dbo.collection('courses').remove({coursename:req.body.coursename},(err,success)=>{
    if(err)
    {
        console.log('err is occure')
    }
    else
    {
        dbo.collection('courses').find({coursename:req.body.coursename}).toArray((err,data)=>{
            if(err)
            {
                console.log('error is occure')
            }
            else
            {
                res.json(data);
                console.log('data deleted');
            }
        })
    }
})
})


//get course data to java component from db
app.get('/home/java',(req,res,next)=>{
    dbo.collection('courses').find({name:s}).toArray((err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.json(data)
        }
    })
})




app.listen(2212,()=>{
    console.log('server is listening');
});