//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function login() {
    let usuario = document.getElementById("usuario").value 
    console.log(usuario)
    let clave = document.getElementById("clave").value
    console.log(clave)

    if (usuario == '' || clave == '') { 
        document.getElementById("alerta").innerHTML=`
        <div class="alert alert-danger" role="alert">
        Campo vacío!
        </div>
        `   
    }
        else { 
            window.location.href = "home.html"
        }
}

document.addEventListener("DOMContentLoaded", function(e){

});