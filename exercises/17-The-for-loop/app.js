var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];

for (var index in myArray){

	let total = myArray.reduce((a, b) => a + b, 0); //cómo funciona la sintaxis para obtener el total de un array
	let average = total / myArray.length;
	console.log (average);
}




