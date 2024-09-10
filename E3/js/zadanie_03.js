function firstFunc(x, y) {
    return function (y) {
        sumFunc(y);
    }
}

function sumFunc(y) {
    console.log('Сумма =', x + y);
}

let x = 2;
let y = 3;

const resultFunc = firstFunc(sumFunc(x, y));
