/*

Задача 2

Напишите функцию, которая переворачивает список, предпочтительно на месте

*/

const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function reverse(arr) {

	let reversed = []
	for (let i = arr.length - 1; i >= 0; i--) {
		reversed[arr.length - 1 - i] = arr[i]
		// reversed.push(arr[i])
	}
	return reversed
}
let res = reverse(myList)
console.log(res)

// -------------------------------------------

// // Создание массива myList, содержащего числа от 1 до 9.
// const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // Объявление функции reverse для обращения массива.
// function reverse(arr) {
//     // Инициализация пустого массива reversed для хранения обращенного массива.
//     let reversed = []
    
//     // Итерация по элементам массива arr в обратном порядке с помощью цикла for.
//     for (let i = arr.length - 1; i >= 0; i--) {
//         // Заполнение элементов массива reversed значениями из массива arr в обратном порядке.
//         reversed[arr.length - 1 - i] = arr[i]
//         // reversed.push(arr[i]) // Альтернативный способ добавления элементов в массив reversed.
//     }
    
//     // Возвращаем обращенный массив.
//     return reversed
// }

// // Вызов функции reverse с массивом myList в качестве аргумента.
// let res = reverse(myList)

// // Вывод обращенного массива в консоль.
// console.log(res)