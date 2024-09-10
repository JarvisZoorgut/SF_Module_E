function isPrime(num) {
    if (num > 1000) {
        console.log('Неверный ввод');
    } else if (num <= 1) {
        console.log(`Число ${num} - не простое`);
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`Число ${num} - простое`);
        } else {
            console.log(`Число ${num} - не простое`);
        }
    }
}

var num = prompt('Введите число (не более 1000):')
isPrime(num)