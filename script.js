//JavaScript for local storage
var color;

document.getElementById('couleurChoisi').innerHTML = localStorage.getItem("backcolor");
color = localStorage.getItem("backcolor");

function bleu()
{
	document.getElementById("IDbody").classList.add("bodybleu") ;
	document.getElementById("IDbody").classList.remove("bodyvert");
	document.getElementById("IDbody").classList.remove("bodyrouge");

	localStorage.setItem("backcolor", "bleu");

	document.getElementById('couleurChoisi').innerHTML = localStorage.getItem("backcolor");
	color = localStorage.getItem("backcolor");
	console.log(color)
}

function vert()
{
	document.getElementById("IDbody").classList.add("bodyvert") ;
	document.getElementById("IDbody").classList.remove("bodybleu");
	document.getElementById("IDbody").classList.remove("bodyrouge");

	localStorage.setItem("backcolor", "vert");

	document.getElementById('couleurChoisi').innerHTML = localStorage.getItem("backcolor");
	color = localStorage.getItem("backcolor");
	console.log(color)
}

function rouge()
{
	document.getElementById("IDbody").classList.add("bodyrouge");
	document.getElementById("IDbody").classList.remove("bodyvert");
	document.getElementById("IDbody").classList.remove("bodybleu");

	localStorage.setItem("backcolor", "rouge");

	document.getElementById('couleurChoisi').innerHTML = localStorage.getItem("backcolor");
	color = localStorage.getItem("backcolor");
	console.log(color)
}



 //button event
 document.getElementById('btnbleu').addEventListener('click', bleu);
 document.getElementById('btnvert').addEventListener('click', vert);
 document.getElementById('btnrouge').addEventListener('click', rouge);