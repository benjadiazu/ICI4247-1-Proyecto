// Función para cargar y procesar el archivo JSON de usuarios
function cargarUsuarios() {
    const mapaUsuarios = new Map();

    fetch('data/users.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(usuario => {
                const clave = usuario.username;
                mapaUsuarios.set(clave, usuario);
            });
            console.log('Mapa de usuarios cargado:', mapaUsuarios);
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));

    // Devolver el mapa de usuarios para poder acceder a él desde otras funciones
    return mapaUsuarios;
}

// Función para realizar la autenticación de un usuario
function autenticarUsuario(user_name, password, mapaUsuarios) {
    if (mapaUsuarios.has(user_name)) {
        const usuario = mapaUsuarios.get(user_name);
        if (usuario.contrasena === password) {
            //Redirigir a nuevo html
            window.location.href = "menu.html";
        } else {
            document.getElementById("errorMessages").textContent = "Usuario o contraseña incorrectos";
        }
    }else{
        document.getElementById("errorMessages").textContent = "Usuario o contraseña incorrectos";
    }
}

// Ejemplo de uso
window.onload = function() {
    // Cargar el mapa de usuarios cuando la ventana se cargue
    const mapaUsuarios = cargarUsuarios();

    //Usuario inicial si da problema cargar el json
    var usuario = {
        "username": "user0",
        "rut": "00.000.000-0",
        "email": "user0@example.com",
        "region": "Metropolitana",
        "comuna": "Santiago",
        "contrasena": "password0"
    };

    mapaUsuarios.set(usuario);

    // Simular autenticación al hacer clic en un botón
    const sign_in = document.getElementById("sign_in");
    sign_in.onclick = function() {
        const user_name = document.getElementById("user_name").value;
        const password = document.getElementById("password").value;
        autenticarUsuario(user_name, password, mapaUsuarios);
    };

    const sign_up = document.getElementById("sign_up");
    sign_up.onclick = function(){
        window.location.href = "sign_up.html";
    };
};
