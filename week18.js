//Задание 1
//Создайте функцию makeOne которая записывает в Local Storage ключ games со значением 11. Вызывается функция по кнопке Задание 1.

function makeOne() {
  window.localStorage.setItem("games", "11"); //Ваш код
}

document.querySelector(".b-1").onclick = makeOne;
//добавьте слушатель события

//Задание 2
//Создайте функцию makeTwo, которая сохраняет в Local Storage строку "7,6,5". Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 2.

function makeTwo() {
  window.localStorage.setItem("numbers", "7,6,5"); //Ваш код
  console.log('Строка "7,6,5" была записана в Local Storage.');
}

document.querySelector(".b-2").onclick = makeTwo;
//добавьте слушатель события

//Задание 3
//Создайте функцию makeThree, которая сохраняет в Local Storage строку "name=John, age=25". Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 3.

function makeThree() {
  window.localStorage.setItem("string", "name=John, age=25"); //Ваш код
  console.log('Строка "name=John, age=25" была записана в Local Storage.');
}

document.querySelector(".b-3").onclick = makeThree; //добавьте слушатель события

//Задание 4
//Создайте функцию makeFour, которая сохраняет в Local Storage логическое значение true. Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 4.

function makeFour() {
  window.localStorage.setItem("boolean", "true"); //Ваш код
  console.log("Логическое значение true было записано в Local Storage.");
}

document.querySelector(".b-4").onclick = makeFour; //добавьте слушатель события

//Задание 5
//Создайте функцию makeFive, которая сохраняет в Local Storage значение null. Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 5.

function makeFive() {
  window.localStorage.setItem("key", "null"); //Ваш код
  console.log("Значение null было записано в Local Storage.");
}

document.querySelector(".b-5").onclick = makeFive; //добавьте слушатель события

//Задание 6
//Создайте функцию makeSix, которая сохраняет в Local Storage по ключу objectSix объект obj = { name: "Алиса", age: 30 }. Вызывается функция по кнопке Задание 6.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()
const obj = { name: "Алиса", age: 30 };
function makeSix() {
  window.localStorage.setItem("objectSix", JSON.stringify(obj)); //Ваш код
  console.log("Объект obj был записан в Local Storage.");
}

document.querySelector(".b-6").onclick = makeSix; //добавьте слушатель события

//Задание 7
//Создайте функцию makeSeven, которая сохраняет в Local Storage по ключу objectSeven объект obj = {
//   city: "Лондон",
//   country: "Великобритания",
//   population: 8900000,
//   language: "английский"
// }. Вызывается функция по кнопке Задание 7.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()
const obj2 = {
  city: "Лондон",
  country: "Великобритания",
  population: 8900000,
  language: "английский",
};

function makeSeven() {
  window.localStorage.setItem("objectSeven", JSON.stringify(obj2)); //Ваш код
  console.log("Объект obj был записан в Local Storage.");
}

document.querySelector(".b-7").onclick = makeSeven; //добавьте слушатель события

//Задание 8
//Создайте функцию makeEight, которая сохраняет в Local Storage по ключу objectEight объект obj = {
//   fruit: "Яблоко",
//   color: "красное",
//   quantity: 10,
//   price: 199
// }. Вызывается функция по кнопке Задание 8.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()
const obj3 = {
  fruit: "Яблоко",
  color: "красное",
  quantity: 10,
  price: 199,
};
function makeEight() {
  window.localStorage.setItem("objectEight", JSON.stringify(obj3)); //Ваш код
  console.log("Объект obj был записан в Local Storage.");
}

document.querySelector(".b-8").onclick = makeEight; //добавьте слушатель события

//Задание 9
//Создайте функцию makeNine, которая сохраняет в Local Storage по ключу arrayNine массив arr = [1, 2, 3, 4, 5]. Вызывается функция по кнопке Задание 9.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()
arr = [1, 2, 3, 4, 5];
function makeNine() {
  window.localStorage.setItem("arrayNine", JSON.stringify(arr)); //Ваш код
  console.log("Массив arr был записан в Local Storage.");
}

document.querySelector(".b-9").onclick = makeNine; //добавьте слушатель события

//Задание 10
//Создайте функцию makeTen, которая сохраняет в Local Storage по ключу arrayTen массив arr = ["яблоко", "банан", "апельсин"]. Вызывается функция по кнопке Задание 10.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()
arr = ["яблоко", "банан", "апельсин"];
function makeTen() {
  window.localStorage.setItem("arrayTen", JSON.stringify(arr)); //Ваш код
  console.log("Массив arr был записан в Local Storage.");
}

document.querySelector(".b-10").onclick = makeTen; //добавьте слушатель события

