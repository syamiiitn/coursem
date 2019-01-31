
var exp=require('express');

const app=exp();

//import express 
var exp=require('express');


//import path
var path=require('path');

//getting mongodb client object
//import body-perser
var bodyparser=require('body-parser');

//import mongodb driver
var mongoclient=require('mongodb').MongoClient;

//import jwt 
const jwt=require('jsonwebtoken')


//import bcrypt 
var bcrypt=require('bcrypt');

//import mongoose
var mongoose=require('mongoose');

//import mongodb
var mongoclient=require('mongodb').MongoClient;


var k="secretKey"


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
var v={};

//request handler of login
app.post('/home/login',(req,res,next)=>
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
            v=req.body.name;
             //TO GENERATE TOKEN 
             var jwtBearToken=jwt.sign({name:req.body.name},k,{expiresIn:60*60*24*7});
             console.log('token is '+jwtBearToken);
             res.status(200).json({idToken:jwtBearToken});
     
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


//checking for validation of token
let checkToken=(req,res,next)=>
{
    //capture headers with name 'X-access-token'or'authorization'
    //express headers are auto converted to lowercase
    let token=req.headers['x-access-token'] || req.headers['authorization'];
   
    if(token===undefined)
    {
        return res.json({message:'no token found'});

    }
   
    if(token.startsWith('Bearer '))
    {
        //remove Bearer from string
        token=token.slice(7,token.length);
        console.log(token);
    }
   
    //using jwt package $ secret string, validate the token
    if(token!==undefined)
    {
     jwt.verify(token,k,(err,decoded)=>{
         //if anything is goes wrong.return on err immediatly before passing control to next
         if(err)
         {
             return res.json({message:'token is not valid'});
         }
         else
         {
             req.decoded=decoded;
             console.log(res,decoded);
             next();
         }
     });
    }
}


//get data to the profile
app.get('/user/profile',checkToken,(req,res,next)=>{
  dbo.collection('registration').find({name:req.decoded.name}).toArray((err,data)=>{
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
app.put('/user/profile',checkToken,(req,res)=>
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



//post course data to database 
app.post('/admin/course',(req,res,next)=>{
    
    dbo.collection('courses').insert(req.body),()=>{}
})


//get courses from db
app.get('/admin/course',(req,res,next)=>{

    console.log(req.body)
    dbo.collection('courses').find({}).toArray((err,data)=>{
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
app.put('/admin/course',checkToken,(req,res)=>{

    //object received from client
   
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


//cart operation of java component code
//get course data to java component
app.get('/user/java',(req,res)=>{
    dbo.collection('courses').find({coursename:"java"}).toArray((err,data)=>{
       
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(data);
        }
    })
})

//post data into perticular user collections
app.post('/user/java',(req,res)=>{
    dbo.collection(v).insert(req.body,(err,success)=>{
        if(err)
        {
            console.log('err in post')
        }
        else
    {
        res.json("success")
    }
    })
})

//get data into cart
app.get('/user/cart',(req,res)=>{
    dbo.collection(v).find({}).toArray((err,data)=>{
        if(err)
        {
            console.log('err in cart')
        }
        else
    {
        res.send(data)
    }
    })
})


//cart operation of c list component code
//get course data to c component
app.get('/user/clist',(req,res)=>{
    dbo.collection('courses').find({coursename:"c"}).toArray((err,data)=>{
       
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(data);
        }
    })
})



//post data into perticular user collections
app.post('/user/clist',(req,res)=>{
    dbo.collection(v).insert(req.body,(err,success)=>{
        if(err)
        {
            console.log('err in post')
        }
        else
    {
        res.json("success")
    }
    })
})

//get data into cart
app.get('/user/cart',(req,res)=>{
    dbo.collection(v).find({}).toArray((err,data)=>{
        if(err)
        {
            console.log('err in cart')
        }
        else
    {
        res.send(data)
    }
    })
})




//cart operation of html  component code
//get course data to html component
app.get('/user/html',(req,res)=>{
    dbo.collection('courses').find({coursename:"html"}).toArray((err,data)=>{
       
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(data);
        }
    })
})



//post data into perticular user collections
app.post('/user/html',(req,res)=>{
    dbo.collection(v).insert(req.body,(err,success)=>{
        if(err)
        {
            console.log('err in post')
        }
        else
    {
        res.json("success")
    }
    })
})

//get data into cart
app.get('/user/cart',(req,res)=>{
    dbo.collection(v).find({}).toArray((err,data)=>{
        if(err)
        {
            console.log('err in cart')
        }
        else
    {
        res.send(data)
    }
    })
})



//cart operation of css list component code
//get course data to css component
app.get('/user/css',(req,res)=>{
    dbo.collection('courses').find({coursename:"css"}).toArray((err,data)=>{
       
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(data);
        }
    })
})



//post data into perticular user collections
app.post('/user/css',(req,res)=>{
    dbo.collection(v).insert(req.body,(err,success)=>{
        if(err)
        {
            console.log('err in post')
        }
        else
    {
        res.json("success")
    }
    })
})

//get data into cart
app.get('/user/cart',(req,res)=>{
    dbo.collection(v).find({}).toArray((err,data)=>{
        if(err)
        {
            console.log('err in cart')
        }
        else
    {
        res.send(data)
    }
    })
})


//cart operation of angular  component code
//get course data to angular component
app.get('/user/angular',(req,res)=>{
    dbo.collection('courses').find({coursename:"angular"}).toArray((err,data)=>{
       
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(data);
        }
    })
})



//post data into perticular user collections
app.post('/user/angular',(req,res)=>{
    dbo.collection(v).insert(req.body,(err,success)=>{
        if(err)
        {
            console.log('err in post')
        }
        else
    {
        res.json("success")
    }
    })
})

//get data into cart
app.get('/user/cart',(req,res)=>{
    dbo.collection(v).find({}).toArray((err,data)=>{
        if(err)
        {
            console.log('err in cart')
        }
        else
    {
        res.send(data)
    }
    })
})


//cart operation of C++  component code
//get course data to C++ component
app.get('/user/ccprog',(req,res)=>{
    dbo.collection('courses').find({coursename:"c++"}).toArray((err,data)=>{
       
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(data);
        }
    })
})



//post data into perticular user collections
app.post('/user/ccprog',(req,res)=>{
    dbo.collection(v).insert(req.body,(err,success)=>{
        if(err)
        {
            console.log('err in post')
        }
        else
    {
        res.json("success")
    }
    })
})

//get data into cart
app.get('/user/cart',(req,res)=>{
    dbo.collection(v).find({}).toArray((err,data)=>{
        if(err)
        {
            console.log('err in cart')
        }
        else
    {
        res.send(data)
    }
    })
})


module.exports=app;