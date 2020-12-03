let identifiant = document.getElementById('liste-commissions');
let buttonDelete = document.getElementById('delete');
let newListe = document.createElement('li');

let input = document.getElementById('input1');

input.addEventListener('click',function ajouter(){
    newListe.innerHTML = "2 nesquik ";
    identifiant.append(newListe);
});

buttonDelete.addEventListener('click', function () {
    input.removeEventListener("click", ajouter);
});