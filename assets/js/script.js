// //add to cart
let cart = 0;


function addToCart() {
  cart++;
  document.getElementById("cartCount").innerText = cart;
  localStorage.setItem("saveCart", cart);
  alert("Product added to cart");
}

function loadCart() {
  let load = localStorage.getItem("saveCart");

  if (load !== null) {
    cart = Number(load);
    document.getElementById("cartCount").innerText = cart;
  }
}
  loadCart();
  

//buy Now
function buyNow() {
    alert("Redirecting to checkout...");
}

// search filter
const product = [
    { name: "Allen Solly Shirt", link: "components/product7.html"},
    { name: "Butterfly Mixer", link: "components/product2.html" },
    { name: "HP Laptop", link: "components/product3.html" },
    { name: "Safari Bag", link: "components/product6.html"},
    { name: "Zebronics Gaming Mouse", link: "components/product5.html" },
    { name: "Milton Water Bottle", link: "components/product4.html" },
    { name: "Fastrack Watch", link: "components/product1.html" },
    {name: "Pigeon Gas Stove", link: "components/product9.html" },
     { name: "Seagate HDD", link: "components/product8.html" }
];

function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let suggestions = document.getElementById("suggestions");

    suggestions.innerHTML = "";

    if (input === "") {
        suggestions.style.display = "none";
        return;
    }

    let filtered = product.filter(product =>
        product.name.toLowerCase().includes(input)
    );

    if (filtered.length === 0) {
        suggestions.innerHTML = "<div class='suggestion-item'>No results found</div>";
    } else {
        filtered.forEach(product => {
            let div = document.createElement("div");
            div.classList.add("suggestion-item");

            // Highlight matching text
            let regex = new RegExp(`(${input})`, "gi");
            let highlighted = product.name.replace(regex, "<b>$1</b>");

            div.innerHTML = highlighted;

            // Redirect on click
            div.onclick = () => {
                window.location.href = product.link;
            };

            suggestions.appendChild(div);
        });
    }

    suggestions.style.display = "block";
}

// Hide dropdown when clicking outside
document.addEventListener("click", function(e) {
    if (!document.querySelector(".search-box").contains(e.target)) {
        document.getElementById("suggestions").style.display = "none";
    }
});



// Carousel
$(document).ready(function () {

  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });

  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });

});


// product-card
const products = [
    {
        id: 1,
        name: "Fastrack Limitless Glide X 1.83\" Smart Watch",
        brand: "Fastrack",
        price: 1999,
        image: "assets/img/img1.jpg",
        link: "components/product1.html"
    },
    {
        id: 2,
        name: "Smart 750 Watts Mixer Grinder with 4 Jars",
        brand: "Butterfly",
        price: 2899,
        image: "assets/img/img2.jpg",
        link: "components/product2.html"
    },
    {
        id: 3,
        name: "Victus Ryzen 7, RTX 2050, 16GB RAM, 512GB SSD",
        brand: "HP",
        price: 64990,
        image: "assets/img/img3.jpg",
        link: "components/product3.html"
    },
    {
        id: 4,
        name: "Aura 1000 Thermosteel Bottle | 24 Hr Hot & Cold",
        brand: "Milton",
        price: 956,
        image: "assets/img/img4.jpg",
        link: "components/product4.html"
    },
    {
        id: 5,
        name: "Transformer Gaming Mouse with LED Lights & 6 Buttons",
        brand: "Zebronics",
        price: 349,
        image: "assets/img/img5.jpg",
        link: "components/product5.html"
    },
    {
        id: 6,
        name: "Safari Sigma 36L Laptop Backpack | 3 Compartments",
        brand: "Safari",
        price: 799,
        image: "assets/img/img6.jpg",
        link: "components/product6.html"
    },
    {
        id: 7,
        name: "Men’s Casual Shirt | Soft Breathable Fabric",
        brand: "Allen Solly",
        price: 1119,
        image: "assets/img/img7.jpg",
        link: "components/product7.html"
    },
    {
        id: 8,
        name: "One Touch 5TB External HDD with Password Protection",
        brand: "Seagate",
        price: 3999,
        image: "assets/img/img8.jpg",
        link: "components/product8.html"
    },
    {
        id: 9,
        name: "Aster 3 Burner Gas Stove with Glass Top and WaterProof",
        brand: "Pigeon",
        price: 2349,
        image: "assets/img/img9.jpg",
        link: "components/product9.html"
    }
]; git 

// render product card
function renderProducts() {
  let container = document.getElementById("products-Container");
  container.innerHTML = "";

  products.forEach(product => {
    container.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4">
    
      <a href="${product.link}" style="text-decoration:none; color:inherit;">

        <div class="card h-100 shadow-sm text-start">

          
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
        
         <div class="card-body">
            <h5>${product.brand}</h5>
            <p>${product.name}</p>
            <h5 class="text-success">₹${product.price}</h5>
            </a>
            <br>
            <button class="btn btn-dark w-100 rounded-pill" onclick="addToCart()">
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    `;
  });
}

renderProducts();
















// // Cart
// let cart = 0;

// // Load cart from localStorage on page load
// function loadCart() {
//     const savedCart = localStorage.getItem("saveCart");
//     if (savedCart !== null) {
//         cart = Number(savedCart);
//         document.getElementById("cartCount").innerText = cart;
//     }
// }

// // Render all products dynamically
// function renderProducts() {
//     const container = document.getElementById("productsContainer");
//     container.innerHTML = ''; // Clear previous content

//     products.forEach(product => {
//         const cardHTML = `
//             <div class="col">
//                 <div class="card h-100 g-5">
//                     <img src="${product.image}" class="card-img-top" alt="${product.name}">
//                     <div class="card-body">
//                         <h5 class="card-title">${product.brand}</h5>
//                         <p class="card-text">${product.name}</p>
//                         <h4 class="">₹${product.price.toLocaleString('en-IN')}</h4>
                        
//                         <button onclick="addToCart(${product.id})" 
//                                 class="btn btn-danger round-pill w-100 mt-3">
//                             Add to Cart
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         `;
//         container.innerHTML += cardHTML;
//     });
// }

//  renderProducts();

// // Add to Cart Function (Now improved)
// function addToCart(productId) {
//     cart++;
//     document.getElementById("cartCount").innerText = cart;
//     localStorage.setItem("saveCart", cart);
    
//     // Optional: Show which product was added
//     const product = products.find(p => p.id === productId);
//     alert(`${product ? product.name : 'Product'} added to cart!`);
    
//     // You can later enhance this to show a nice toast instead of alert
// }

// // Initialize everything when page loads
// document.addEventListener("DOMContentLoaded", () => {
   
//     loadCart();
// });
  

