// Получаем данные по ключу myKey в sessionStorage
let myKey = sessionStorage.getItem("myKey");

// Если sessionStorage очищался или же закрывались все вкладки https://codepen.io/, то ключа не будет.
// Если не зачищался - получим значение по ключу
console.log("1. myKey", myKey);

// Запишем данные в sessionStorage в виде простой строки
// sessionStorage.setItem('myKey', 'myValue');

// Получаем данные по ключу myKey в localStorage
// myKey = sessionStorage.getItem('myKey');
// console.log('2. myKey', myKey);

// При перезагрузки страницы в обоих случаях выведется значение
// "myValue", так как сессия еще не закончилась.
// Если вы закроете все вкладки https://codepen.io/ и откроете
// пример заново, то в первом случае данных не будет,
// а во втором, после записи, уже будут
