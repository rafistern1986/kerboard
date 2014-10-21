var buttons = document.querySelectorAll("button");


var whenButtonIsClickd = function(x){
	console.log(x);
	var shift = x.shiftKey;
	if (shift !== true){
		var valueOfButton = x.target.innerHTML;
		document.querySelector("textarea").value += valueOfButton;
		}else{
		var valueOfButtonElse = x.target.innerHTML;
		valueOfButtonElse = valueOfButtonElse.toUpperCase();
		document.querySelector("textarea").value += valueOfButtonElse;
	}
}
var whenEnterIsClickd = function(x){
	var ctrl = x.ctrlKey;
	if(ctrl == false){
		var textArea = document.querySelector("textarea").value;
		document.querySelector("textarea").value = '';
		var results = document.querySelector("body > div > ul");
		var list = document.createElement("li");
		list.innerHTML = textArea;
		results.appendChild(list);
	}else{
		var textArea = document.querySelector("textarea").value;
		var results = document.querySelector("body > div > ul");
		var list = document.createElement("li");
		list.innerHTML = textArea;
		results.appendChild(list);
	}
}

var whenShiftIsClickd = function(){
	var theShiftElement = document.getElementById("kShift");
	
	if (theShiftElement.style.backgroundColor !== "blue"){
		theShiftElement.style.backgroundColor = "blue";
		var allButtons = document.querySelectorAll("button");
			for (var i = 0; i < 40; i++){
				allButtons[i].innerHTML = allButtons[i].innerHTML.toUpperCase();
			}
	}else{
		theShiftElement.style.backgroundColor = "buttonface";
		var allButtons = document.querySelectorAll("button");
			for (var i = 0; i < 40; i++){
				allButtons[i].innerHTML = allButtons[i].innerHTML.toLowerCase();
			}
	}
}	
	
	
	
	















