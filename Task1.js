/*
Задача 1

Напишите функцию, которая возвращает самый большой элемент в списке.

*/

const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function largest(arr) {

	let largestNam = 0
	for(let i = 0; i < arr.length; i++){
		if(largestNam < arr[i]){
			largestNam = arr[i]
		}
	}
	return largestNam
}
let myNum = largest(myList)
console.log('The largest num is', myNum);

// -----------------------------------------------------

// // Создание массива myList, содержащего числа от 1 до 9.
// const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // Объявление функции largest для поиска наибольшего элемента в массиве.
// function largest(arr) {
//     // Инициализация переменной largestNum для хранения наибольшего значения.
//     let largestNam = 0
    
//     // Итерация по элементам массива arr с помощью цикла for.
//     for(let i = 0; i < arr.length; i++){
//         // Вывод текущего элемента массива в консоль.
//         console.log(arr[i]);
        
//         // Проверка, является ли текущий элемент больше текущего наибольшего значения.
//         if(largestNam < arr[i]){
//             // Если текущий элемент больше текущего наибольшего значения, обновляем наибольшее значение.
//             largestNam = arr[i]
//         }
//     }
    
//     // Возвращаем наибольшее значение из функции.
//     return largestNam
// }

// // Вызов функции largest с массивом myList в качестве аргумента.
// let myNum = largest(myList)

// // Вывод наибольшего значения в консоль.
// console.log('The largest num is', myNum);

