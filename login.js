function showError(el, msg) {
  el.textContent = msg || '';
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const errorEl = document.getElementById('loginError');

  showError(errorEl, '');

  if (!email) {
    showError(errorEl, 'Please enter your email.');
    return;
  }

  if (!password) {
    showError(errorEl, 'Please enter your password.');
    return;
  }

  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  if (!(hasLetter && hasNumber && hasSpecial)) {
    showError(errorEl, 'Password must include letters, numbers, and a special character.');
    return;
  }

  alert('Login successful (demo).');
  window.location.href = 'dashboard.html';
});


// Redirect to signup.html when Sign Up button is clicked
document.addEventListener('DOMContentLoaded', function () {
  const signUpBtn = document.getElementById('signUpBtn');
  if (signUpBtn) {
    signUpBtn.addEventListener('click', function () {
      window.location.href = 'signup.html';
    });
  }
});

