//JavaScript for set background
var couleurBack;

couleurBack = localStorage.getItem("backcolor");

console.log(couleurBack)


var couleurClass = "";

switch (couleurBack) {
case "vert":
    couleurClass = "bodyvert";
    break;

case "rouge":
    couleurClass = "bodyrouge";
    break;

case "bleu":
    couleurClass = "bodybleu";
    break;

  default:
}
	

document.body.classList.add(couleurClass);