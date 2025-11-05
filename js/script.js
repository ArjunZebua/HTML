// Browser download links
const browserLinks = {
    'GOOGLE CHROME': 'https://www.google.com/chrome/',
    'MOZILLA FIREFOX': 'https://www.mozilla.org/firefox/',
    'MICROSOFT EDGE': 'https://www.microsoft.com/edge',
    'APPLE SAFARI': 'https://www.apple.com/safari/',
    'OPERA': 'https://www.opera.com/'
};

document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const browserNames = Object.keys(browserLinks);
            const browserName = browserNames[index];
            const downloadUrl = browserLinks[browserName];
            
            window.open(downloadUrl, '_blank');
            
            const originalText = button.textContent;
            button.textContent = 'Redirecting...';
            button.style.opacity = '0.8';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.opacity = '1';
            }, 1500);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Image failed to load:', this.src);
            this.style.display = 'none';
        });
        
        img.addEventListener('load', function() {
            console.log('Image loaded successfully:', this.src);
        });
    });
});