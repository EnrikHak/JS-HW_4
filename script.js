// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0 && array[i] > 0) {
    console.log(`${array[i]} - Четное число`);
  } else if (array[i] === 0) {
    console.log(`${array[i]} - Это ноль`);
  } else {
    console.log(`${array[i]} - Нечетное число`);
  }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arrayTwo = [1, 2, 3, 4, 5, 6, 7];
arrayTwo.splice(3, 2);
console.log(arrayTwo);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const randomArray = [];
for (let i = 0; i < 5; i++) {
  randomArray.push(Math.floor(Math.random() * 10));
}
console.log(randomArray);

function summArray(array) {
  summ = 0;
  for (let i = 0; i < array.length; i++) {
    summ += array[i];
  }
  console.log(`Сумма элементов массива - ${summ}`);
}

function minValue(minNumber) {
  minNumber = Math.min.apply(null, randomArray);
  console.log(`Минимальное число массива - ${minNumber}`);
}

function numberThree(number) {
  for (let i = 0; i < number.length; i++) {
    number[i] === 3 ? console.log('Есть число 3!') : console.log('Числа 3 нет!');
  }
}

summArray(randomArray);
minValue(randomArray);
numberThree(randomArray);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

let mount = '';
for (let i = 0; i < 20; i++) {
  mount += 'x';
  console.log(mount);
}