// Handle Log In form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Insert login validation/authentication logic here as needed

  // If login is successful, redirect to dashboard page
  window.location.href = "dashboard.html";
});
