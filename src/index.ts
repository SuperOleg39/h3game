import module from './module';

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
console.log(square.penWidth)

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};

interface C {
    readonly a: string,
    b?: number,
    [propName: string]: any
}

interface CFunc {
    (source: string, subString: string): boolean;
}

interface StringArr {
    [index: number]: any;
}

let myArr: StringArr;
myArr = ['Foo', 'Bar'];
let myStr: string = myArr[0];

let myFunc: CFunc;
myFunc = (src, sub) => {
    console.log(src, sub);
    return true;
};

myFunc('awd', 'a');

function keepWholeObject(wholeObject: C): C {
    let {a, b = 1001} = wholeObject;
    console.log(a, b)
    return {a, b};
}

let obj = keepWholeObject(o);

abstract class Animal {
    static origin = {a: 1};
    constructor(protected name: string) {
        console.log(Animal.origin)
    }

    move(distanceInMeters: number = 0): void {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }

    abstract moveWtf(): void
}

class Snake extends Animal {
    constructor(name: string, private _legs: number = 0) {
        super(name);
    }

    get legs(): number {
        return this._legs;
    }
    
    move(distanceInMeters: number = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }

    moveWtf() {
        console.log('wtf')
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    
    move(distanceInMeters: number = 45) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }

    moveWtf() {
        console.log('wtf')
    }
}

let snake = new Snake('the Python');
let horse: Animal = new Horse('the Palomino');

snake.move();
horse.move(34);

console.log(snake.legs);

console.log(new module('Oleg', 'N.', 'Drapeza'));