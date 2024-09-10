/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод студентов
const studentsNodes = xmlDOM.querySelectorAll("student");

// Создание результирующего массива
const students = [];

// Перебор всех студентов и извлечение данных
studentsNodes.forEach((studentNode) => {
  const nameNode = studentNode.querySelector("name");
  const firstNameNode = nameNode.querySelector("first");
  const secondNameNode = nameNode.querySelector("second");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");

  // Получение данных из атрибутов
  const langAttr = nameNode.getAttribute("lang");

  // Запись данных в результирующий объект
  const student = {
    name: `${firstNameNode.textContent} ${secondNameNode.textContent}`,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
  };

  // Добавление объекта студента в массив
  students.push(student);
});

console.log("students", students);
