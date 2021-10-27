var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(item){
	
	if (typeof(item) == "Number"){ // no entiendo esto, si pongo item  === string, boolean me da la array con Fahrenheit
		return ( item * 9 / 5) + 32;
	}	else {
		return ( item * 9 / 5) + 32;
	}	
	// si quito el else me da [ undefined, undefined, undefined, undefined ]
	
});

console.log(arrayOfFahrenheitValues);


/* OTRA FORMA: 
var arrayOfCelsiusValues = [-2,34,56,-10];

var CelsiusToFahrenheit = (function(item){
	
if (item < 0){
	return ( item * 9 / 5) + 32;
}	else {
	return ( item * 9 / 5) + 32;
}

});

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(CelsiusToFahrenheit);

console.log(arrayOfFahrenheitValues);*/



// no entiendo porqué en el foreach se pone (item, index, array)
// https://youtu.be/159EAISAxwg?t=274

// no se la diferencia entre map y foreach: map crea nueva array y foreach ejecuta una función para cada elemento de esa array???
