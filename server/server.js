
const express = require('express');
const path = require('path');

//console.log(__dirname + '/../public');
// path to solve path solutions  / nodejs module ..no installations
 const publicPath = path.join(__dirname + '/../public');
 console.log(publicPath);
 var app = express();

 var port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port,()=>{
    console.log(`connected to port ${port}`);
 });

//console.log( publicPath );

  