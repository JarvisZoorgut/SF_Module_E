// Написать функцию, которая создает пустой объект, но без прототипа.

function createObjectWithoutPrototype() {
    return Object.create(null);
}

const obj = createObjectWithoutPrototype();
console.log(obj); // Выводит: {}
console.log(Object.getPrototypeOf(obj)); // Выводит: null