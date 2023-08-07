

/*popup*/
// Récupérer les éléments du DOM
const openBtn = document.getElementById('openPopup');
const closeBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');

// Fonction pour ouvrir le popup
function openPopup() {
  popup.style.display = 'block';
}

// Fonction pour fermer le popup
function closePopup() {
  popup.style.display = 'none';
}

// Ajouter les écouteurs d'événements
if ((openBtn) != null) {
openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);

};


/* /*welcome*/

 // Utilisez l'événement mousemove sur l'objet document pour détecter
  // le mouvement de la souris sur l'ensemble de la page.
  document.addEventListener("mousemove", function(e) {
   
  let mouseX = e.pageX;
  let mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;

    let welcomeElement = document.getElementById("welcome");
    if (welcomeElement) {
      welcomeElement.style.backgroundPosition = traX + "%" + traY + "%";
    }

    document.querySelectorAll(".rest").forEach(element => {
      element.style.backgroundPosition = traX + "%" + traY + "%";
    })

  });
  
  