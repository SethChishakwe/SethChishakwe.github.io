// Blog-specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Checklist functionality
    const checkboxes = document.querySelectorAll('.check-item input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const parent = this.closest('.check-item');
            if (this.checked) {
                parent.style.opacity = '0.7';
                parent.style.textDecoration = 'line-through';
            } else {
                parent.style.opacity = '1';
                parent.style.textDecoration = 'none';
            }
        });
    });
    
    // Copy link functionality
    const copyLinkBtn = document.querySelector('.share-btn .fa-link');
    if (copyLinkBtn) {
        copyLinkBtn.closest('.share-btn').addEventListener('click', function(e) {
            e.preventDefault();
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                }, 2000);
            });
        });
    }
    
    // Social share buttons
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.querySelector('.fa-link')) return; // Skip copy link button
            
            e.preventDefault();
            const platform = this.querySelector('i').className.split(' ')[1];
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            
            let shareUrl = '';
            switch(platform) {
                case 'fa-twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'fa-linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'fa-whatsapp':
                    shareUrl = `https://api.whatsapp.com/send?text=${title}%20${url}`;
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
});