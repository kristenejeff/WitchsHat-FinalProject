const catalogGrid = document.getElementById('catalog-grid');

// Template data for artworks (placeholders)
const artworks = Array.from({ length: 15 }, (_, i) => ({
  title: `Lorem Ipsum Title ${i + 1}`,
  artist: `Lorem Ipsum Artist ${i + 1}`,
  price: `₱${(i + 1) * 1000}`
}));

function createArtworkItem(artwork) {
  const container = document.createElement('div');
  container.style.border = '1px solid #000';
  container.style.padding = '10px';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.justifyContent = 'space-between';

  const titleEl = document.createElement('h3');
  titleEl.textContent = artwork.title;

  const artistEl = document.createElement('p');
  artistEl.textContent = `Artist: ${artwork.artist}`;

  const priceEl = document.createElement('p');
  priceEl.textContent = `Price: ${artwork.price}`;

  const buyNowBtn = document.createElement('button');
  buyNowBtn.textContent = 'Buy Now';
  buyNowBtn.onclick = () => {
    window.location.href = 'buy_now.html';
  };

  container.appendChild(titleEl);
  container.appendChild(artistEl);
  container.appendChild(priceEl);
  container.appendChild(buyNowBtn);

  return container;
}

// Render artworks in grid
artworks.forEach(artwork => {
  const artworkItem = createArtworkItem(artwork);
  catalogGrid.appendChild(artworkItem);
});


