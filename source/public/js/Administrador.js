
function nuevoExamen(){
    try {
        location.href="/Administracion/NuevoExamen"    
        response=> console.log('Sucess',response);
    } catch (error) {
        error =>console.error('Error: ',error)    
    }
    
    
}
function nuevoUsuario(){
    location.href="/Administracion/CrearUsuario";
}
function editarPerfil(usuario){
    location.href="/Administracion/EditarPerfil";
}

function reporteFinanciero(fechaInicial,fechaFinal){

}

function reporteExamenes(fechaInicial,fechaFinal){

}