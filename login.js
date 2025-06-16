    // Validar login

    document.getElementById('loginForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const usuario = document.getElementById('username').value.trim();
    const senha = document.getElementById('password').value.trim();

    // --- VALIDA CAMPOS OBRIGATÓRIOS ---


    if (usuario === '') {
        alert('Campo Usuário é obrigatório!');
        return; // Para a execução da função
    }

    if (senha === '') {
        alert('Campo Senha é obrigatório!');
        return; // Para a execução da função
    }

    // --- VALIDA AS CREDENCIAIS ---
    const usuarioValido = 'silas';
    const senhaValida = 'abc123';

    if (usuario === usuarioValido && senhaValida === senha) {
        alert('Login foi realizado com sucesso');
            window.location.href = 'index3.html'; 
    } else {
        alert('Usuário e/ou senha inválidos.');
    }
});