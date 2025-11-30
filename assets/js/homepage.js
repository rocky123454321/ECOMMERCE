const productContainer = document.querySelector(".productListNewArrival");

products.forEach(product => {

    if(product.arrivals){
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
  
});


const productContainer2 = document.querySelector(".productListTopSell");

products.forEach(product => {
    if(product.topSell === 1){
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

  productContainer2.appendChild(card);

  card.addEventListener('click', () =>{

    localStorage.setItem("selectedcard", JSON.stringify(product))
  window.location.href = 'check.html';
  
})

   
    }
 
});




document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.customer-list');
  const right = document.querySelector('.arrowR');
  const left = document.querySelector('.arrowL');

  let scrollAmount = 0;
  const cardWidth = 270; 
  const maxScroll = carousel.scrollWidth - carousel.parentElement.offsetWidth;

  right.addEventListener('click', function() {
    scrollAmount += cardWidth;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  });

  left.addEventListener('click', function() {
    scrollAmount -= cardWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  });
});
const btnshopclick = document.querySelector('.btn-shopNow');

btnshopclick.addEventListener('click', function(){

  window.location.href = "shop.html";

})

const brandImage = document.querySelector('.brand-image');

brandImage.addEventListener('click', function(){
  window.location.href = 'index.html'
})

const checkingImage = document.querySelector('.product-image')

checkingImage.addEventListener('click', function(){
  window.location.href = 'check.html';
})





let btn ={
  isArrival : false,
  isTopsell : false
} ||   localStorage.setItem("btn", JSON.stringify(btn))

const btn1 = document.querySelector('.btnV1');
btn1.addEventListener('click', ()=>{
  btn.isArrival= true;
  btn.isTopsell= false;
  window.location.href = 'view.html';
   localStorage.setItem("btn", JSON.stringify(btn))


})
const btn2 = document.querySelector('.btnV2');
btn2.addEventListener('click' ,() =>{
  btn.isTopsell = true;
  btn.isArrival = false;
  window.location.href = 'view.html';
   localStorage.setItem("btn", JSON.stringify(btn))
})

function isMobile() {
    return window.innerWidth <= 900; // same breakpoint as your mobile menu
}

window.addEventListener('load', () => {
    if (isMobile()) {
        document.getElementById('mobile-warning').style.display = 'block';
    }
});

window.addEventListener('resize', () => {
    const warning = document.getElementById('mobile-warning');
    if (isMobile()) {
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
    }
});
