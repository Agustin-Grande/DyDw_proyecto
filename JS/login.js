$(document).ready(function() {
    const users = [
        { username: 'juan', password: '123' },
        { username: 'user2', password: 'password2' },
        { username: 'user3', password: 'password3' }
    ];

    $('#loginButton').click(function() {
        
        const username = $('#user-name').val();
        const password = $('#password').val();
        authenticateUser(username, password);
    });

    function authenticateUser(username, password) {
        let isAuthenticated = false;

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password) {
                isAuthenticated = true;
                break;
            }
        }

        if (isAuthenticated) {
            alert('Login exitoso');
            {window.location.href = "inicio.html";}
        } else if (password.length === 0 || username.length === 0){
            $('#error-message').text('Usuario y contraseña son requeridos').show();
        } else if (password.length <= 8) {
            $('#error-message').text('La contraseña debe tener al menos 8 caracteres').show();
        } else {
            $('#error-message').text('Usuario o contraseña incorrectos').show();
        }
    }
});