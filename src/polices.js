/*mise à jour de la police*/
function mettreAJourPolice() {
    let selectedFonts = [];
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        selectedFonts.push(checkbox.value);
      }
    });
    let bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.style.fontFamily = selectedFonts.join(', ');
    let placeholder = document.getElementById("Recherche");
    if (placeholder != null) {
    placeholder.style.fontFamily = selectedFonts.join(', ');
  }
  }
  let checkboxes = document.querySelectorAll('.polices');
  
  
  checkboxes.forEach(function(checkbox, index) {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        checkboxes.forEach(function(otherCheckbox, otherIndex) {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
            
          }
        });
      }
      mettreAJourPolice();
    });
    if(index === 0) {
      checkbox.checked = true;
      
    }else{
      checkbox.checked = false;
    }
    
  });
  mettreAJourPolice();