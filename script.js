document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MODO OSCURO ---
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeBtn.querySelector('i');

    // Revisar preferencia guardada
    if (localStorage.getItem('theme') === 'dark') {
        enableDarkMode();
    }

    themeBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }

    // --- 2. SCROLL REVEAL (Animación) ---
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Distancia desde abajo para activar

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Ejecutar una vez al inicio para mostrar lo que ya se ve
    revealOnScroll();

    /* --- LÓGICA DEL FORMULARIO DE CONTACTO (AJAX NETLIFY) --- */

    const contactForm = document.getElementById('contact-form');
    const statusBox = document.getElementById('status-container');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // 1. Evita que la página se recargue

            const myForm = e.target;
            const formData = new FormData(myForm);

            // 2. Mostrar estado de "Cargando"
            statusBox.classList.remove('hidden');
            statusBox.style.display = 'block';
            statusBox.className = 'status-box sending';
            statusBox.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando mensaje...';

            // 3. Enviar datos a Netlify
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                // 4. ÉXITO
                statusBox.className = 'status-box success';
                statusBox.innerHTML = '<i class="fas fa-check-circle"></i> ¡Mensaje enviado con éxito!';
                myForm.reset(); // Limpia los campos

                // Opcional: Ocultar el mensaje después de 5 segundos
                setTimeout(() => {
                    statusBox.style.display = 'none';
                }, 5000);
            })
            .catch((error) => {
                // 5. ERROR
                console.error(error);
                statusBox.className = 'status-box error';
                statusBox.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Hubo un error. Intenta por WhatsApp.';
            });
        });
    }

    // --- 5. MINI-SLIDER AUTOMÁTICO ---
    const miniSliders = document.querySelectorAll('.mini-slider');

    miniSliders.forEach(slider => {
        const images = slider.querySelectorAll('.slide-img');
        
        // Verificamos que existan imágenes para evitar errores
        if (images.length > 0) {
            let index = 0; 

            setInterval(() => {
                // 1. Ocultar imagen actual
                images[index].classList.remove('active');

                // 2. Calcular siguiente
                index = (index + 1) % images.length;

                // 3. Mostrar siguiente
                images[index].classList.add('active');
            }, 3000); // Cambiado a 3000ms (3 seg) para que sea un poco más dinámico
        }
    });

    const track = document.getElementById('track');
    // Seleccionamos TODOS los hijos directos (por si tienes divs extra)
    const slides = Array.from(track.children); 
    const nextButton = document.getElementById('nextBtn');
    const prevButton = document.getElementById('prevBtn');
    const dotsNav = document.querySelector('.carousel-indicators');
    const dots = Array.from(dotsNav.children);

    // Variable para saber en qué slide estamos
    let currentIndex = 0;

    // FUNCIÓN CORREGIDA
    const moveToSlide = (targetIndex) => {
        // 1. Validaciones para que no de error
        if (targetIndex < 0) targetIndex = 0;
        if (targetIndex >= slides.length) targetIndex = slides.length - 1;

        // 2. EL CAMBIO CLAVE: Multiplicar por 100, NO por 50
        // Esto mueve UNA tarjeta completa a la vez.
        track.style.transform = `translateX(-${targetIndex * 100}%)`;

        // 3. Actualizar puntos
        dots.forEach(dot => dot.classList.remove('active'));
        if(dots[targetIndex]) dots[targetIndex].classList.add('active');

        // 4. Actualizar el índice global
        currentIndex = targetIndex;
    }


    // Listener de los puntos (dots)
    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');
        if (!targetDot) return;
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        moveToSlide(targetIndex);
    });

    // --- BOTONES ---
    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            moveToSlide(currentIndex + 1);
        } else {
            moveToSlide(0); // Loop infinito al principio
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            moveToSlide(currentIndex - 1);
        } else {
            moveToSlide(slides.length - 1); // Loop infinito al final
        }
    });

    // --- PUNTOS ---
    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');
        if (!targetDot) return;
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        moveToSlide(targetIndex);
    });
    document.body.classList.add('dark-mode');
});