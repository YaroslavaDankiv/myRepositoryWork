console.log("Numbers of Fibonachi");

var worker = new Worker("js/worker.js");
worker.onmessage = function(e){

	document.write('<ul>');
  document.write("<li>");
	document.write(e.data);
var clientObj = JSON.parse(e.data);
		for (var i = 0; i < clientObj.length; i++){
			   var workerResult = clientObj[i];
				 	document.write(workerResult);
					document.write('</li>');
	}
	document.write('</ul>');
}
