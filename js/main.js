const mount = document.getElementById("bestillingssystem");

// Produkter
const products = [
  {id:"r1", name:"Rollup Komtek", ...}
];

// resten av koden
renderProducts();
const mount = document.getElementById("bestillingssystem");

// Produkter
const products = [
  {id:"r1", name:"Rollup Komtek", type:"Rollup", price:250, img:"images/rollup1.jpg", totalStock:5, stock:1, lastReturn:"2025-11-10"},
  {id:"r2", name:"Rollup 2", type:"Rollup", price:250, img:"images/rollup2.jpg", totalStock:2, stock:2, lastReturn:"2025-11-12"},
  {id:"r3", name:"Rollup 3", type:"Rollup", price:250, img:"images/rollup1.jpg", totalStock:3, stock:3, lastReturn:"2025-11-10"},
  {id:"r4", name:"Rollup 4", type:"Rollup", price:250, img:"images/rollup2.jpg", totalStock:2, stock:2, lastReturn:"2025-11-12"},
  {id:"r5", name:"Rollup 5", type:"Rollup", price:250, img:"images/rollup1.jpg", totalStock:3, stock:3, lastReturn:"2025-11-10"},
  {id:"r6", name:"Rollup 6", type:"Rollup", price:250, img:"images/rollup2.jpg", totalStock:2, stock:2, lastReturn:"2025-11-12"},
  {id:"r7", name:"Rollup 7", type:"Rollup", price:250, img:"images/rollup1.jpg", totalStock:3, stock:3, lastReturn:"2025-11-10"},
  {id:"r8", name:"Rollup 8", type:"Rollup", price:250, img:"images/rollup2.jpg", totalStock:2, stock:2, lastReturn:"2025-11-12"},
  {id:"r9", name:"Rollup 9", type:"Rollup", price:250, img:"images/rollup1.jpg", totalStock:3, stock:0, lastReturn:"2025-11-10"},
  {id:"r10", name:"Rollup 10", type:"Rollup", price:250, img:"images/rollup2.jpg", totalStock:2, stock:2, lastReturn:"2025-11-12"},
  {id:"r11", name:"Rollup 11", type:"Rollup", price:250, img:"images/rollup1.jpg", totalStock:3, stock:3, lastReturn:"2025-11-10"},
  {id:"r12", name:"Rollup 12", type:"Rollup", price:250, img:"images/rollup2.jpg", totalStock:2, stock:2, lastReturn:"2025-11-12"},
  {id:"r13", name:"Rollup 13", type:"Rollup", price:250, img:"images/rollup1.jpg", totalStock:3, stock:3, lastReturn:"2025-11-10"},
  {id:"r14", name:"Rollup 14", type:"Rollup", price:250, img:"images/rollup2.jpg", totalStock:2, stock:2, lastReturn:"2025-11-12"},
  {id:"r15", name:"Rollup 15", type:"Rollup", price:250, img:"images/rollup1.jpg", totalStock:3, stock:3, lastReturn:"2025-11-10"},
  {id:"r16", name:"Rollup 16", type:"Rollup", price:250, img:"images/rollup2.jpg", totalStock:2, stock:2, lastReturn:"2025-11-12"},
  {id:"m1", name:"Messevegg 1", type:"Messevegg", price:250, img:"images/messevegg1.jpg", totalStock:2, stock:2, lastReturn:"2025-11-15"},
  {id:"m2", name:"Messevegg 2", type:"Messevegg", price:250, img:"images/messevegg2.jpg", totalStock:1, stock:1, lastReturn:"2025-11-16"},
  {id:"m3", name:"Messevegg 3", type:"Messevegg", price:250, img:"images/messevegg1.jpg", totalStock:2, stock:2, lastReturn:"2025-11-15"},
  {id:"m4", name:"Messevegg 4", type:"Messevegg", price:250, img:"images/messevegg2.jpg", totalStock:1, stock:1, lastReturn:"2025-11-16"},
  {id:"m5", name:"Messevegg 5", type:"Messevegg", price:250, img:"images/messevegg1.jpg", totalStock:2, stock:2, lastReturn:"2025-11-15"},
  {id:"m6", name:"Messevegg 6", type:"Messevegg", price:250, img:"images/messevegg2.jpg", totalStock:1, stock:1, lastReturn:"2025-11-16"},
  {id:"m7", name:"Messevegg 7", type:"Messevegg", price:250, img:"images/messevegg1.jpg", totalStock:2, stock:2, lastReturn:"2025-11-15"},
  {id:"m8", name:"Messevegg 8", type:"Messevegg", price:250, img:"images/messevegg2.jpg", totalStock:1, stock:1, lastReturn:"2025-11-16"},
  {id:"m9", name:"Messevegg 9", type:"Messevegg", price:250, img:"images/messevegg1.jpg", totalStock:2, stock:2, lastReturn:"2025-11-15"},
  {id:"m10", name:"Messevegg 10", type:"Messevegg", price:250, img:"images/messevegg2.jpg", totalStock:1, stock:1, lastReturn:"2025-11-16"}
];

