let tasks = [
	{ label: 'Eat my lunch', done: true },
	{ label: 'Make the bed', done: false },
	{ label: 'Have some fun', done: false },
	{ label: 'Finish the replits', done: false },
	{ label: 'Replit the finishes', done: true },
	{ label: 'Ask for a raise', done: false },
	{ label: 'Read a book', done: true },
	{ label: 'Make a trip', done: false }
];

let donetasks = tasks.filter((el)=> {return el.done = true});

//your code here
console.log(donetasks);

/*let newArray = tasks.filter(function (el) {
	return el.done = true;
  });

//your code here
console.log(newArray);*/