// Переписать консольное приложение из предыдущего юнита на классы.

class Appliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isOn = false;
    }
    switchOn() {
        this.isOn = true;
        console.log(`${this.name} включен, потребляемая мощность ${this.power} Ватт`);
    }
    switchOff() {
        this.isOn = false;
        console.log(`${this.name} выключен`);
    }
    static calculateTotalPower(appliances) {
        return appliances.reduce((total, appliance) => {
            return total + (appliance.isOn ? appliance.power : 0);
        }, 0);
    }
}

class Lamp extends Appliance {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }
    adjustBrightness(level) {
        this.brightness = level;
        console.log(`${this.name} яркость установлена на уровень ${this.brightness}`);
    };
}

class Computer extends Appliance{
    constructor(name, power, ram) {
        super(name, power);
        this.ram = ram;
    }
    upgradeRam(newRam) {
        this.ram = newRam;
        console.log(`${this.name} RAM увеличен до ${this.ram} GB`);
    };
}


const lamp = new Lamp('Настольная лампа', 60, 100);
const computer = new Computer('Компьютер', 300, 8);

lamp.switchOn();
computer.switchOn();

lamp.adjustBrightness(75);
computer.upgradeRam(16);

lamp.switchOff();

const appliances = [lamp, computer];
const totalPower = Appliance.calculateTotalPower(appliances);
console.log(`Общая потребляемая мощность: ${totalPower} Ватт`);