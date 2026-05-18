document.addEventListener('DOMContentLoaded', () => {

    const productSection = document.getElementById('product');
    const productBgs = document.querySelectorAll('.product-bg');

    const cardsTrack = document.getElementById('cards-track');

    function updateProductGallery() {
        if (!productSection || !cardsTrack) return;

        const sectionRect = productSection.getBoundingClientRect();
        const sectionHeight = productSection.offsetHeight;
        const viewportHeight = window.innerHeight;

        let progress = -sectionRect.top / (sectionHeight - viewportHeight);
        progress = Math.max(0, Math.min(1, progress));

        const totalItems = productBgs.length;
        const frameHeight = document.querySelector('.product-frame').offsetHeight;

        const maxTranslateY = Math.max(0, cardsTrack.scrollHeight - frameHeight);
        cardsTrack.style.transform = `translateY(${-progress * maxTranslateY}px)`;

        const cards = cardsTrack.querySelectorAll('.product-scroll-item');
        const viewportCenter = window.innerHeight / 2;
        let activeIndex = 0;
        let minDistance = Infinity;

        cards.forEach((card, idx) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const distance = Math.abs(cardCenter - viewportCenter);
            if (distance < minDistance) {
                minDistance = distance;
                activeIndex = idx;
            }
        });

        productBgs.forEach((bg, idx) => {
            if (idx === activeIndex) {
                bg.classList.add('active');
                bg.classList.remove('past');
            } else if (idx < activeIndex) {
                bg.classList.remove('active');
                bg.classList.add('past');
            } else {
                bg.classList.remove('active');
                bg.classList.remove('past');
            }
        });

    }

    updateProductGallery();

    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 30);
        if (isAtBottom) {
            header.classList.add('at-bottom');
        } else {
            header.classList.remove('at-bottom');
        }

        updateProductGallery(); 
    });

    const callBtn = document.getElementById('call-btn');
    const callPanel = document.getElementById('call-panel');
    const emailBtn = document.getElementById('email-btn');
    const emailPanel = document.getElementById('email-panel');

    if (callBtn && callPanel) {
        callBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            callPanel.classList.toggle('panel-active');
            emailPanel.classList.remove('panel-active');
        });
    }

    if (emailBtn && emailPanel) {
        emailBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            emailPanel.classList.toggle('panel-active');
            callPanel.classList.remove('panel-active');
        });
    }

    document.addEventListener('click', () => {
        if (callPanel) callPanel.classList.remove('panel-active');
        if (emailPanel) emailPanel.classList.remove('panel-active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
