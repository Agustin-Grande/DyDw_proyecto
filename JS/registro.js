$(document).ready(function() {
    function registro() {
        var nombre = $('#name').val();
        var nombreUsuario = $('#user-name').val();
        var contrasena = $('#password').val();
        var mail = $('#mail').val();
        var contrasenaVerificacion = $('#confirm-password').val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var nameRegex = /^[a-zA-Z\s]+$/;
        
        if (!nombre || !nombreUsuario || !contrasena || !mail || !contrasenaVerificacion) {
            alert("Todos los campos son obligatorios.");
            return false;
        }

        if (!nameRegex.test(nombre)) {
            alert("El nombre no debe contener números.");
            return false;
        }

        if (!emailRegex.test(mail)) {
            alert("El formato del correo electrónico no es válido.");
            return false;
        }

        if (contrasena.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres.");
            return false;
        }
        
        if (contrasena !== contrasenaVerificacion) {
            alert("Las contraseñas no coinciden.");
            return false;
        }

        alert("Usuario registrado con éxito.");
        window.location.href = 'inicio.html';
        return true;
    }

    $('#registerButton').click(function(event) {
        event.preventDefault();
        registro();
    });
});