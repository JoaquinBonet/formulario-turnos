const nombre = document.querySelector("#nombre");
const mail = document.querySelector("#mail");
const tel = document.querySelector("#tel");
const fecha = document.querySelector("#fecha");
const hora = document.querySelector("#hora");
const boton = document.querySelector("#turno");
const resultados = document.querySelector(".resultados");
const span  = document.querySelector("span");

boton.addEventListener("click", (e) => {
    e.preventDefault();
    let error = validarForm();
    if (error[0]){
        resultados.innerHTML = error[1];
        resultados.classList.add("red");
    } else{
        resultados.innerText = "Solicitud enviada correctamente";
        resultados.classList.add("green");
        resultados.classList.remove("red");
    }
})

const validarForm = () => {
    let error = [];
    if (nombre.value.length == 0){
        error[0] = true;
        error[1] = "El nombre debe tener al menos 1 caracter.";
        return error;
    } else if(nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre debe tener menos de 40 caracteres.";
        return error;
    }

    if (mail.value.length < 6 || 
        mail.value.length > 40 ||
        mail.value.indexOf(".") == -1 ||
        mail.value.indexOf("@") == -1){
        error[0] = true;
        error[1] = "El email es inválido";
        return error;
    }

    if (isNaN(tel.value)){
        error[0] = true;
        error[1] = "El número de teléfono no debe incluir otros caracteres que no sean números.";
        return error;
    }

    if(fecha.value = ""){
        error[0] = true;
        error[1] = "Por favor, elija una fecha";
        return error;
    }

    if(hora.value > "20:00" || hora.value < "08:00"){
        error[0] = true;
        error[1] = "Por favor, elija un horario válido.";
        return error;
    }

    error[0] = false;
    return error;
};

function establecerFecha() {
    const fechaDeHoy = new Date().toISOString().slice(0, 10);
    const fechaLimite = new String(Number(fechaDeHoy.slice(0, 4)) + 2) + fechaDeHoy.slice(4,10);
    fecha.setAttribute("min", fechaDeHoy);
    fecha.setAttribute("max", fechaLimite);
}

establecerFecha();

hora.addEventListener("click", () => {
    span.style.display = "block";
})
