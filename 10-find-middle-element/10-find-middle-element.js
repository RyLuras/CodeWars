const gimme = (arr) => arr.indexOf(arr.slice().sort((a,b) => a - b)[1]); 