let cart = [];
let waitlist = {}; // lagrer venteliste pr produkt-id

const modal = document.getElementById("order-modal");
const closeModal = document.getElementById("close-modal");
const cartItemsDiv = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const form = document.getElementById("order-form");
const shippingSelect = document.getElementById("shipping");

function addBusinessDays(dateString, daysToAdd) {
  let date = new Date(dateString);
  let addedDays = 0;
  while (addedDays < daysToAdd) {
    date.setDate(date.getDate() + 1);
    const day = date.getDay();
    if (day !== 0 && day !== 6) addedDays++; // hopp over helger
  }
  return date.toISOString().split("T")[0];
}

function renderProducts(filter = null) {
  mount.innerHTML = `
    <div class="products-container">
      <div class="topbar">
        <div class="filter-buttons">
          <button class="filter-btn" data-type="Rollup">Rollups</button>
          <button class="filter-btn" data-type="Messevegg">Messevegger</button>
          <button class="filter-btn" data-type="all">Vis alle</button>
        </div>
        <button class="btn primary" id="cart-btn">Handlekurv (<span id="cart-count">${cart.length}</span>)</button>
      </div>
      <div class="items-grid">
        ${products
          .filter(p => !filter || filter === "all" ? true : p.type === filter)
          .map(p => {
            const available = p.stock > 0;
            const expectedBack = addBusinessDays(p.lastReturn, 4);
            return `
              <div class="card">
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>${p.stock}/${p.totalStock} ledige</p>
                <p>Pris: ${p.price} kr</p>
                ${
                  available
                    ? `<button class="btn primary add-to-cart" data-id="${p.id}">Legg i handlekurv</button>`
                    : `
                      <p style="color:#a00;font-weight:600;">Utlånt</p>
                      <p>Forventet tilbake: <strong>${expectedBack}</strong></p>
                      <input type="email" placeholder="Din e-post for varsel" class="waitlist-email" data-id="${p.id}">
                      <button class="btn ghost join-waitlist" data-id="${p.id}">Meld meg på venteliste</button>
                    `
                }
              </div>`;
          }).join("")}
      </div>
    </div>
  `;

  // Marker valgt filter-knapp
  mount.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.type === filter);
    btn.onclick = () => renderProducts(btn.dataset.type);
  });

  // Oppdater teller
  document.getElementById("cart-count").textContent = cart.length;
}

// Render handlekurv
function renderCart() {
  cartItemsDiv.innerHTML = cart.map((item, idx) => {
    return `<div class="cart-item">
      ${item.name} - ${item.price} kr 
      <button class="btn ghost remove-item" data-idx="${idx}" style="font-size:0.85rem;">Fjern</button>
    </div>`;
  }).join("");

  const isOslo = shippingSelect.value === "oslo";
  totalPrice.textContent = `Total: ${calculateTotal(cart, isOslo)} kr`;

  // Fjern produkter fra handlekurv
  cartItemsDiv.querySelectorAll(".remove-item").forEach(btn => {
    btn.onclick = () => {
      const idx = parseInt(btn.dataset.idx);
      cart.splice(idx, 1);
      renderProducts();
      renderCart();
    };
  });
}

function calculateTotal(cart, isOslo = true) {
  const itemPrice = 250;
  const adminFee = 150;
  const shipping = isOslo ? 1250 : 2000;
  return cart.length * itemPrice + adminFee + shipping;
}

// Event delegation
mount.addEventListener("click", e => {
  if (e.target.classList.contains("add-to-cart")) {
    const id = e.target.dataset.id;
    const prod = products.find(p => p.id === id);
    cart.push(prod);
    renderProducts();
    renderCart();
  }

  if (e.target.id === "cart-btn") {
    if (cart.length === 0) { alert("Handlekurven er tom"); return; }
    modal.setAttribute("aria-hidden", "false");
    renderCart();
  }

  if (e.target.classList.contains("join-waitlist")) {
    const id = e.target.dataset.id;
    const input = mount.querySelector(`.waitlist-email[data-id="${id}"]`);
    const email = input.value.trim();
    if (!email) {
      alert("Vennligst skriv inn en e-postadresse");
      return;
    }
    if (!waitlist[id]) waitlist[id] = [];
    waitlist[id].push(email);
    alert(`Du er lagt til på ventelisten for ${products.find(p => p.id === id).name}.`);
    input.value = "";
  }
});

// Lukk modal
closeModal.onclick = () => modal.setAttribute("aria-hidden", "true");
shippingSelect.onchange = renderCart;

// Submit form
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Bestilling sendt! (Backend må håndtere e-post/Trello)");
  cart = [];
  renderProducts();
  modal.setAttribute("aria-hidden", "true");
});

// Start
renderProducts();
