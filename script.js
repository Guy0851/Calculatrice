let boutonsChiffres = [
document.getElementById("zero"),
document.getElementById("un"),
document.getElementById("deux"),
document.getElementById("trois"),
document.getElementById("quatre"),
document.getElementById("cinq"),
document.getElementById("six"),
document.getElementById("sept"),
document.getElementById("huit"),
document.getElementById("neuf")
]
let zoneDeTexte = document.getElementById('results')
let texteConcatene = ""

document.addEventListener("DOMContentLoaded", function() {
    for (var i = 0; i < boutonsChiffres.length; i++) {
        boutonsChiffres[i].addEventListener("click", function() {
            // Récupérez le texte du bouton cliqué
            var texteBouton = this.value;
            texteConcatene += texteBouton
            zoneDeTexte.textContent = texteConcatene;
            console.log(boutonsChiffres[i])
        })
}})

document.addEventListener("DOMContentLoaded", function() {
    btnC.addEventListener("click", function(){
        texteConcatene = ""
        zoneDeTexte.textContent = texteConcatene
    })
})

var btnEgal = document.getElementById("egal");
var btnVirgule = document.getElementById("virgule");
var btnPlus = document.getElementById("plus");
var btnMoins = document.getElementById("moins");
var btnFois = document.getElementById("fois");
var btnC = document.getElementById("C")
var btnPosNeg = document.getElementById("±")
var btnPercent = document.getElementById("%")
var btnDiviseur = document.getElementById("÷")

/*
function ajouterCalcul(x){
    let zoneDeTexte = document.getElementById('results');
    zoneDeTexte.innerHTML = `${x}`;
}
document.addEventListener("DOMContentLoaded", function() {
    boutonsChiffres.addEventListener("click", function() {
        zoneDeTexte.innerHTML = "L'événement JavaScript s'est déclenché !";
    });
    
})*/