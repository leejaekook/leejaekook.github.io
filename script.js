// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙';
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
document.body.appendChild(darkModeToggle);

// Check for saved dark mode preference or default to light mode
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isNowDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isNowDark);
    darkModeToggle.textContent = isNowDark ? '☀️' : '🌙';
});

// Intersection Observer for fade-in animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and project cards
document.querySelectorAll('section, .project-card, .skill').forEach(el => {
    observer.observe(el);
});

// Add scroll event listener for active navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    // Update active link styling if navigation exists
document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact form handler (if needed in future)
function handleContactForm(event) {
    if (event) {
        event.preventDefault();
    }
    console.log('Contact form submitted');
}

// Smooth page load animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Responsive menu toggle (for future mobile menu implementation)
function toggleMobileMenu() {
    const menu = document.querySelector('nav');
    if (menu) {
        menu.classList.toggle('active');
    }
}

console.log('Portfolio script loaded successfully');