// Browser download links
const browserLinks = {
    'GOOGLE CHROME': 'https://www.google.com/chrome/',
    'MOZILLA FIREFOX': 'https://www.mozilla.org/firefox/',
    'MICROSOFT EDGE': 'https://www.microsoft.com/edge',
    'APPLE SAFARI': 'https://www.apple.com/safari/',
    'OPERA': 'https://www.opera.com/'
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize download buttons
    initDownloadButtons();
    
    // Handle image loading
    initImageHandling();
    
    // Add update button functionality
    initUpdateButton();
});

function initDownloadButtons() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const browserNames = Object.keys(browserLinks);
            const browserName = browserNames[index];
            const downloadUrl = browserLinks[browserName];
            
            if (downloadUrl) {
                // Visual feedback
                const originalText = button.textContent;
                button.textContent = 'Redirecting...';
                button.style.opacity = '0.8';
                button.style.pointerEvents = 'none';
                
                // Open download link
                window.open(downloadUrl, '_blank');
                
                // Reset button after delay
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.opacity = '1';
                    button.style.pointerEvents = 'auto';
                }, 1500);
            }
        });
    });
}

function initImageHandling() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Add loading state
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        img.addEventListener('error', function() {
            console.warn('Image failed to load:', this.src);
            this.style.display = 'none';
            
            // You could add a fallback image here
            // this.src = '/fallback-image.png';
        });
        
        img.addEventListener('load', function() {
            console.log('Image loaded successfully:', this.src);
            this.style.opacity = '1';
        });
        
        // Force load check for cached images
        if (img.complete) {
            if (img.naturalHeight === 0) {
                img.dispatchEvent(new Event('error'));
            } else {
                img.dispatchEvent(new Event('load'));
            }
        }
    });
}

function initUpdateButton() {
    const updateBtn = document.getElementById('updateBtn');
    if (updateBtn) {
        updateBtn.addEventListener('click', function() {
            // Scroll to browsers section
            const browsersSection = document.querySelector('.browsers-section');
            if (browsersSection) {
                browsersSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Optional: Show a tooltip or message
            this.textContent = 'Scroll to see browsers ↓';
            setTimeout(() => {
                this.textContent = 'How do I update my browser?';
            }, 2000);
        });
    }
}