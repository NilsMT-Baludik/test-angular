export class Countdown {
    name: string
    value: number
    initialValue: number
    startingDate?: Date

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
        return new Promise<void>(resolve => {

            //registering date
            this.registerStartDate()

            //declaring an interval
            const interval = setInterval(() => {
                if (this.value > 1) { // decrementation interval

                    console.log(`${this.name}: ${this.value}`);

                    this.value--;
                } else { // stopping interval (reached 1 on the previous interval, so this one will be 0)
                    this.value = 0

                    console.log(`${this.name} finished`);


                    clearInterval(interval); //clearing the interval
                    resolve() //resolving promise (like a "countdown is done so carry on")
                }
            }, 1000);
        });
    }

    registerStartDate() {
        this.startingDate = new Date()
    }
}