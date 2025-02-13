// Seleccionar elementos del DOM
const menuBtn = document.querySelector(".menu-btn")
const navbar = document.querySelector(".navbar")

// Variable para controlar el estado del menú
let menuOpen = false

// Función para alternar el menú
function toggleMenu() {
  if (!menuOpen) {
    // Si el menú está cerrado, lo abrimos
    menuBtn.classList.add("open")
    navbar.classList.add("active")
    menuOpen = true
  } else {
    // Si el menú está abierto, lo cerramos
    menuBtn.classList.remove("open")
    navbar.classList.remove("active")
    menuOpen = false
  }
}

// Agregar evento de clic al botón de menú
menuBtn.addEventListener("click", toggleMenu)

// Cerrar el menú al hacer clic en un enlace
navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    // Si el menú está abierto, lo cerramos al hacer clic en un enlace
    if (menuOpen) toggleMenu()
  })
})

// Aquí puedes agregar más funcionalidades JavaScript según sea necesario
// Por ejemplo, animaciones con GSAP, validación de formularios, etc.

