window.addEventListener('DOMContentLoaded', () => {
  const greetingElem = document.getElementById('greeting');
  const firstName = localStorage.getItem('firstName');

  if (firstName) {
    greetingElem.textContent = `Welcome back, ${firstName}!`;
  } else {
    greetingElem.textContent = '';
  }
});

function goToCatalog() {
  window.location.href = 'catalog.html';
}