//Задание 11
//Создайте функцию makeEleven, которая сохраняет в Local Storage по ключу arrayEleven массив arr = [
// { name: "Алиса", age: 30 },
// { name: "Филин", age: 35 },
// { name: "Кот", age: 40 }
// ]. Вызывается функция по кнопке Задание 11.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()
arr = [
  { name: "Алиса", age: 30 },
  { name: "Филин", age: 35 },
  { name: "Кот", age: 40 },
];
function makeEleven() {
  window.localStorage.setItem("arrayEleven", JSON.stringify(arr)); //Ваш код
  console.log("Массив arr был записан в Local Storage.");
}

document.querySelector(".b-11").onclick = makeEleven; //добавьте слушатель события

//Задание 12
//Создайте функцию showEleven, которая при нажатии кнопки Задание 12 получит из Local Storage сохраннённый массив arrayEleven. Выведите в practicum12 в формате ключ пробел значение. Вызывается функция по кнопке Задание 12.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse()

function showEleven() {
  const arrayElevenString = window.localStorage.getItem("arrayEleven");
  const arrayEleven = JSON.parse(arrayElevenString); //Ваш код
  let output = "";
  for (let i = 0; i < arrayEleven.length; i++) {
    const object = arrayEleven[i];
    for (let key in object) {
      output += `${key} ${object[key]} `;
    }
  }
  document.querySelector(".practicum12").textContent = output;
}

document.querySelector(".b-12").onclick = showEleven; //добавьте слушатель события

//Задание 13
//Создайте функцию showTen, которая при нажатии кнопки Задание 12 получит из Local Storage сохраннённый массив arrayTen. Выведите в элемент с классом practicum13 в формате ключ пробел значение перенос строки. Вызывается функция по кнопке Задание 13.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для работы с массивом используйте циклы.

const showTen = () => {
  const arrayTenString = window.localStorage.getItem("arrayTen");
  if (arrayTenString) {
    const arrayTen = JSON.parse(arrayTenString); //Ваш код
    const resultElement = document.querySelector(".practicum13");
    for (const key in arrayTen) {
      const value = arrayTen[key];
      resultElement.innerHTML += `${key}: ${value}<br>`;
    }
  } else {
    console.log("Массив arrayTen не найден в Local Storage.");
  }
};

document.querySelector(".b-13").addEventListener("click", showTen); //добавьте слушатель события

//Задание 14
//Создайте функцию showNine, которая при нажатии кнопки Задание 14 получит из Local Storage сохраннённый массив arrayNine. Выведите в элемент с классом practicum14 в формате ключ пробел значение перенос строки. Вызывается функция по кнопке Задание 14.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для работы с массивом используйте циклы.

const showNine = () => {
  const arrayNineString = window.localStorage.getItem("arrayNine");
  if (arrayNineString) {
    const arrayNine = JSON.parse(arrayNineString);
    const resultElement = document.querySelector(".practicum14");
    for (const key in arrayNine) {
      const value = arrayNine[key];
      resultElement.innerHTML += `${key}: ${value}<br>`;
    }
  } else {
    console.log("Массив arrayNine не найден в Local Storage.");
  }
};

document.querySelector(".b-14").addEventListener("click", showNine);

//Задание 15
//Создайте функцию showEight, которая при нажатии кнопки Задание 15 получит из Local Storage сохраннённый объект objectEight. Выведите в элемент с классом practicum15 в формате значение точка с запятой. Вызывается функция по кнопке Задание 15.

const showEight = () => {
  const objectEightString = window.localStorage.getItem("objectEight");
  if (objectEightString) {
    const objectEight = JSON.parse(objectEightString);
    const resultElement = document.querySelector(".practicum15");
    for (const key in objectEight) {
      const value = objectEight[key];
      resultElement.innerHTML += `${key}: ${value}; `;
    }
  } else {
    console.log("объект objectEight не найден в Local Storage.");
  }
};

document.querySelector(".b-15").addEventListener("click", showEight);

//Задание 16
//Создайте функцию showSeven, которая при нажатии кнопки Задание 16 получит из Local Storage сохраннённый объект objectSeven. Выведите в элемент с классом practicum16 строку: "В Лондоне живёт 8900000 человек", вместо названия города и числа жителей, используйте значения по ключу city и population соответственно. Вызывается функция по кнопке Задание 16.

const showSeven = () => {
  const objectSevenString = window.localStorage.getItem("objectSeven");
  const objectSeven = JSON.parse(objectSevenString);
  const resultElement = document.querySelector(".practicum16");
  const cityValue = objectSeven.city;
  const populationValue = objectSeven.population;
  resultElement.innerHTML += `В ${cityValue} живёт ${populationValue} человек`;
};

