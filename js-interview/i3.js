// 实现Calculator(10).add(4).reduce(3).time(2).divide(2).print();  //  11

class Operator {
    constructor(value) {
        this.value = value;
    }
    add(value) {
        this.value += value;
        return this;
    }
    reduce(value) {
        this.value -= value;
        return this;
    }
    time(value) {
        this.value *= value;
        return this;
    }
    divide(value) {
        if (value !== 0) {
            this.value /= value;
        }
        return this;
    }
    print() {
        console.log(this.value);
    }
}
function Calculator(value) {
    return new Operator(value);
}
Calculator(10).add(4).reduce(3).time(2).divide(2).print();  //  11
