import promptSync from 'prompt-sync'; // e6 version js
const prompt = promptSync({sigint: true}); 
import { a } from 'file://D:\\Kaizaku\\Project\\public\\function\\work.js';

import express from 'express';
import es6Renderer from 'express-es6-template-engine';
const app = express();

app.use(express.static('public'));
app.engine('html', es6Renderer);
app.set('/html/struct', 'views');
app.set('view engine', 'html');
 
app.get('/', function(req, res) {
  res.render('struct'); // input lega
});

app.get('/button', function(req, res){
  
  res.render('Hello')
  console.log(`Hello ${a}`)

})
//rendering Discover page

 app.get('/send', function(req, res){
     res.render('post')
 })
app.listen(8080);