const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // empêche le rechargement de la page

    // Récupération des valeurs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation simple
    if(!name || !email || !subject || !message) {
        formMessage.style.color = 'red';
        formMessage.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    // Ici tu peux envoyer les données vers un serveur PHP ou API
    formMessage.style.color = 'green';
    formMessage.textContent = "Merci ! Votre message a été envoyé.";

    // Reset du formulaire
    contactForm.reset();
});
