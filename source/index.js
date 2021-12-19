const express=require('express');
const res = require('express/lib/response');
const app=express();

//server port
const port=process.env.PORT || 5000;
const path=require('path');
app.use(express.static(__dirname+'/public/'));

//routes
app.get('/',(req,res) =>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/index.html'));
});

app.get('/datosLaboratorio' , (req, res) =>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/datosLaboratorio.html'));
});

app.listen(port,()=>console.log('hola mundo'));
app.get('/Administracion',(req,res)=>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/administracion.html'));
})

