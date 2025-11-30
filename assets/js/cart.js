
  const productContainer = document.querySelector(".cart-items");
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  if (cartItems.length > 0) {
    cartItems.forEach((product, index) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" />
          <div class="item-details">
            <h3>${product.name}</h3>
            <p>Size: ${product.size}</p>
            <p>Color: ${product.color}</p>
            <h4>$${product.price}</h4>
          </div>
          <div class="item-actions">
            <div class="quantity">
              <button class="minus">-</button>
              <span class="countNumber">${product.quantity}</span>
              <button class="plus">+</button>
            </div>
            <button class="delete">🗑️</button>
          </div>
        </div>
      `;
      productContainer.appendChild(card);

      const addBtn = card.querySelector('.plus');
      const minBtn = card.querySelector('.minus');
      const countNumber = card.querySelector('.countNumber');

      addBtn.addEventListener('click', () => {
        product.quantity++;
        countNumber.textContent = product.quantity;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        updateTotal();
      });

      minBtn.addEventListener('click', () => {
        if (product.quantity > 1) {
          product.quantity--;
          countNumber.textContent = product.quantity;
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          updateTotal();
        }
      });

      const deletebtn = card.querySelector('.delete');
      deletebtn.addEventListener('click', () => {
        cartItems.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        card.remove();
        updateTotal();
        if (cartItems.length === 0) {
          productContainer.innerHTML = `<p>Your cart is empty 🛒</p>`;
        }
      });
    });
    updateTotal();
  } else {
    productContainer.innerHTML = `<p>Your cart is empty 🛒</p>`;
  }

  function updateTotal() {
    let subtotal = 0;
    let totalDiscountAmount = 0;
    let deleveryfee = 0;

    const numofproduct = JSON.parse(localStorage.getItem("cartItems")) || [];
    deleveryfee = numofproduct.length * 5;

    cartItems.forEach(item => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 1;
      const discount = Number(item.discount) || 0;
      const itemTotal = price * quantity;
      const discountAmount = itemTotal * (discount / 100);
      subtotal += itemTotal;
      totalDiscountAmount += discountAmount;
    });

    const overallDiscountPercent = subtotal > 0 ? (totalDiscountAmount / subtotal) * 100 : 0;
    const totalAfterDiscount = (subtotal - totalDiscountAmount) + deleveryfee;

    const subtotalDisplay = document.querySelector('.Subtotal');
    const discountDisplay = document.querySelector('.discountPersent');
    const discountTotalDisplay = document.querySelector('.discountTotal');
    const totalCartDisplay = document.querySelector('.totalCart');
    const FeeDelivery = document.querySelector('.FeeDelivery');

    if (subtotalDisplay) subtotalDisplay.textContent = `$${subtotal.toFixed(2)}`;
    if (discountDisplay) discountDisplay.textContent = `Discount (${overallDiscountPercent.toFixed(1)}%)`;
    if (discountTotalDisplay) discountTotalDisplay.textContent = `- $${totalDiscountAmount.toFixed(2)}`;
    if (totalCartDisplay) totalCartDisplay.textContent = `$${totalAfterDiscount.toFixed(2)}`;
    if (FeeDelivery) FeeDelivery.textContent = `$${deleveryfee.toFixed(2)}`;
  }
 updateTotal();