class Duck {
    quack(): void {
        console.log('quack')
    }

    swim(): void {
        console.log('swim')
    }

    fly(): void {
        console.log('fly')
    }

    display(): void {
        console.log('Duck')
    }

}

class MallardDuck extends Duck{
    display(): void {
        console.log('MallardDuck')
    }

}

class RedheadDuck extends Duck{
    display(): void {
        console.log('RedheadDuck')
    }

}

let d = new Duck();
d.display()
d.quack()
d.swim()
d.fly()

console.log('=================');

let md = new MallardDuck();
md.display()
md.quack()
md.swim()
md.fly()

console.log('=================');

let rd = new RedheadDuck();
rd.display()
rd.quack()
rd.swim()
rd.fly()
