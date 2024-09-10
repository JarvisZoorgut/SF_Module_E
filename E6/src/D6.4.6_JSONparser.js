/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
// console.log('data', data);
const studentsList = data.list;
// console.log('studentsList', studentsList);

/* Этап 3. Запись данных в результирующий массив */
const result = studentsList.map((student) => ({
  name: student.name,
  age: Number(student.age),
  prof: student.prof,
}));

console.log("result", result);
