let boton = document.getElementById("saludar");

boton.addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value;
    if (nombre.trim() === "") {
        document.getElementById("resultado").textContent = 
        "por favor, escribe tu nombre.";
    }else{
        document.getElementById("resultado").textContent =
        "¡hola," + nombre + "! Bienvenido a la programación.";
    }
});