// Minimal JavaScript for Timeline Slider Navigation

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('timeline-slider');
    const sections = [
        'year-2018',
        'year-2019',
        'year-2020',
        'year-2021',
        'year-2022',
        'year-2023',
        'year-2024'
    ];

    // Handle slider change
    slider.addEventListener('input', function() {
        const index = parseInt(this.value);
        const targetSection = document.getElementById(sections[index]);
        
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

    // Update slider position based on scroll
    let ticking = false;
    
    function updateSliderFromScroll() {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        let currentSection = 0;
        
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
                currentSection = i;
                break;
            }
        }
        
        slider.value = currentSection;
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateSliderFromScroll);
            ticking = true;
        }
    });
});

