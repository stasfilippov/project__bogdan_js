/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

//ВЫПОЛНЕНО

const myCities = ['London', 'New York', 'Singapore']

function cityInfo (name, index) {
    return `${name} is at the index ${index} in the myCities array`
}

myCities.forEach(name => console.log(cityInfo(name, myCities.indexOf(name))));
