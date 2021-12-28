
function IngresoDatosPaciente(){
    try {
        location.href="/Secretaria/IngresarDatos"   
        response=>console.log('Sucess',response);
    } catch (error) {
        alert(error)
        console.error('Error: ',error)    
    }

}

function ImprimirResultadosPaciente(){  
    location.href="/Secretaria/ImprimirResultados";  
    response=>console.log('Sucess',response);
}

function ModificarDatosPaciente(){
    try{
        location.href="/Secretaria/ModificarDatos";  
        response=>console.log('Sucess',response);
    } catch (error) {
        console.error('Error: ',error)
    }
}

function GuardarDatosPaciente(){

}

function ImprimirResultados(){
    
}

function ModificarDatos(){}


