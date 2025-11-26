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

  // Insert sign up logic here
  alert('Sign Up successful!');
  // After successful sign up, redirect to login page
  window.location.href = "login.html";
});
