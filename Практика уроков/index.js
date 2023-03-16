const myFilms = {
	triller: 1, 
	comedy: 2, 
	horor: 3
}

myFilms.comedy = 1;
delete myFilms.triller;

console.log(myFilms);