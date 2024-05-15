function filterArray(numbers, value) {
  const filteredNumbers = []; // Створюємо порожній масив для збереження підходящих чисел

  // Використовуємо цикл для ітерації кожного елемента масиву numbers
  for (let i = 0; i < numbers.length; i++) {
    // Перевіряємо, чи число більше за значення value
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]); // Додаємо число до нового масиву, якщо воно більше за value
    }
  }

  return filteredNumbers; // Повертаємо новий масив з підходящими числами
}

// Перевірка роботи функції
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
