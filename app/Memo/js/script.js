var nbpost;


function add()
{
	nbpost= document.getElementById('Nomsaisie').value;
	nbpost = document.getElementById('Prenomsaisie').value;

	localStorage.setItem("nom", "tic");
	localStorage.setItem("Prenom", "tac");

	console.log(nbpost);
	nbpost++
}

document.getElementById('btnvalid').addEventListener('click', add)