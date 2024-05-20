// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.



function Consumer(name, current, voltage) {
    this.name = name;
    this.current = current;
    this.voltage = voltage;

    this.switchOn = function () {
        console.log(`${this.name} включен, потребляемая мощность ${this.current * this.voltage} Ватт`);
    };

    this.switchOff = function () {
        console.log(`${this.name} выключен, потребляемая мощность 0 Ватт`);
    };
}

const computer = new Consumer('Компьютер', 4, 220);
const mixer = new Consumer('Миксер', 1.5, 220);

computer.switchOn();
mixer.switchOn();

computer.switchOff();
mixer.switchOff();