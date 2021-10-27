/*let names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];

let prepender = names.map(function(name){
	return 'My name is: '+name;
});
console.log(prepender);*/

/* lo de arriba es lo mismo pero metes la función 
dentro del paréntesis de .map()*/



// array original
let names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];

// guardamos la función en una variable,
// en la función se añada 'My name is: '
let prepender = function(name){
	return 'My name is: '+name;
};

//creamos nueva variable pasándole map a la array original
// la nueva variable será una array
//se le pasa a cada elemento la función creada:(prepender)
let newArray = names.map(prepender);

// imprimimos en la consola
console.log(newArray);

/* map crea una nueva array pasándole una función 
a cada elemento de la array antigua */
