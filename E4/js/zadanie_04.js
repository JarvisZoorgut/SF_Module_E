function Consumer(current, voltage) {
    this.plugIn = function () {
        console.log(`The cunsumer ${this} is `)
    }
    this.getPower = function () {
        console.log(`Power of ${this} is ${current * voltage}`)
    }
}

const computer = new Consumer(3, 220);
const mixer = new Consumer(1.5, 220);

computer.getPower()
mixer.getPower()