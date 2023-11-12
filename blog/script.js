var target = document.getElementById('popup');

window.addEventListener('click', mouseClickedPop);
function mouseClickedPop (event){
  var xpos = (event.clientX + window.scrollX);
  var ypos = (event.clientY + window.scrollY);
	
	if(xpos < document.getElementById('popup').offsetWidth / 2) {
		xpos = document.getElementById('popup').offsetWidth / 2;
	} else if(xpos > (window.innerWidth - (document.getElementById('popup').offsetWidth / 2))) {
		xpos = window.innerWidth - (document.getElementById('popup').offsetWidth / 2);
	}
	
  document.getElementById('popup').style.transform = "translate("+ (xpos - (document.getElementById('popup').offsetWidth / 2)) + "px," + (ypos - (document.getElementById('popup').offsetHeight / 2)) + "px)";
	document.getElementById('popContent').style = "color: white";
}

function openPopup(element) {
	document.getElementById('popup').style.display = "block";
}

function setPopup(title, content) {
	document.getElementById('popInnerTitle').innerHTML = title;
	document.getElementById('popContent').innerHTML = content;
}