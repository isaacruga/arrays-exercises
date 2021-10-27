var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let newarr = [];

for (let i = 0; i < mix.length; i++) {
    let vartype = mix[i]; 
    newarr.push(typeof vartype);
}

console.log(newarr);

