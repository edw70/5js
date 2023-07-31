/*fonction du dictionnaire*/

export function search() {
    let word = document.getElementById("Recherche").value;
    let resultat = document.getElementById("resultat");
  
  
    if (word.length != 0) {
      let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data);
  
          if (data.length > 0) {
            let words = data[0];
            let definition = words.meanings[0]?.definitions[0]?.definition;
            let definition1 = words.meanings[0]?.definitions[1]?.definition;
            let phonethique = words.phonetic;
            let synonyme = words.meanings[0]?.synonyms[0];
            let synonyme1 = words.meanings[0]?.synonyms[1];
            
            let audio = words.phonetics[0]?.audio;
            let audio1 = words.phonetics[1]?.audio;
            let htmlContent =
              "<div class='carte1'><p class='nom'> Définition : </p>" +
              "<p class='nom1'>" + word + "</p>" +
              "<p class='def'>" + definition + "</p>";
              
              if (definition1 !== undefined) {
                htmlContent += "<p class='def2'>"+ definition1 + "</p>";
                
              }
    
              htmlContent += "</div>";
          
            let phonethiqueHTML = ""; // Déclarer la variable phonethiqueHTML ici
  
            if (phonethique) {
              // Ajouter la partie avec le paragraphe phonétique si phonethique est défini
              phonethiqueHTML = "<div class='carte2'><p class='nom'> phonétique : </p><p class='phonetique'>" + phonethique + "</p>";
          
              // Vérifier si l'audio existe et ajouter l'élément audio correspondant
              if (audio) {
                  phonethiqueHTML += "<audio id='audioPlayer' src='" + audio + "' controls></audio>";
              } else if (audio1) {
                  phonethiqueHTML += "<audio id='audioPlayer1' src='" + audio1 + "' controls></audio>";
              }
          
              // Fermer la div de la carte2
              phonethiqueHTML += "</div>";
          } else if (audio || audio1) {
              // Si phonethique n'est pas défini, ajouter uniquement l'élément audio
              phonethiqueHTML += "<div class='carte2'><p class='nom'> audio : </p><br><br>";
              if (audio) {
                  phonethiqueHTML += "<audio id='audioPlayer' src='" + audio + "' controls></audio>";
              } else if (audio1) {
                  phonethiqueHTML += "<audio id='audioPlayer1' src='" + audio1 + "' controls></audio>";
              }
              phonethiqueHTML += "</div>";
          }
          
          // Ajouter phonethiqueHTML à htmlContent
          htmlContent += phonethiqueHTML;
          
          if (synonyme) {
              let synonymeText = "<div class='carte3'><p class='nom'> synonyme : </p>" + "<p class='synonyme'>" + synonyme;
          
              if (synonyme1 !== undefined) {
                  synonymeText += ", " + synonyme1;
              }
      
              synonymeText += ".</p></div>";
          
              htmlContent += synonymeText;
          }
          
          resultat.innerHTML = htmlContent;
        } else {
          resultat.innerHTML = "<p class='rest'>🤷‍♂️ <br> Oops! No definition found!</p>";
        }
      });
    } else {
      resultat.innerHTML = "<p class='rest'><span>&#9757;</span>Please fill in the Word field!  </p>";
    }
  }
  // Ajouter un écouteur d'événement sur le champ de recherche (avec l'ID "Recherche")
  document.getElementById("Recherche").addEventListener("keydown", function(event) {
    // Vérifier si la touche pressée est la touche "Entrée" (code de touche 13)
    if ( event.key === "Enter") {
      // Appeler la fonction search
      search();
    }
  });