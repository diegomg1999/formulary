
function validacion() {
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido')
    const email = document.getElementById('email');
    const edad = document.getElementById('edad');
    const carrera = document.getElementById('carrera')
    let genero = document.querySelector('input[name="genero"]:checked');

    if (nombre.value === "") {
        alert('Debes insertar un Nombre');
        return false;
    } 
    if (apellido.value === ""){
        alert('Debes insertar un Apellido');
        return false;
    }
    if (email.value === ""){
        alert('Debes ingresar un Email correcto');
        return false;
    }
    if (edad.value < 1 || edad.value > 120){
        alert('Debes ingresar una edad dentro de los parametros');
        return false;
    }
    if (carrera.value === "Sin carrera") {
        alert('Debes ingresar una carrera valida');
        return false;
    }
    if(!genero) {
        alert ('Elige un genero');
        return false;        
    }

    alert('Tus datos han sido entregados con exito');
    return true;
}