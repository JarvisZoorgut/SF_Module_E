// Получаем данные по ключу myKey в localStorage
let myKey = localStorage.getItem("myKey");

// Если localStorage очищался, то ключа не будет.
// Если не зачищался - получим значение по ключу
console.log("1. myKey", myKey);

// Запишем данные в localStorage в виде простой строки
localStorage.setItem("myKey", "myValue");

// JSON, который мы будем записывать
const jsonString = `
{
  "book": "Harry Potter"
}
`;

// Запишем данные в localStorage в виде JSON
localStorage.setItem("myJSON", jsonString);

// Получаем данные по ключу myKey в localStorage
myKey = localStorage.getItem("myKey");
console.log("2. myKey", myKey);

// Получаем данные по ключу myJSON в localStorage
const myJSON = localStorage.getItem("myJSON");
// Выводим сразу как объект
console.log("3. myJSON", JSON.parse(myJSON));

// Удаляем данные по ключу myJSON в localStorage
localStorage.removeItem("myJSON");

// Проверяем, какие данные остались
console.log("4. myKey", localStorage.getItem("myKey"));
console.log("5. myJSON", localStorage.getItem("myJSON"));

// Очищаем весь localStorage
localStorage.clear();

// Проверяем, что все удалено
console.log("6. myKey", localStorage.getItem("myKey"));
console.log("7. myJSON", localStorage.getItem("myJSON"));
