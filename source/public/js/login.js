const mysql=require('mysql'); 
const swal=require("sweetalert");
const {connection}=require("./index");
async function login(){
    try{
        const user=document.getElementById("user").value;
        const password=document.getElementById("password").value;
        const consulta='SELECT *FROM usuario WHERE nombre_usuario=? AND contraseña=?'
        const result=connection.query(consulta,user,password);
        alert(user,password);
    } catch(error){
        alert('Datos incorrectos')
        console.log(error)
        alert(error)
    }
}