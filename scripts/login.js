const buttonLogin = document.getElementById("btn-ingresar");
const buttonRegister = document.getElementById("btn-registrar");

        buttonRegister.addEventListener("click", (e) => {
            alert('Sera llevado al registro')
            e.preventDefault();
            window.location.href = "registro.html";

        })

        buttonLogin.addEventListener('click', function (e) {
            e.preventDefault();
            var validacion = comprobarCampos();
            if (validacion) {
                localStorage.setItem('userAutenticado', 'true');
                alert("Login exitoso");

                window.location.href = "../index.html";
            } else {
                localStorage.setItem('userAutenticado', 'false');
            }

        })

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
            var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
            if (!regexPassword.test(password)) {
                alert("Contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial");
                return false;
            } 
            
            return true;
        }