document.querySelector(".b-16").addEventListener("click", showSeven);

//Задание 17
//Создайте функцию showSix, которая при нажатии кнопки Задание 17 получит из Local Storage сохраннённый объект objectSix. Выведите в элемент с классом practicum17 строку: "Привет! Я Алиса. Мне 30 лет.", вместо имени и возраста, используйте значения по ключу name и age соответственно. Вызывается функция по кнопке Задание 17.

const showSix = () => {
  const objectSixString = window.localStorage.getItem("objectSix");
  const objectSix = JSON.parse(objectSixString);
  const resultElement = document.querySelector(".practicum17");
  const nameValue = objectSix.name;
  const ageValue = objectSix.age;
  resultElement.innerHTML += `Привет! Я ${nameValue}. Мне  ${ageValue} лет.`;
};

document.querySelector(".b-17").addEventListener("click", showSix);

//Задание 18
//Создайте функцию clearLocalStorage, которая очищает весь Local Storage. Вызывается функция по кнопке Задание 18.

const clearLocalStorage = () => {
  window.localStorage.clear(); //Ваш код
  console.log("Local Storage очищен.");
};

document.querySelector(".b-18").addEventListener("click", clearLocalStorage); //добавьте слушатель события

//Задание 19
//Cоздана форма с одним поле ввода, в которое пользователь может вводить только числа. Создайте массив numbers. Когда пользователь нажимает кнопке Задание 19 число должно добавляться в массив. Массив должен сохраняться в Local Storage с ключем task19. Вызывается функция по кнопке Задание 19. Что произойдёт, если нажать на кнопке трижды?
//при нажатии кнопки трижды, будет трижды записано последнее число
let numbers = [];

const addToNumbers = () => {
  const numberInput = document.getElementById("numberInput");
  const number = parseInt(numberInput.value);
  numbers.push(number); //добавляем в массив число
  window.localStorage.setItem("task19", JSON.stringify(numbers));
  //Ваш код
};

document.querySelector(".b-19").addEventListener("click", addToNumbers);

//Задание 20
//Создайте функцию removeLastElement, которая при вызове удаляет из массива numbers последний элемент. После чего массив сохраняется в Local Storage с ключем task19 (используйте массив из задания 19). Вызывается функция по кнопке Задание 20.
let numbersNew = [];

const removeLastElement = () => {
  if (numbers.length > 0) {
    const numbersLR = window.localStorage.getItem(numbers.pop());
    numbersNew.push(numbersLR);
    window.localStorage.setItem("task19", JSON.stringify(numbersNew)); //Ваш код
    console.log(
      "Последний элемент удален из массива numbers и сохранен в Local Storage."
    );
  } else {
    console.log("Массив numbers пуст.");
  }
};

document.querySelector(".b-20").addEventListener("click", removeLastElement); //добавьте слушатель события

//Задание 21
//Создайте функцию addToCart, которая при нажатии кнопки Задание 21 получает из Local Storage сохранённый массив cartItems. Затем добавляет новый элемент в массив, представляющий товар, введённый вами в поле ввода. Массив cartItems должен сохраняться в Local Storage с ключом task21. Вызывается функция по кнопке Задание 21.
//Подсказка: необходимо проверить существует ли значение и не является пустым. Если значение в хранилище есть, то оно преобразуется из JSON в массив. В противном случае, устанавливается пустой массив.
let cartItems = [];
const addToCart = () => {
  const productInput = document.getElementById("productInput");
  const product = productInput.value;

  if (product.trim() !== "") {
    let cartItems = window.localStorage.getItem("cartItems");
    cartItems = cartItems ? JSON.parse(cartItems) : []; //код из подсказки
    cartItems.push(product);
    window.localStorage.setItem("task21", JSON.stringify(cartItems)); //Ваш код

    console.log(
      `Товар "${product}" добавлен в корзину и сохранен в Local Storage.`
    );
  } else {
    console.log("Введите название товара.");
  }
};

document.querySelector(".b-21").addEventListener("click", addToCart);

//Задание 22
//Создайте функцию removeFromCart, которая при нажатии кнопки Задание 22 получает из Local Storage сохранённый массив cartItems. Затем удаляет последний элемент из массива. Массив cartItems должен сохраняться в Local Storage с ключом cartItems. Вызывается функция по кнопке Задание 22.
//Подсказка: необходимо проверить, существует ли значение и не является ли оно пустым. Это может вызвать ошибку, если cartItems не существует в Local Storage или является пустым.

