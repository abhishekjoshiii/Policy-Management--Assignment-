const validateForm = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Username and password cannot be empty');
        return false;
    } else if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return false;
    } else if (username !== 'admin' || password !== '12345678') {
        alert('Invalid username or password');
        return false;
    } else {
        // Redirect to home.html
        window.location.href = './home.html';
        return true;
    }
};

const signupform = () => {

    window.location.href = './signup.html';
    return true;

};

document.getElementById('sign').addEventListener('click', validateForm);



document.getElementById('signup').addEventListener('click', signupform);