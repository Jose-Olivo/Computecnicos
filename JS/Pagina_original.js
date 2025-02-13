// Array de productos (simulando datos de una base de datos)
const products = [
  {
    id: 1,
    name: "Smartphone X",
    price: 599.99,
    image: "https://via.placeholder.com/300x200.png?text=Smartphone+X",
    category: "smartphones",
  },
  {
    id: 2,
    name: "Laptop Pro",
    price: 1299.99,
    image: "https://via.placeholder.com/300x200.png?text=Laptop+Pro",
    category: "laptops",
  },
  {
    id: 3,
    name: "Auriculares Inalámbricos",
    price: 149.99,
    image: "https://via.placeholder.com/300x200.png?text=Auriculares+Inalámbricos",
    category: "audio",
  },
  {
    id: 4,
    name: "Smartwatch Elite",
    price: 249.99,
    image: "https://via.placeholder.com/300x200.png?text=Smartwatch+Elite",
    category: "wearables",
  },
  {
    id: 5,
    name: "Cámara DSLR",
    price: 799.99,
    image: "https://via.placeholder.com/300x200.png?text=Cámara+DSLR",
    category: "cameras",
  },
  {
    id: 6,
    name: "Consola de Juegos",
    price: 499.99,
    image: "https://via.placeholder.com/300x200.png?text=Consola+de+Juegos",
    category: "gaming",
  },
]

// Función para renderizar los productos
function renderProducts(productsToRender) {
  const productsContainer = document.getElementById("products-container")
  productsContainer.innerHTML = "" // Limpiar el contenedor

  productsToRender.forEach((product) => {
    const productElement = document.createElement("div")
    productElement.classList.add("product-card")
    productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        `
    productsContainer.appendChild(productElement)
  })
}

// Función para filtrar productos
function filterProducts() {
  const searchTerm = document.getElementById("search").value.toLowerCase()
  const category = document.getElementById("category").value
  const maxPrice = Number.parseFloat(document.getElementById("price").value) || Number.POSITIVE_INFINITY

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) &&
      (category === "" || product.category === category) &&
      product.price <= maxPrice,
  )

  renderProducts(filteredProducts)
}

// Event listener para el botón de filtrar
document.getElementById("apply-filters").addEventListener("click", filterProducts)

// Función para alternar el menú móvil
function toggleMobileMenu() {
  const navMenu = document.querySelector(".nav-menu")
  navMenu.classList.toggle("show")
}

// Event listener para el botón de menú móvil
document.querySelector(".menu-toggle").addEventListener("click", toggleMobileMenu)

// Actualizar el año en el pie de página
document.getElementById("current-year").textContent = new Date().getFullYear()

// Renderizar todos los productos al cargar la página
renderProducts(products)

