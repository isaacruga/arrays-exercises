let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];


function mergeTwoList(){
    let odd = [];
    let even = [];

    for(let i = 0; i < list_of_numbers.length; i++){
        
        if (i % 2 === 0){
            odd.push(list_of_numbers[i]);
        } 
    }


    for(let i = 0; i < list_of_numbers.length; i++){
        
        if (i % 2 !== 0){
            even.push(list_of_numbers[i]);
        } 
    }
    
    let newArray = odd + even;
    return newArray;
}

console.log(mergeTwoList(list_of_numbers))

// no entiendo "1...that expects an array of numbers (integers).", hay que poner return o crear una variable??

// me sale esto: 4,85,37,5,66,20,41,76,55,280,59,25,64,81,64,22,76,96,68
// los nºs desordenados