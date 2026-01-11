/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.project-card, section p, section h2');
    
    cards.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
/* --- CONTACT COPY FUNCTIONALITY --- */
function copyEmail() {
    const email = "vineethkodakandla@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        // Show feedback message
        const feedback = document.getElementById('copy-feedback');
        feedback.style.opacity = '1';
        
        // Change button text temporarily
        const btn = document.querySelector('.copy-btn');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> COPIED';
        
        // Reset after 2 seconds
        setTimeout(() => {
            feedback.style.opacity = '0';
            btn.innerHTML = originalHTML;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
