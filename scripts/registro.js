
const buttonRegister = document.getElementById('buttonRegister');

function comprobarRegister() {
    
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const date = document.getElementById('date').value;

        if(name == '' || email == '' || password == '' || date == '') {
            alert('Porfavor rellene los campos');
            return false;
        }


        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regexEmail.test(email)) {
            alert('Introduzca un email válido');
            return false;
        }

        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,}$/;
        if(!regexPassword.test(password)) {
            alert('Contraseña debe tener al menos 3 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial');
            return false;
        }

        alert('Registro completado correctamente');
        return true;
}

function limpiarForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('date').value = '';
}

buttonRegister.addEventListener('click', function (e) {
    e.preventDefault();
    let valueRegister = comprobarRegister();
    if(valueRegister) {
        alert('Registro exitoso');
        localStorage.setItem('userAutenticado', 'true');
        window.location.href = '../index.html';
        limpiarForm();
    }
})

    