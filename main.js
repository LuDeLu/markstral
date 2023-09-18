(function ($) {
    "use strict";

    // Spinner (Animación de carga)
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Inicializa la librería wowjs
    new WOW().init();

    // Barra de navegación pegajosa (sticky)
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Menú desplegable al pasar el mouse
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // Botón de regreso arriba
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Carrusel de testimonios
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Isótopo y filtro de portafolio
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

// Obtiene todos los elementos de anclaje en el menú de navegación
const navLinks = document.querySelectorAll('nav a');

// Función para actualizar la clase activa al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // Quita la clase activa de todos los enlaces
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        // Agrega la clase activa al enlace que se hizo clic
        link.classList.add('active');

        // Obtiene el ID de la sección a la que se va a desplazar
        const targetId = link.getAttribute('href').substring(1);

        // Obtiene la sección de destino
        const targetSection = document.getElementById(targetId);

        // Desplaza suavemente a la sección de destino
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Función para actualizar la clase activa mientras se desplaza la página
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50; // Ajusta este valor según tus necesidades
        const sectionBottom = sectionTop + section.clientHeight;
        const link = document.querySelector(`nav a[href="#${section.id}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            link.classList.add('active');
        }
    });
});

// Obtén todas las secciones
const sections = document.querySelectorAll('section');

// Slider inifito
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);
})(jQuery);
