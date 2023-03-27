/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */


//ВЫПОЛНЕНО 
const cars = [
    {
        carBrand: 'bmw',
        price: 3.4,
        isAvailableForSale: true
    }, 
    {
        carBrand: 'volvo',
        price: 2.4,
        isAvailableForSale: true
    }, 
    {
        carBrand: 'mers',
        price: 2.0,
        isAvailableForSale: false
    }
]

cars.push({   // можно было создать переменную с новым объектом и вписать имя переменной
    carBrand: 'bmw',
    price: 3.4,
    isAvailableForSale: true
})

console.log(cars)