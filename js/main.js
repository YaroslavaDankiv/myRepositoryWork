////////////////////////////////////////
(function(){
	var daleyM = 3000;
	deleteListItem('foreground');

function deleteListItem(cssSelector){
	var ul = document.querySelector("ul." + cssSelector);
	var items = ul.getElementsByTagName('li');

	var intervalId =  setInterval(function deleteListItem(){
			 if(items.length != 0){
		ul.removeChild(items[0]);
	}else {
		clearInterval(intervalId);
	}
}, daleyM);
alert("Hello");
}
}());
