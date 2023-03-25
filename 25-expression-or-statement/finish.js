/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15 //выражение - инструкция

const myObject = { //инструкция
  x: 10, //выражение
  y: true,
}

myObject.z = 'abc' // выражение-инструкция

delete myObject.x //инструкция --ошибка - тут выражение-инструкция

let newVariable // инструкция

// выражение - инструкция
newVariable = 30 + 5  // выражение

//выражение-инструкция
console.log(newVariable) // в параметре - выражение

//выражение-инструкция
if (newVariable > 10) { //
  console.log(`${newVariable} больше 10`) 
}
