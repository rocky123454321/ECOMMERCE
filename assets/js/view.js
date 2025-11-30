const productContainer = document.querySelector(".productContainer");

// Get button state from localStorage or set default
const btn = JSON.parse(localStorage.getItem("btn")) || {
  isArrival: false,
  isTopsell: false
};

// Loop through all products
products.forEach(product => {

  // Check which category to show
  const showArrival = product.arrivals && btn.isArrival;
  const showTopSell = product.topSell === 1 && btn.isTopsell;

  if (showArrival || showTopSell) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <p class="product-name">${product.name}</p>
      <p class="product-stars">
        <img src="assets/img/ratings/rating-${product.rating.stars * 10}.png" alt="Rating" class="product-rating">
        ${product.rating.count}
      </p>
      <p class="product-price">
        $${product.price}
        ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ""}
        ${product.discount ? `<span class="discount">-${product.discount}</span>` : ""}
      </p>
    `;

    productContainer.appendChild(card);

    card.addEventListener("click", () => {
      localStorage.setItem("selectedcard", JSON.stringify(product));
      window.location.href = "check.html";
    });
  }
});

console.log("Product view loaded:", btn);
