function abrirURL(url, contenedor){
    $.get(url,{},function(data){
        $("#"+contenedor).html(data);
    });
}

//Mostrando los datos en consola
//ingreso de paciente
function mostrarDatosLaboratorio(){
let No_Orden=document.getElementById("Orden").value;
let No_Afiliacion=document.getElementById("Afiliacion").value;
let Fecha_Ingreso=document.getElementById("FechaIngreso").value;
let Fecha_Nacimiento=document.getElementById("FechaNacimiento").value;
let Nombre=document.getElementById("Nombre").value;
let Fecha_Muestra=document.getElementById("FechaMuestra").value;
let Sexo=document.getElementById("Sexo").value;
let Direccion=document.getElementById("Direccion").value;
let Edad=document.getElementById("Edad").value;
let Telefono=document.getElementById("Telefono").value;
let Referido_Por=document.getElementById("Referido").value;
let Codigo=document.getElementById("Codigo").value;
console.log(No_Orden);
console.log(No_Afiliacion);
console.log(Fecha_Ingreso);
console.log(Fecha_Nacimiento);
console.log(Nombre);
console.log(Fecha_Muestra);
console.log(Sexo);
console.log(Direccion);
console.log(Edad);
console.log(Telefono);
console.log(Referido_Por);
console.log(Codigo);
alert("Datos guardados con éxito");
}