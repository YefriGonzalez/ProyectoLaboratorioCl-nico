const administrador=require('./public/js/Administrador');
const admin=Object.create(administrador);
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

//listening server
app.listen(port,()=>console.log('Servidor encendido'));
app.get('/Administracion',(req,res)=>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/administracion.html'));
    console.log("Prerequisito: Inicio de Sesion");
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

//Administración
app.get('/NuevoExamen',(req,res)=>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/TipoExamen.html'))
    console.log("Prerequisito: 1)Inicio de sesion 2)Boton Nuevo tipo de Examen")
});

//Creando mi endpon para el area de secretaria
app.get('/Secretaria',(req,res)=>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/Secretaria/AreaSecretaria.html'))
});