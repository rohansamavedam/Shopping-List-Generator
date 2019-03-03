var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelector("ul");
var del = document.getElementById("delete");

function inputLength() {
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	list.appendChild(li);
	input.value = "";
}

function addForClick(){
	if(inputLength()>0){
		createListElement();
	}

}
function addForEnter(event){
	if(inputLength()>0 && event.keyCode === 13){
		createListElement();
	}
}

function deleteForClick(){
	
		list.removeChild(list.childNodes[0]);
	
}

button.addEventListener("click" , addForClick);
input.addEventListener("keypress", addForEnter);
del.addEventListener("click", deleteForClick);