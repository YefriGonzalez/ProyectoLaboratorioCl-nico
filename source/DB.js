const { default: swal } = require("sweetalert");
const connection=require('./index');
alert("hoa")
function verificarLogin(){
    alert("hoa")
    try{
        alert("hoa")
        const user=document.getElementById("user").value;
        const password=document.getElementById("password").value;
        const consulta='SELECT *FROM usuario'
        const resutl= consulta.query(consulta,user,password);
        swal('Inicio Correcto')
    } catch(error){
        console.log(error)
    }
}