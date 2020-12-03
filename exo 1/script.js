let identifiant = document.getElementById('liste-commissions');
let newListe = document.createElement('li');

let input = document.getElementById('input1');

input.addEventListener('click',function (){
    newListe.innerHTML = "2 nesquik ";
        identifiant.append(newListe);
});