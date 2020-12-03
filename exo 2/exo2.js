let identifiant = document.getElementById('liste-commissions');
let buttonDelete = document.getElementById('delete');
let newListe = document.createElement('li');

let input = document.getElementById('input1');

function ajouter() {
    newListe.innerHTML = "2 nesquik";
    identifiant.append(newListe);
}

input.addEventListener('click', ajouter);

buttonDelete.addEventListener('click', function () {
    input.removeEventListener('click', ajouter);
});