function printMyName () {
	console.log('Stas');
} // данная функция будет являтся коллбек-функцией

setTimeout (printMyName, 1000); // колбек функция вызвана в качестве аргумента, внутри другой функции
