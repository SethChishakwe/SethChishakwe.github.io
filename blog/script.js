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
    
    // Language toggle functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            langButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const selectedLang = this.dataset.lang;
            
            // Hide all language sections
            document.querySelectorAll('.lang-section').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show sections for selected language
            document.querySelectorAll('.lang-section.' + selectedLang).forEach(section => {
                section.style.display = 'block';
            });
            
            // Update article title based on language
            const titles = {
                en: "Securing EcoCash: A Practical Guide for Zimbabwean Users",
                sn: "Kuchengetedza EcoCash: Nhungamiro Inoshanda yeVashandisi veZimbabwe",
                nd: "Ukuvikelwa kwe-EcoCash: Isiqondiso Esisebenzayo kubaSebenzisi baseZimbabwe"
            };
            
            if (titles[selectedLang]) {
                document.querySelector('.article-title').textContent = titles[selectedLang];
            }
            
            // Update article subtitle
            const subtitles = {
                en: "How to protect your mobile money from common threats in Zimbabwe",
                sn: "Maitiro ekuchengetedza mari yako yefoni kubva kune zvinotyisa zvakajairika muZimbabwe",
                nd: "Indlela yokuvikela imali yakho yeselula ezinsongweni ezivamile eZimbabwe"
            };
            
            if (subtitles[selectedLang]) {
                document.querySelector('.article-subtitle').textContent = subtitles[selectedLang];
            }
        });
    });
    
    // Copy link functionality
    const copyLinkBtn = document.querySelector('.share-btn.copy-link');
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                const copyMessage = document.getElementById('copy-message');
                copyMessage.style.display = 'block';
                setTimeout(() => {
                    copyMessage.style.display = 'none';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }
    
    // Social share buttons
    document.querySelectorAll('.share-btn.twitter').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent("Check out this EcoCash security guide for Zimbabwean users by @SethChishakwe");
            window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
        });
    });
    
    document.querySelectorAll('.share-btn.linkedin').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const url = encodeURIComponent(window.location.href);
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400');
        });
    });
    
    document.querySelectorAll('.share-btn.whatsapp').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent("Check out this EcoCash security guide for Zimbabwean users: " + window.location.href);
            window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank', 'width=600,height=400');
        });
    });
    
    // Initialize with English content visible
    document.querySelectorAll('.lang-section.en').forEach(section => {
        section.style.display = 'block';
    });
    
    // Ensure only English content is visible by default
    document.querySelectorAll('.lang-section.sn, .lang-section.nd').forEach(section => {
        section.style.display = 'none';
    });
});
