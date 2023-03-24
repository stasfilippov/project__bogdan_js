/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */

let timeCurr = new Date ();
let timeCurrInMilisec = timeCurr.getTime() // возвращает таймстамп - количество миллисекунд от 1 января 1970 года
console.log(timeCurrInMilisec)