const removeFromCart = () => {
  let cartItems = window.localStorage.getItem("cartItems");
  cartItems = cartItems ? JSON.parse(cartItems) : [];
  const newCart = cartItems.pop();
  window.localStorage.setItem("task21", JSON.stringify(newCart));
  //Ваш код
};

document.querySelector(".b-22").addEventListener("click", removeFromCart);

//Задание 23
//Создайте функцию showCart, которая при нажатии кнопки Задание 23 получает из Local Storage сохранённый массив cartItems. Выведите элементы массива в элемент с классом practicum23. Вызывается функция по кнопке Задание 23.

const showCart = () => {
  const cartItemsContainer = document.querySelector(".practicum23");
  const arrayString = window.localStorage.getItem("task21");
  const array23 = JSON.parse(arrayString);
  cartItemsContainer.innerHTML += array23; //Ваш код
};

document.querySelector(".b-23").addEventListener("click", showCart);

//Задание 24
//Создайте функцию updateCartCount, которая при нажатии кнопки Задание 24 обновляет количество товаров в корзине. Получите из Local Storage сохранённый массив cartItems и выведите количество товаров в элемент с классом practicum24 (например: "Количество товаров в корзине 3"). Вызывается функция по кнопке Задание 24.

const updateCartCount = () => {
  const cartItemsContainer = document.querySelector(".practicum24");
  const arrayString = window.localStorage.getItem("task21");
  const count = JSON.parse(arrayString);
  cartItemsContainer.innerHTML += `Количество товаров в корзине ${count.length}`; //Ваш код
};

document.querySelector(".b-24").addEventListener("click", updateCartCount);

//Задание 25
//Создайте функцию clearCart, которая при нажатии кнопки Задание 25 очищает весь массив cartItems в Local Storage. Вызывается функция по кнопке Задание 25.

const clearCart = () => {
  window.localStorage.removeItem("task21"); //Ваш код
  console.log("Корзина очищена.");
};

document.querySelector(".b-25").addEventListener("click", clearCart);

//Задание 26
//При загрузке страницы установите cookie с именем "username" и значением "Кот Учёный". Выведите сообщение в консоль, подтверждающее успешное создание cookie.

document.cookie = "username=Кот Учёный"; //Ваш код
console.log("Cookie 'username' установлен.");

//Задание 27
//Допишите функцию getCookie, которая принимает имя cookie. Функция должна получать значение cookie с указанным именем, возвращать его и записывать в элемент с классом practicum27. Если cookie с указанным именем не найден, функция должна возвращать пустую строку. Вызывается функция по кнопке Задание 27. Выведите куку с именем "username".

const getCookie = (name) => {
  const cookieContainer = document.querySelector(".practicum27");
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      const value = cookie[1] || "";
      cookieContainer.innerHTML += `Значение куки с именем ${name} - ${value}.`; //Ваш код
    } else {
      cookieContainer.innerHTML += `Куки с именем ${name} не найден.`;
    }
  } //Ваш код
};

document.querySelector(".b-27").addEventListener("click", () => {
  getCookie("username");
});

//Задание 28
//Создайте функцию checkCookie, которая будет проверять, существует ли cookie с именем "username". Если cookie существует, выведите его значение в консоль. В противном случае выведите сообщение "Cookie с именем 'username' не найден." Вызывается функция по кнопке Задание 28.
//Подсказка: используйте функцию getCookie

const checkCookie = (name) => {
  const cookieContainer = document.querySelector(".practicum27");
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      const value = cookie[1] || "";
      console.log(`Значение куки с именем ${name} - ${value}.`); //Ваш код
    } else {
      console.log(`Куки с именем ${name} не найден.`);
    }
  }
};

document.querySelector(".b-28").addEventListener("click", checkCookie); // добавьте слушатель события

//Задание 29
//Создайте функцию setCookie, которая принимает имя и значение cookie. Функция должна устанавливать cookie с указанным именем и значением. После установки cookie, выведите сообщение в консоль. Вызывается функция по кнопке Задание 29.

const setCookie = (name, value) => {
  document.cookie = `${name}=${value}`;
  console.log(`Cookie ${name} ${value} установлены`); //Ваш код
};

document.querySelector(".b-29").addEventListener("click", () => {
  setCookie("testCookie", "Hello");
});

//Задание 30
//Создайте функцию deleteCookie, которая принимает имя cookie. Функция должна удалять cookie с указанным именем. После удаления cookie, выведите сообщение в консоль. Вызывается функция по кнопке Задание 30.

const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  console.log(`Cookie ${name} удален`); //Ваш код
};

document.querySelector(".b-30").addEventListener("click", () => {
  deleteCookie("testCookie");
});
