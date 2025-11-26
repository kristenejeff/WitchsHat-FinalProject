function showError(el, msg) {
  el.textContent = msg || '';
}
function showSuccess(el, msg) {
  el.textContent = msg || '';
}

function isValidPassword(pw) {
  const hasLetter = /[A-Za-z]/.test(pw);
  const hasNumber = /\d/.test(pw);
  const hasSpecial = /[^A-Za-z0-9]/.test(pw);
  return hasLetter && hasNumber && hasSpecial;
}

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  const errorEl = document.getElementById('signupError');
  const successEl = document.getElementById('signupSuccess');

  showError(errorEl, '');
  showSuccess(successEl, '');

  if (!firstName) {
    showError(errorEl, 'Please enter your first name.');
    return;
  }
  if (!lastName) {
    showError(errorEl, 'Please enter your last name.');
    return;
  }
  if (!email) {
    showError(errorEl, 'Please enter your email.');
    return;
  }

  if (!password) {
    showError(errorEl, 'Please enter a password.');
    return;
  }
  if (!isValidPassword(password)) {
    showError(errorEl, 'Password must include letters, numbers, and a special character.');
    return;
  }

  if (!confirmPassword) {
    showError(errorEl, 'Please confirm your password.');
    return;
  }
  if (password !== confirmPassword) {
    showError(errorEl, 'Passwords do not match.');
    return;
  }

  showSuccess(successEl, 'Account created successfully (demo). You can now log in.');
});

document.getElementById('confirmPassword').addEventListener('input', function () {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const errorEl = document.getElementById('signupError');

  if (confirmPassword && password !== confirmPassword) {
    showError(errorEl, 'Passwords do not match.');
  } else {
    showError(errorEl, '');
  }
});
