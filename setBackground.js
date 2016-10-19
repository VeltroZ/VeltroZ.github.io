//JavaScript for local storage

document.getElementById('couleurChoisi').innerHTML = localStorage.getItem("backcolor");

function bleu()
{
	document.getElementById("IDbody").classList.add("bodybleu") ;
	document.getElementById("IDbody").classList.remove("bodyvert");
	document.getElementById("IDbody").classList.remove("bodyrouge");

	localStorage.setItem("backcolor", "bleu");

	document.getElementById('couleurChoisi').innerHTML = localStorage.getItem("backcolor");

}

function vert()
{
	document.getElementById("IDbody").classList.add("bodyvert") ;
	document.getElementById("IDbody").classList.remove("bodybleu");
	document.getElementById("IDbody").classList.remove("bodyrouge");

	localStorage.setItem("backcolor", "vert");

	document.getElementById('couleurChoisi').innerHTML = localStorage.getItem("backcolor");

}

function rouge()
{
	document.getElementById("IDbody").classList.add("bodyrouge");
	document.getElementById("IDbody").classList.remove("bodyvert");
	document.getElementById("IDbody").classList.remove("bodybleu");

	localStorage.setItem("backcolor", "rouge");

	document.getElementById('couleurChoisi').innerHTML = localStorage.getItem("backcolor");

}


 //button event
 document.getElementById('btnbleu').addEventListener('click', bleu);
 document.getElementById('btnvert').addEventListener('click', vert);
 document.getElementById('btnrouge').addEventListener('click', rouge);