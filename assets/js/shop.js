const productContainer = document.querySelector(".productContainer");

products.forEach(product => {
        const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
    <p class="product-name">${product.name}</p>
     <p class="product-stars">
    <img src="assets/img/ratings/rating-${product.rating.stars * 10}.png" alt="Rating" class="product-rating">${product.rating.count}
    </span>

    <p class="product-price">
      $${product.price}
      ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ""}
      ${product.discount ? `<span class="discount">-${product.discount}</span>` : ""}
    </p>
  `;

  productContainer.appendChild(card);



  card.addEventListener('click', () =>{

    localStorage.setItem("selectedcard", JSON.stringify(product))
  window.location.href = 'check.html';
  
})

    }
  
);
