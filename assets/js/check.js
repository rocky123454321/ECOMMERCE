document.addEventListener('DOMContentLoaded', function () {
  const productContainer = document.querySelector(".bodycheck");
  const selectedcardstorage = JSON.parse(localStorage.getItem("selectedcard"));
  const popbody = document.querySelector('.popbody');
  const loader = document.querySelector('.linepop');

  let num = 1;

  if (selectedcardstorage) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <div class="checkcontainer">
        <div class="leftImagechecking">
          <div class="smallImage">
            <div class="Small"><img src="${selectedcardstorage.image}" class="image1"></div>
            <div class="Small"></div>
            <div class="Small"></div>
          </div>
          <div class="bigImage">
            <img src="${selectedcardstorage.image}" class="image1">
          </div>
        </div>
        <div class="rightInfoChecking">
          <h1 class="nameProduct">${selectedcardstorage.name}</h1>
          <div class="rating">
            <img src="assets/img/ratings/rating-${selectedcardstorage.rating.stars * 10}.png" alt="rating" class="product-rating">
            <span class="rate">${selectedcardstorage.rating.stars}</span>
          </div>
          <div class="price-row">
            <h3 class="price">$${selectedcardstorage.price}</h3>
            ${selectedcardstorage.oldPrice ? `<span class="oldprice">${selectedcardstorage.oldPrice}</span>` : ""}
            ${selectedcardstorage.discount ? `<div class="discount">${selectedcardstorage.discount}</div>` : ""}
          </div>
          <p class="description">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
          <hr>
          <div class="selectColors">
            <p>Select Colors</p>
            <div class="colors">
              <span class="color brown"></span>
              <span class="color green"></span>
              <span class="color navy"></span>
            </div>
          </div>
          <hr>
          <div class="chooseSize">
            <p>Choose Size</p>
            <div class="sizes">
              <button class="btnsize">Small</button>
              <button class="btnsize">Medium</button>
              <button class="btnsize">Large</button>
              <button class="btnsize">X-Large</button>
            </div>
          </div>
          <hr>
          <div class="cartSection">
            <div class="quantity">
              <button class="min">-</button>
              <span class="countNumber">${num}</span>
              <button class="add">+</button>
            </div>
            <button class="addToCart">Add to Cart</button>
          </div>
        </div>
      </div>
    `;

    productContainer.appendChild(card);






    const findactivebtn = document.querySelectorAll('.btnsize')
    let sizeValue ;

    findactivebtn.forEach(active =>{
      active.addEventListener('click', function(){
       findactivebtn.forEach(b => b.classList.remove("active"))

           this.classList.add("active");

           const value = this.textContent;
           sizeValue = value

      })
      
    })

    const addBtn = card.querySelector('.add');
    const minBtn = card.querySelector('.min');
    const countNumber = card.querySelector('.countNumber');
    const addtocart = card.querySelector('.addToCart');

    addBtn.addEventListener('click', () => {
      num++;
      countNumber.textContent = num;
    });

    minBtn.addEventListener('click', () => {
      if (num > 1) {
        num--;
        countNumber.textContent = num;
      }
    });

    addtocart.addEventListener('click', () => {
     
      loader.style.width = '1%';
      let widthload = 1;
      popbody.style.opacity = 1;

      const load = setInterval(() => {
        if (widthload >= 100) {
          clearInterval(load);
          popbody.style.opacity = 0;
        } else {
          widthload++;
          loader.style.width = widthload + '%';
        }
      }, 30);

      const discountValue = selectedcardstorage.discount
        ? parseFloat(selectedcardstorage.discount.replace('%', ''))
        : 0;

      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const newItem = {
        image: selectedcardstorage.image,
        name: selectedcardstorage.name,
        price: Number(selectedcardstorage.price) || 0,
        size: sizeValue,
        color: "Navy",
        quantity: num,
        discount: discountValue,
      };

      cartItems.push(newItem);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    });
  }
});
