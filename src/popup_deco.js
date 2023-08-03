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
if(document.getElementById("") != null)
 $(document).ready(function(){
  let mouseX, mouseY;
  let ww = $( window ).width();
  let wh = $( window ).height();
  let traX, traY;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
   // console.log(traX);
    $("#welcome").css({"background-position": traX + "%" + traY + "%"});
    $(".rest").css({"background-position": traX + "%" + traY + "%"});
  });
});  
