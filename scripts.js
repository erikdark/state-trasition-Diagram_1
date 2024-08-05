let currentState = 'Logged Out';

document.getElementById('loginButton').addEventListener('click', function() {
    toggleForms('login');
});

document.getElementById('logoutButton').addEventListener('click', function() {
    transitionState('Logout');
});

document.getElementById('changePasswordButton').addEventListener('click', function() {
    toggleForms('changePassword');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    transitionState('Login');
});

document.getElementById('changePasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    transitionState('Change Password');
});

function toggleForms(action) {
    document.getElementById('formContainer').classList.remove('hidden');
    if (action === 'login') {
        document.getElementById('loginForm').classList.remove('hidden');
        document.getElementById('changePasswordForm').classList.add('hidden');
    } else if (action === 'changePassword') {
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('changePasswordForm').classList.remove('hidden');
    }
}

function transitionState(action) {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = '';

    if (action === 'Login' && currentState === 'Logged Out') {
        currentState = 'Logged In';
        document.getElementById('stateIndicator').innerText = 'Current State: Logged In';
        document.getElementById('loginButton').classList.add('hidden');
        document.getElementById('logoutButton').classList.remove('hidden');
        document.getElementById('changePasswordButton').classList.remove('hidden');
        document.getElementById('formContainer').classList.add('hidden');
        messageContainer.innerHTML = '<span id="successMessage">Login successful!</span>';
    } else if (action === 'Logout' && currentState === 'Logged In') {
        currentState = 'Logged Out';
        document.getElementById('stateIndicator').innerText = 'Current State: Logged Out';
        document.getElementById('loginButton').classList.remove('hidden');
        document.getElementById('logoutButton').classList.add('hidden');
        document.getElementById('changePasswordButton').classList.add('hidden');
        document.getElementById('formContainer').classList.add('hidden');
        messageContainer.innerHTML = '<span id="successMessage">Logout successful!</span>';
    } else if (action === 'Change Password' && currentState === 'Logged In') {
        messageContainer.innerHTML = '<span id="successMessage">Password changed successfully!</span>';
        document.getElementById('formContainer').classList.add('hidden');
    } else {
        messageContainer.innerHTML = '<span id="errorMessage">Invalid action or state transition.</span>';
    }
}
