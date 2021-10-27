function generateRandomArray()
{
	var auxArray = []; // no entiendo esta función
	var randomLength = Math.floor(Math.random()*100);
	for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
var myStupidArray = generateRandomArray();

//Your code here
let theLastOne = myStupidArray[myStupidArray.length - 1];
console.log(theLastOne);

