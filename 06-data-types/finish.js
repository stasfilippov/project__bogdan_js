/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const myName = 'Stas';
const years = 18;
const youOld = true;
const myCountry = null; 
const notInform = undefined;
const myFilmsDB = {
	triller: '1',
	comedy: '2'
}
const myFilms = ["1", "2"];


console.log(typeof(myName));
console.log(typeof(years));
console.log(typeof(youOld));
console.log(typeof(myCountry));
console.log(typeof(notInform));
console.log(typeof(myFilmsDB));
console.log(typeof(myFilms));
