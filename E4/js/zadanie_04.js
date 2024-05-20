function Consumer(state, current, voltage) {
    this.plugIn = function (state) {
        console.log(`The cunsumer ${this} is ${state} `)
    }
    this.getPower = function () {
        console.log(`Power of ${this} is ${current * voltage}`)
    }
}

const computer = new Consumer(3, 220);
const mixer = new Consumer(1.5, 220);

computer.getPower()
mixer.getPower()

computer.plugIn(yes)