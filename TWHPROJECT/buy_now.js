// Parse URL parameters to get product info
const params = new URLSearchParams(window.location.search);
const title = params.get('title') || "N/A";
const artist = params.get('artist') || "N/A";
const priceText = params.get('price') || "₱0";
const price = parseInt(priceText.replace(/[^\d]/g, '')) || 0;

const tbody = document.getElementById('product-details');
const totalPrice = document.getElementById('total-price');

const row = document.createElement('tr');

const titleCell = document.createElement('td');
titleCell.textContent = title;

const artistCell = document.createElement('td');
artistCell.textContent = artist;

const priceCell = document.createElement('td');
priceCell.textContent = priceText;

row.appendChild(titleCell);
row.appendChild(artistCell);
row.appendChild(priceCell);

tbody.appendChild(row);

totalPrice.textContent = `₱${price}`;
