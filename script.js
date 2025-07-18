document.addEventListener('DOMContentLoaded', function() {
    // ===== Dark/Light Mode Toggle =====
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // ===== Mobile Sidebar =====
    const hamburger = document.querySelector('.hamburger');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const closeSidebar = document.querySelector('.close-sidebar');
    
    // Open sidebar
    hamburger.addEventListener('click', function() {
        mobileSidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close sidebar
    function closeMobileSidebar() {
        mobileSidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Close when X is clicked
    closeSidebar.addEventListener('click', closeMobileSidebar);
    
    // Close when overlay is clicked
    sidebarOverlay.addEventListener('click', closeMobileSidebar);
    
    // Close when a link is clicked
    const sidebarLinks = document.querySelectorAll('.sidebar-links a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeMobileSidebar);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update WhatsApp number (replace with your actual number)
    const whatsappLinks = document.querySelectorAll('[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.href = link.href.replace('1234567890', 'YOUR_WHATSAPP_NUMBER');
    });
});