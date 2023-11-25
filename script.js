

// *******************************************************************************

// Récupérer tous les boutons avec la classe "btn-operator"
var buttons = document.querySelectorAll('.btn-operator');
var resultInput = document.getElementById('resultInput');

// Ajouter un écouteur d'événements à chaque bouton
buttons.forEach( (butt) => {
  butt.addEventListener('click', () => {
    // Ajouter la valeur du bouton à la valeur actuelle du champ d'entrée
    resultInput.value += butt.innerHTML;
  });
});


// *******************************************************************************



//Effacer
var eff=document.getElementById("eff");

eff.addEventListener("click",()=>{
  console.log("RES:",eff);
  resultInput.value =resultInput.value.slice(0,-1);

})

// *******************************************************************************


//Effacer Tout
var effT=document.getElementById("effT");

effT.addEventListener('click', ()=>{
   console.log("effT :",effT);
   resultInput.value = "";
})

