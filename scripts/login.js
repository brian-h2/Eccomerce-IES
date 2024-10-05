import { validacionJSON } from './validacion.js'; 

const buttonLogin = document.getElementById("btn-ingresar");
const buttonRegister = document.getElementById("btn-registrar");


buttonRegister.addEventListener("click", (e) => {
        alert('Sera llevado al registro')
        e.preventDefault();
        window.location.href = "registro.html";

})

buttonLogin.addEventListener('click', function (e) {
    e.preventDefault();
    const validacion = comprobarCampos();
    
    if (validacion.valueValidate) {
       
        const user = JSON.parse(localStorage.getItem('userAutenticado'));
        const userLogin = JSON.parse(localStorage.getItem('userLogin'));

        console.log(userLogin.email);
        
        if (userLogin.email === validacion.email) {
            window.location.href = "/index.html";
        } else {
            alert("Usuario no encontrado");
            limpiarCampos();
        }
    } else {
        alert("Login fallido");
    }
});

function comprobarCampos() {
            
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

        if (email == "" || password == "") {
            alert("Todos los campos son obligatorios");
            return false;
        } 
            // Validar email
        var regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!regexEmail.test(email)) {
            alert("Ingrese un email válido");
            return false;
        } 
            
            // Validar contraseña
        var regexPassword = /^.{3,}$/;
            if (!regexPassword.test(password)) {
                alert("Contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial");
                return false;
        } 
            
        return {valueValidate: true, email:email, password:password};
}

const limpiarCampos = () => {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}
