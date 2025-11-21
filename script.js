// ===================================
// Variables Globales
// ===================================
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

// ===================================
// Menú Hamburguesa (Móvil)
// ===================================
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// ===================================
// Header con Scroll
// ===================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===================================
// Navegación Suave (Smooth Scroll)
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Animaciones al Hacer Scroll
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Animar barras de progreso de habilidades
            if (entry.target.id === 'habilidades') {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observar todas las secciones
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    observer.observe(section);
});

// ===================================
// Animación de Barras de Habilidades
// ===================================
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// ===================================
// Validación y Envío del Formulario
// ===================================
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Limpiar errores previos
    clearErrors();
    
    // Obtener valores
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    
    let isValid = true;
    
    // Validar nombre
    if (nombre === '') {
        showError('nombreError', 'Por favor, ingresa tu nombre');
        isValid = false;
    } else if (nombre.length < 3) {
        showError('nombreError', 'El nombre debe tener al menos 3 caracteres');
        isValid = false;
    }
    
    // Validar email
    if (email === '') {
        showError('emailError', 'Por favor, ingresa tu email');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Por favor, ingresa un email válido');
        isValid = false;
    }
    
    // Validar asunto
    if (asunto === '') {
        showError('asuntoError', 'Por favor, ingresa un asunto');
        isValid = false;
    } else if (asunto.length < 5) {
        showError('asuntoError', 'El asunto debe tener al menos 5 caracteres');
        isValid = false;
    }
    
    // Validar mensaje
    if (mensaje === '') {
        showError('mensajeError', 'Por favor, ingresa tu mensaje');
        isValid = false;
    } else if (mensaje.length < 10) {
        showError('mensajeError', 'El mensaje debe tener al menos 10 caracteres');
        isValid = false;
    }
    
    // Si todo es válido, simular envío
    if (isValid) {
        simulateFormSubmission(nombre, email, asunto, mensaje);
    }
});

// ===================================
// Funciones de Validación
// ===================================
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.color = '#ef4444';
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
    });
}

// ===================================
// Simulación de Envío del Formulario
// ===================================
function simulateFormSubmission(nombre, email, asunto, mensaje) {
    // Mostrar indicador de carga (opcional)
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    // Simular delay de envío
    setTimeout(() => {
        // Ocultar formulario
        contactForm.style.display = 'none';
        
        // Mostrar mensaje de éxito
        formSuccess.classList.remove('hidden');
        
        // Log de datos (en producción, aquí se enviaría a un servidor)
        console.log('Formulario enviado con los siguientes datos:');
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Asunto:', asunto);
        console.log('Mensaje:', mensaje);
        
        // Resetear formulario después de 5 segundos
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            formSuccess.classList.add('hidden');
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 5000);
        
    }, 1500);
}

// ===================================
// Resaltar Enlace Activo en Navegación
// ===================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section, .hero');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const headerHeight = header.offsetHeight;
        
        if (window.scrollY >= (sectionTop - headerHeight - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Prevenir Comportamiento por Defecto
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===================================
// Efecto de Escritura en Hero (Opcional)
// ===================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efecto de escritura al cargar la página (opcional)
window.addEventListener('load', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        typeWriter(heroSubtitle, originalText, 80);
    }
});

// ===================================
// Mensaje de Bienvenida en Consola
// ===================================
console.log('%c¡Hola! 👋', 'color: #2563eb; font-size: 24px; font-weight: bold;');
console.log('%cGracias por visitar mi portafolio', 'color: #64748b; font-size: 16px;');
console.log('%cDesarrollado con HTML, CSS y JavaScript puro', 'color: #10b981; font-size: 14px;');
console.log('%c- Abel Ayala', 'color: #2563eb; font-size: 14px; font-style: italic;');
