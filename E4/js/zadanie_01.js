// Написать, функцию, которая принимает в качестве аргумента объект
// и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

function viewObj(obj) {
    console.log('Все свойства объекта:')
    for (let key in obj) {
        console.log(`Ключ: ${key}, значение: ${obj[key]}`);
    }
    console.log('---------------------------')
    console.log('Собственные свойства объекта:')
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
        console.log(`Ключ: ${key}, значение: ${obj[key]}`);
        }
    }
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
}

const newObj = Object.create(obj);

newObj.f = 100;
newObj.g = 1000;

viewObj(newObj)
