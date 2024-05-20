function Appliance(name, power) {
    this.name = name;
    this.power = power;
    this.isOn = false;
}

Appliance.prototype.switchOn = function() {
    this.isOn = true;
    console.log(`${this.name} включен, потребляемая мощность ${this.power} Ватт`);
};

Appliance.prototype.switchOff = function() {
    this.isOn = false;
    console.log(`${this.name} выключен`);
};

function Lamp(name, power, brightness) {
    Appliance.call(this, name, power);
    this.brightness = brightness;
}

Lamp.prototype = Object.create(Appliance.prototype);
Lamp.prototype.constructor = Lamp;

Lamp.prototype.adjustBrightness = function(level) {
    this.brightness = level;
    console.log(`${this.name} яркость установлена на уровень ${this.brightness}`);
};

function Computer(name, power, ram) {
    Appliance.call(this, name, power);
    this.ram = ram;
}

Computer.prototype = Object.create(Appliance.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.upgradeRam = function(newRam) {
    this.ram = newRam;
    console.log(`${this.name} RAM увеличен до ${this.ram} GB`);
};

const lamp = new Lamp('Настольная лампа', 60, 100);
const computer = new Computer('Компьютер', 300, 8);

lamp.switchOn();
computer.switchOn();

lamp.adjustBrightness(75);
computer.upgradeRam(16);

lamp.switchOff();
// computer.switchOff();

function calculateTotalPower(appliances) {
    return appliances.reduce((total, appliance) => {
        return total + (appliance.isOn ? appliance.power : 0);
    }, 0);
}

const appliances = [lamp, computer];
const totalPower = calculateTotalPower(appliances);
console.log(`Общая потребляемая мощность: ${totalPower} Ватт`);