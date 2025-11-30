const products = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    image: "assets/img/vector/tshirt_tape_details.png",
    price: 120,
    oldPrice: null,
    discount: null,
    description: "A casual and trendy T-shirt with stylish tape detailing on the sleeves, perfect for everyday wear.",
    rating: {
      stars: 4.5,
      count: 87
    },
    category: "T-shirt",
    topSell: 0,
    arrivals: true
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    image: "assets/img/vector/skinny_fit_jeans.png",
    price: 240,
    oldPrice: 260,
    discount: "20%",
    description: "Comfortable stretch skinny jeans designed for a sleek, modern look that fits perfectly with any top.",
    rating: {
      stars: 3.5,
      count: 64
    },
    category: "Jeans",
    topSell: 0,
    arrivals: true
  },
  {
    id: 3,
    name: "Checkered Shirt",
    image: "assets/img/vector/checkered_shirt.png",
    price: 180,
    oldPrice: null,
    discount: null,
    description: "Classic checkered shirt made with soft cotton fabric, offering both comfort and timeless style.",
    rating: {
      stars: 4.5,
      count: 73
    },
    category: "Shirt",
    topSell: 0,
    arrivals: true
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    image: "assets/img/vector/sleeve_striped_tshirt.png",
    price: 130,
    oldPrice: 160,
    discount: "30%",
    description: "Trendy striped T-shirt with soft breathable fabric and sporty sleeve stripes for a casual street look.",
    rating: {
      stars: 4.5,
      count: 87
    },
    category: "T-shirt",
    topSell: 0,
    arrivals: true
  },
  {
    id: 5,
    name: "Vertical Striped Shirt",
    image: "assets/img/vector/vertical_striped_shirt.png",
    price: 212,
    oldPrice: 232,
    discount: "20%",
    description: "Smart vertical striped shirt that gives a tall and slim appearance — great for both casual and formal days.",
    rating: {
      stars: 5.0,
      count: 120
    },
    category: "Shirt",
    topSell: 1,
    arrivals: false
  },
  {
    id: 6,
    name: "Courage Graphic T-shirt",
    image: "assets/img/vector/courage_graphic_tshirt.png",
    price: 145,
    oldPrice: null,
    discount: null,
    description: "Bold graphic T-shirt featuring the word 'Courage' — perfect for confident, expressive individuals.",
    rating: {
      stars: 4.0,
      count: 66
    },
    category: "T-shirt",
    topSell: 1,
    arrivals: false
  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    image: "assets/img/vector/loose_fit_bermuda_shorts.png",
    price: 80,
    oldPrice: null,
    discount: null,
    description: "Relaxed-fit Bermuda shorts that offer maximum comfort and breathability for hot weather days.",
    rating: {
      stars: 3.0,
      count: 58
    },
    category: "Shorts",
    topSell: 1,
    arrivals: false
  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    image: "assets/img/vector/faded_skinny_jeans.png",
    price: 210,
    oldPrice: null,
    discount: null,
    description: "Stylish faded skinny jeans with a washed look — pairs perfectly with shirts and tees for a casual vibe.",
    rating: {
      stars: 4.5,
      count: 77
    },
    category: "Jeans",
    topSell: 1,
    arrivals: false
  }
];
