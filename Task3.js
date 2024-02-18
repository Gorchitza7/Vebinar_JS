/*

Задача 3

Напишите функцию, которая проверяет, встречается ли элемент в списке. 

*/

const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function contains(arr, elem) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === elem) {
			return true
		}
	}
	return false
}

console.log(contains(myList, 12))
console.log(contains(myList, 1))

// ----------------------------------------------

// // Создание массива myList, содержащего числа от 1 до 9.
// const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // Объявление функции contains для проверки наличия элемента в массиве.
// function contains(arr, elem) {
//     // Итерация по элементам массива arr с помощью цикла for.
//     for (let i = 0; i < arr.length; i++) {
//         // Если текущий элемент массива равен искомому элементу (elem), возвращаем true.
//         if (arr[i] === elem) {
//             return true
//         }
//     }
//     // Если элемент не найден после завершения цикла, возвращаем false.
//     return false
// }

// // Вызов функции contains с аргументами myList и 12, а затем вывод результата в консоль.
// console.log(contains(myList, 12)) // Ожидаемый результат: false, так как элемент 12 отсутствует в массиве.

// // Вызов функции contains с аргументами myList и 1, а затем вывод результата в консоль.
// console.log(contains(myList, 1)) // Ожидаемый результат: true, так как элемент 1 присутствует в массиве.

