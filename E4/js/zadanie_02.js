// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

function viewObj(obj, str) {
    for (let key in obj) {
        if (key == str) {
            console.log(key == str);
        } else {
            console.log(key == str);
        }
    }
}

const obj = {
  word: 'Hello',
  b: 2,
  c: 3,
}

let str = 'word'

viewObj(obj, str);