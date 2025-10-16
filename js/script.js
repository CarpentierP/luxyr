
// Luxyr - script.js
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  if(themeToggle){
    themeToggle.addEventListener('click', ()=>{
      document.body.classList.toggle('dark');
      themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
  }

  // Menu mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav ul');
  if(menuToggle){
    menuToggle.addEventListener('click', ()=>{
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // Génération dynamique des produits
  const grid = document.getElementById('productsGrid');
  if(grid && window.LUXYR_PRODUCTS){
    LUXYR_PRODUCTS.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="thumb"><img src="${p.img}" alt="${p.name}" style="width:100%;border-radius:8px;"></div>
        <h4>${p.name}</h4>
        <p>${p.description}</p>
        <div class="meta">
          <span class="price">${p.price.toFixed(2)} €</span>
          <button class="btn add-to-cart" data-id="${p.id}">Ajouter</button>
        </div>
      `;
      grid.appendChild(card);
    });
  }
});
