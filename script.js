function updateDOMElement(event, type){
	if (type == "html"){
		document.getElementById("html").innerHTML = event.target.value;
		localStorage.setItem("html", event.target.value);
	}else if (type == "css"){
		document.getElementById("css").innerHTML = event.target.value;
		localStorage.setItem("css", event.target.value);
	}
}
if (typeof(Storage) !== "undefined") {
	document.getElementById("html").innerHTML = localStorage.getItem("html");
	document.getElementById("htmlEditor").value = localStorage.getItem("html");
	document.getElementById("css").innerHTML = localStorage.getItem("css");
	document.getElementById("cssEditor").value = localStorage.getItem("css");
}
