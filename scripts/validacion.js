async function validacionJSON(usuarioABuscar) {
    try {
        const response = await fetch('../scripts/json/users.json');
        const data = await response.json();  // Convierte el archivo JSON a un objeto de JavaScript

        // Accede a la propiedad 'users' que contiene el array de usuarios
        const usuarios = data.users;
        
        const usuarioEncontrado = usuarios.find(usuario => usuario.email === usuarioABuscar);

        if (usuarioEncontrado) {
            console.log('Usuario encontrado:', usuarioEncontrado);
            return true; 
        } else {
            console.log('Usuario no encontrado');
            return false; 
        }
    } catch (error) {
        console.error('Error al cargar o procesar el archivo JSON:', error);
        return false; 
    }
}

export { validacionJSON };