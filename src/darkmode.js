
/*changement dark/light*////

/* const btnToggle = document.querySelector(".btn-toggle");
const body = document.body;
const slider = document.querySelector(".slider");
const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));


slider.addEventListener('click', function() {
body.classList.toggle('dark');

const isDark = body.classList.contains('dark');
localStorage.setItem('isDarkMode', JSON.stringify(isDark));

});
if (isDarkMode) {
  document.body.classList.add('dark');
} else {
  document.body.classList.remove('dark');

} */
document.addEventListener('DOMContentLoaded', function() {
  const btnToggle = document.querySelector(".btn-toggle");
  const body = document.body;
  const slider = document.querySelector(".slider");

  // Récupérez la valeur de 'isDarkMode' depuis le local storage
  const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));

  // Appliquez la classe 'dark' au body si 'isDarkMode' est true, sinon retirez-la
  if (isDarkMode) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }

  // Ajoutez un écouteur d'événement sur le slider pour mettre à jour 'isDarkMode' et la classe 'dark'
  if (slider != null) {
    slider.addEventListener('click', function() {
      body.classList.toggle('dark');

      const isDark = body.classList.contains('dark');
      localStorage.setItem('isDarkMode', JSON.stringify(isDark));
    });
  }
});

//permet de changer depuis windows
/* function handleColorSchemeChange(e) {
    if (e.matches) {
      body.classList.add('dark');
      
    } else {
      body.classList.remove('dark');
      
    }
  }
  
  const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  colorSchemeQuery.addEventListener('change', handleColorSchemeChange);
  handleColorSchemeChange(colorSchemeQuery);   */








