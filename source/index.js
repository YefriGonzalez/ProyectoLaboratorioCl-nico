const express=require('express');
const res = require('express/lib/response');
const app=express();
const port=process.env.PORT || 5000;
const path=require('path');
app.use(express.static(__dirname+'/public/'));
app.get('/',(req,res) =>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/index.html'));
})

app.listen(port,()=>console.log('hola mundo'));