// Show Sign Up form and hide Log In form
document.getElementById('show-signup').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('signup-section').style.display = 'block';
});

// Show Log In form and hide Sign Up form
document.getElementById('show-login').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('signup-section').style.display = 'none';
  document.getElementById('login-section').style.display = 'block';
});

// Password validation function: letters, numbers, special character
function isValidPassword(password) {
  const letter = /[a-zA-Z]/;
  const number = /\d/;
  const special = /[!@#$%^&*(),.?":{}|<>]/;
  return letter.test(password) && number.test(password) && special.test(password);
}

// Handle Sign Up form submission
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

  // Proceed with successful sign up logic here
  alert('Sign Up successful!');
  // Optionally, switch to login form
  document.getElementById('signup-section').style.display = 'none';
  document.getElementById('login-section').style.display = 'block';
});

// Handle Log In form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Proceed with login logic here
  alert('Logged in!');
});
