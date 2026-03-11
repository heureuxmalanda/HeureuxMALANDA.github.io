// 1. INITIALISATION EMAILJS
(function() {
    emailjs.init("PwG72WDgwlrBim6-a"); 
})();

// 2. ANIMATION TYPED.JS
const typed = new Typed('.typing', {
    strings: ['Full-Stack Developer', 'Mobile Developer', 'C# Programmer', 'System Admin'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// 3. MENU ACTIF ET ANIMATION SKILLS
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let skillsSection = document.querySelector('#skills');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            if(id === 'skills') { skillsSection.classList.add('active'); }
        }
    });
};

// 4. GESTION DE LA MODALE "READ MORE"
const modal = document.getElementById("aboutModal");
const readMoreBtn = document.getElementById("readMoreBtn");
const closeBtn = document.querySelector(".close-modal");

readMoreBtn.onclick = (e) => {
    e.preventDefault();
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Bloque le défilement du site en arrière-plan
}

closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Réactive le défilement du site
}

window.onclick = (event) => {
    if (event.target == modal) { modal.style.display = "none"; }
}

// 5. ENVOI DU FORMULAIRE
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const btn = contactForm.querySelector('.btn');
    btn.value = "Envoi en cours...";

    emailjs.sendForm('service_hzmpw7e', 'template_eznz26c', this)
        .then(function() {
            alert('Ton message a été envoyé avec succès.');
            contactForm.reset();
            btn.value = "Send Message";
        }, function(error) {
            alert('Oups... Erreur lors de l\'envoi : ' + JSON.stringify(error));
            btn.value = "Send Message";
        });
});