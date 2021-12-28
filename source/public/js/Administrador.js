
function nuevoExamen(){
    try {
        location.href="/Administracion/NuevoExamen"   
        console.log('Sucess',response);
    } catch (error) {
        console.error('Error: ',error)    
    }
}
function nuevoUsuario(){
    try {
        location.href="/Administracion/CrearUsuario";
        response=> console.log('Sucess',response);
    } catch (error) {
        console.error('Error: ',error)
    }
    
}
function editarPerfil(){
    const user=document.getElementById("usuario").value;
    try {
        location.href="/Administracion/EditarPerfil";    
        response=> console.log('Sucess',response);
    } catch (error) {
        console.error('Error: ',error)
    }
    
}

function reporteFinanciero(){
    const fechaInicioFinanciero=document.getElementById("fechaInicioFinanciero").value;
    const fechaFinFinanciero=document.getElementById("fechaFinFinanciero").value;
}

function reporteExamenes(){
    const fechaInicialExamenes=document.getElementById("fechaInicialExamenes").value;
    const fechaFinalExamenes=document.getElementById("fechaFinalExamenes").value;
}