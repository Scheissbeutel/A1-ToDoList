document.getElementById("addTask").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let taskList = document.getElementById("taskList");
        let li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }
});





function actualizarHora(){
    const opciones = { timeZone: 'America/Argentina/Buenos_Aires', hour12: false};
    const fecha = new Date().toLocaleTimeString('es-AR', opciones);
    document.getElementById('hora').textContent = fecha;
}

//Metodo para actualizar la hora cada segundo

setInterval(actualizarHora, 1000);

//Llamamos a la funcion una vez para que la hora aparezca de una

actualizarHora();


function actualizarFecha() {
    const opciones = { timeZone: 'America/Argentina/Buenos_Aires', year: 'numeric', month: '2-digit', day: '2-digit' };
    const fecha = new Date().toLocaleDateString('es-AR', opciones);
    document.getElementById('fechaActual').textContent = fecha;
}

// Llamar a la función una vez para que la fecha aparezca inmediatamente
actualizarFecha();


