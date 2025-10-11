// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// const index = styles.indexOf("blues");
// if (index !== -1) {
//   styles[index] = "classic";
// }
// console.log(styles);


// function logItems(array) {
  
// }

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];
// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const name = prompt("Enter your login:");
//   if (array.includes(name)) {
//     alert (`"Welcome, ${name}!"`)
//   } else {
//     alert(`"User not found"`);
//   }
// }
// console.log(checkLogin(logins));

// // Напишіть функцію caclculateAverage(),
// // яка приймає довільну кількість
// // аргументів і повертає їхнє середнє значення.
// // Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...array) {
//   let sum = 0;
//   let num = 0;
//   for (let item of array) {
//     if (typeof item === "number") {
//       sum += item;
//       num++;
//     }
//   }
//   return num > 0 ? sum / num : 0;
// }
// console.log(caclculateAverage)

// // Напишіть функцію, яка сумуватиме сусідні числа 
// // і пушитиме їх в новий масив.

// // const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// // уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// // третє - з четвертим і так до кінця.
// // В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function fn(numbers) {
//   const newArray = [];

//   for (let i = 0; i < numbers.length - 1; i += 1){
//     const sum = numbers[i] + numbers[i + 1];
//     newArray.push(sum);
//   }
//   return newArray;
// }

