const productsData = [
  {
    id: 1,
    title: "Smart Air Fryer",
    price: "₵139.99 value",
    priceTag: "Free",
    image: "https://plus.unsplash.com/premium_photo-1672192166833-c8ae84e5e127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    featured: true,
    brand: {
      name: "Home App",
      iconClass: "home-app"
    }
  },
  {
    id: 2,
    title: "Wireless Vacuum Cleaner",
    price: "₵199.99 value",
    priceTag: "Free",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    featured: false,
    brand: {
      name: "SmartClean",
      iconClass: "smart-clean"
    }
  },
  {
    id: 3,
    title: "Men's Leather Jacket",
    price: "₵249.00 value",
    priceTag: "Free",
    image: "https://plus.unsplash.com/premium_photo-1694476790742-8e95108c4b52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    featured: false,
    brand: {
      name: "StyleSync",
      iconClass: "style-sync"
    }
  },
  {
    id: 4,
    title: "4K Smart TV 50\"",
    price: "₵499.00 value",
    priceTag: "Free",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=757&auto=format&fit=crop&ixlib=rb-4.1.0",
    featured: false,
    brand: {
      name: "MediaHub",
      iconClass: "media-hub"
    }
  },
  {
    id: 5,
    title: "Women's Trench Coat",
    price: "₵129.00 value",
    priceTag: "Free",
    image: "https://images.unsplash.com/photo-1664029593173-183fbb854642?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0",
    featured: true,
    brand: {
      name: "ClosetApp",
      iconClass: "closet-app"
    }
  },
  {
    id: 6,
    title: "Espresso Coffee Maker",
    price: "₵89.99 value",
    priceTag: "Free",
    image: "https://images.unsplash.com/photo-1618097864233-934684a6a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    featured: false,
    brand: {
      name: "BrewControl",
      iconClass: "brew-control"
    }
  },
  {
    id: 7,
    title: "Smart Refrigerator",
    price: "₵999.00 value",
    priceTag: "Free",
    image: "https://images.unsplash.com/photo-1536353284924-9220c464e262?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    featured: false,
    brand: {
      name: "CoolSync",
      iconClass: "cool-sync"
    }
  },
  {
    id: 8,
    title: "Unisex Running Shoes",
    price: "₵75.00 value",
    priceTag: "Free",
    image: "https://images.unsplash.com/photo-1529339944280-1a37d3d6fa8c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
    featured: false,
    brand: {
      name: "FitTrack",
      iconClass: "fit-track"
    }
  }
];


class ProductCard {
  static renderMultiple(products, container) {
    container.innerHTML = products.map(product => `
      <div class="product-card">
        <div class="product-image">
          <img src="${product.image}" alt="${product.title}">
          ${product.featured ? `<div class="badge featured">Featured</div>` : ''}
          <div class="price-tag">${product.priceTag}</div>
        </div>
        <div class="product-info">
          <h2 class="product-title">${product.title}</h2>
          <p class="product-price">${product.price}</p>
          <div class="brand">
            <span class="brand-icon ${product.brand.iconClass}"></span>
            <span class="brand-name">${product.brand.name}</span>
          </div>
        </div>
      </div>
    `).join('');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('products-grid');
  ProductCard.renderMultiple(productsData, container);
});
