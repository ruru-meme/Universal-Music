document.addEventListener("DOMContentLoaded", function () {
  // Carrusel de inicio
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("activo"));
    slides[index].classList.add("activo");
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  showSlide(current);
  setInterval(nextSlide, 5000);

  // ✅ Carrusel de eventos (nuevo y corregido)
  const eventosSwiper = new Swiper('.carrusel-nuevo', {
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});



  // Efecto de sombra al hacer scroll en el menú
  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
      navbar.classList.add('sombra');
    } else {
      navbar.classList.remove('sombra');
    }
  });
});

// ♿ Funciones de accesibilidad
let fuenteActual = 16;
let contraste = false;

function cambiarTamano(accion) {
  if (accion === 'aumentar') {
    fuenteActual += 2;
  } else if (accion === 'disminuir' && fuenteActual > 12) {
    fuenteActual -= 2;
  }
  document.body.style.fontSize = fuenteActual + "px";
}

function cambiarColor() {
  contraste = !contraste;
  document.body.classList.toggle("contraste");
}
// Accesibilidad: aumentar tamaño
document.getElementById("btn-tamano").addEventListener("click", function () {
  document.body.classList.toggle("texto-grande");
});

// Accesibilidad: alto contraste
document.getElementById("btn-contraste").addEventListener("click", function () {
  document.body.classList.toggle("contraste-alto");
});
