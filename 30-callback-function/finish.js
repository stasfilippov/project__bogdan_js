/** ЗАДАЧА 30 - Колбэк функция
 *
 * 1. Что будет выведено в консоль?
 * Постарайтесь ответить без запуска кода.
 *
 * 2. Нужно ли как-то исправить этот код?
 */

setTimeout(function myFn() {
  console.log('Привет из функции myFn')
}, 2000)

// myFn() //будет вызвана функция myFn --> будет выведено сообщение в консоль -- ошибка
      // не вызовется тк не найдется функция с таким именем переменной 
      // вызов данной функции не требуется


