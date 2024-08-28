document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'password') {
        alert('Login sukses!');
        window.location.href = 'dashboard.html'; // Redirect ke halaman utama
    } else {
        document.getElementById('errorMessage').innerText = 'Username atau Password salah!';
    }
});