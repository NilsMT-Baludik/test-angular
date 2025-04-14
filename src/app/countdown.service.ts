export class Countdown {
    name: string
    value: number
    initialValue: number

    constructor(name: string, initialValue: number) {
        this.name = name
        this.initialValue = initialValue;
        this.value = initialValue
    }

    reset() {
        this.value = this.initialValue;
        console.log(`${this.name} reset to ${this.value}`);
    }

    start() {
        //declaring an interval
        const interval = setInterval(() => {
            if (this.value > 0) {
                console.log(`${this.name}: ${this.value}`);
                this.value--;
            } else {
                console.log(`${this.name} finished`);
                clearInterval(interval); //clearing the interval
            }
        }, 1000);
    }
}