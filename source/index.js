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

//Laboratorio
app.get('/datosLaboratorio' , (req, res) =>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/datosLaboratorio.html'));
});

app.get('/ingresoDatos' , (req, res) =>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/ingresoDatos.html'));
});

app.get('/resultadoExamen' , (req, res) =>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/examenLab.html'));
});

app.listen(port,()=>console.log('hola mundo'));
app.get('/Administracion',(req,res)=>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/administracion.html'));
});