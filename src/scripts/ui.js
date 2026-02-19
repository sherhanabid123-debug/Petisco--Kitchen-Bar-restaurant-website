export function initUI() {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('nav');

    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
            mobileToggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
        });
    }

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });

    // Sticky Header
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }

        if (currentScroll === 0) {
            header.classList.remove('scrolled');
        } else {
            header.classList.add('scrolled');
        }

        lastScroll = currentScroll;
    });
}
