window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const heroContainer = document.querySelector('.hero-container');
    const heroHeight = heroContainer.offsetHeight;

    const extendedScrollFactor = 0.005; // שליטה על הטווח של אפקט הגלילה

    // חישוב אחוז הגלילה עם טווח מורחב
    const scrollPercent = Math.min(scrollY / (windowHeight * extendedScrollFactor), 1);

    // הגדלת תמונה 1 והפחתת השקיפות
    const image1 = document.getElementById('image1');
    image1.style.transform = `translate(-50%, -50%) scale(${1 + scrollPercent})`;
    image1.style.opacity = `${1 - scrollPercent}`;

    // הגדלת הלוגו
    const logo = document.querySelector('.logo-container img');
    logo.style.transform = `translate(-50%, -50%) scale(${1 + scrollPercent})`;

    // כאשר המשתמש מגיע לסוף הסקשן הראשון, מעבר אוטומטי לסקשן הבא
    /*
    if (scrollY + windowHeight >= heroHeight) {
        const nextSection = document.getElementById('next-section');
        
        // נעבור לסקשן הבא בצורה חלקה עם מניעת תקיעות
        if (nextSection && !nextSection.classList.contains('scrolled')) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
            nextSection.classList.add('scrolled'); // למנוע גלילה חוזרת
        }
    }
    */
});
