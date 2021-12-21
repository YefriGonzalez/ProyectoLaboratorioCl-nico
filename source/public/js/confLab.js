function abrirURL(url, contenedor){
    $.get(url,{},function(data){
        $("#"+contenedor).html(data);
    });
}

//Mostrando los datos en consola
//
function mostrarDatosLaboratorio(){
let inputNumber4=document.getElementById("No. Afiliacion").value;
console.log(inputNumber4);
alert("Datos guardados con éxito");
}