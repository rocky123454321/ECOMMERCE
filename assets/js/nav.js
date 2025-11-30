const cart = document.querySelector('.carttop');

cart.addEventListener('click' ,() =>{
    window.location.href = 'cart.html'
})


const cartIcon = document.querySelector('.carttop');
const userIcon = document.querySelector('.userlogo');
const menuItems = document.querySelectorAll('.top-list li');

cartIcon.addEventListener('click', () => {
    window.location.href = 'cart.html';
});


userIcon.addEventListener('click', () => {
    window.location.href = 'profile.html';
});


if (window.innerWidth > 900) {
    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', () => {
            const page = menuItem.textContent.trim().toLowerCase();

            switch (page) {
                case 'shop':
                    window.location.href = 'shop.html';
                    break;
                case 'on sale':
                    window.location.href = 'sale.html';
                    break;
                case 'new arrivals':
                    window.location.href = 'check.html';
                    break;
                case 'brands':
                    window.location.href = 'brands.html';
                    break;
                default:
                    break;
            }
        });
    });
}
