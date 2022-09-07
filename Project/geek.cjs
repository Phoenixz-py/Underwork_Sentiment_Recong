
// Requiring express npm package
const express = require('express')

const app = express()

// Using express.urlencoded middleware
app.use(express.urlencoded({
    extended: true
}))

// Handling Post request
app.post('/submit',function(req,res){


    // Can access all parameters from req.body
    console.log('POST parameter recieved are: ',req.body)

const fs = require('fs');  
const child_process = require('child_process');  

 for(var i=0; i<1; i++) {  
    var workerProcess = child_process.spawn('python', ['hello.py']);  
  workerProcess.stdout.on('data', function (data) {  
      console.log('stdout: ' + data);  
   });  
 workerProcess.stderr.on('data', function (data) {  
      console.log('stderr: ' + data);  
   });  
 workerProcess.on('close', function (code) {  
      console.log('child process exited with code ' + code);  
   });  
} 

    res.redirect('/')
})

// Get request 
app.get('/',function(req,res){
    
    // Sent index.html file to the client
    res.sendFile(__dirname+'/post.html')
})

// Creating server at port 3000

app.listen(3000,function(req,res){
    console.log('started listening at server 3000')
})