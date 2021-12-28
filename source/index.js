

const express=require('express');
const res = require('express/lib/response');
const app=express();
const connection=require('./Connection');
const bodyParser = require('body-parser');
const Swal=require('sweetalert2');
//server port
const port=process.env.PORT || 5000;
const path=require('path');
const expressSession = require('express-session')
const { Console } = require('console');
app.use(expressSession({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public/'));
//routes
app.get('/',(req,res) =>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/index.html'));
});

//listening server
app.listen(port,()=>console.log('Servidor encendido'));
app.get('/Administracion',(req,res)=>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/Administracion/administracion.html'));
    console.log("Prerequisito: Inicio de  sesion")
    
});

//Laboratorio
app.get('/datosLaboratorio' , (req, res) =>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/Laboratorista/datosLaboratorio.html'));
    console.log("Prerequisito: Inicio de sesión");
});

app.get('/ingresoDatos' , (req, res) =>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/Laboratorista/ingresoDatos.html'));
    console.log("Prerequisito: 1.Inicio de sesion 2. LLenar campos 3. Boton guardar paciente")
});

app.get('/resultadoExamen' , (req, res) =>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/Laboratorista/examenLab.html'));
    console.log("Prerequisito: 1.Inicio de sesion 2. LLenar campos 3. Boton guardar resultados")
});

//Administración
app.get('/Administracion/NuevoExamen',(req,res)=>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/Administracion/TipoExamen.html'))
    console.log("Prerequisito: 1.Inicio de sesion 2. Boton Nuevo tipo de examen")
});

//Creando mi endpon para el area de secretaria
app.get('/Secretaria',(req,res)=>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/Secretaria/AreaSecretaria.html'))

    console.log("Prerequisito Inicio de sesión")
});

//Creación endpon para el área de ingreso de datos
app.get('/Secretaria/IngresarDatos',(req,res)=>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/Secretaria/IngresarDatos.html'))

    console.log("Prerequisito: 1. A ver ingresado al área de secretaria 2.Boton Ingresar datos del paciente y realizar cobro")
});

//Creacion endpon para el área imprimir resultados
app.get('/Secretaria/ImprimirResultados',(req,res)=>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/Secretaria/ImprimirResultados.html'))
    console.log("Prerequisito:1.A ver ingresado al área de secretaria 2.Boton Imprimir resultados de paciente")
});

//Creacion endpon para el área modificar Datos
app.get('/Secretaria/ModificarDatos',(req,res)=>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/Secretaria/ModificarDatos.html'))
    console.log("Prerequisito:1.A ver ingresado al área de secretaria 2.Boton Modificar datos paciente")
});

app.get('/Administracion/CrearUsuario',(req,res)=>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/Administracion/CrearUsuario.html'))
    console.log("1. Iniciar Sesion 2.Boton crear usuario");
});

app.get('/Administracion/EditarUsuario',(req,res)=>{
    res.status(201).sendFile(path.join(__dirname,'/public/html/Administracion/EditarUsuario.html'));
    console.log("1.Iniciar Sesion 2. Boton editar Usuario");
});
module.exports=connection;


app.post('/Verify',function(req,res){
    const user=req.body.username;
    const pass=req.body.password;
    if(user && pass){
        const consulta='SELECT *FROM usuario WHERE password=? AND nombre_usuario= ?';
        connection.query(consulta,[pass,user],function(error,results,fields){
            if(error){
                console.log(error);
            }else{
                if(results.length>0){
                    console.log(results[0].tipo);
                    if(results[0].tipo==1 && results[0].estado==1){
                        res.redirect('/Administracion');
                    }else if(results[0].tipo==2 && results[0].estado==1){
                        res.redirect('/datosLaboratorio');
                    }else if(results[0].tipo==3 && results[0].estado==1){
                        res.redirect('/Secretaria');
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Contraseña o Usuario incorrectos',
                        });
                        res.redirect("/")
                    }
                }else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Contraseña o Usuario incorrectos',
                    });
                    res.redirect('/');
                }
            }
            res.end();
        });
    }else {
        Swal("Porfavor Ingrese un usuario y contraseña");
        res.end();
    }
});
