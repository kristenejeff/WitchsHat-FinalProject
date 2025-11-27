function isValidPassword(password) {
  const letter = /[a-zA-Z]/;
  const number = /\d/;
  const special = /[!@#$%^&*(),.?":{}|<>]/;
  return letter.test(password) && number.test(password) && special.test(password);
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (!isValidPassword(password)) {
    alert('Password must contain letters, numbers, and a special character.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  alert('Sign Up successful!');
  window.location.href = "login.html";
});

localStorage.setItem('firstName', document.getElementById('first-name').value);
