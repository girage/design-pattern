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

class RubberDuck extends Duck{
    quack(): void {
        console.log('Squeak')
    }

    fly(): void {

    }

    display(): void {
        console.log('RubberDuck')
    }
}

class DecoyDuck extends Duck{
    quack(): void {

    }

    fly(): void {

    }

    display(): void {
        console.log('DecoyDuck')
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

console.log('=================');

let rbd = new RubberDuck();
rbd.display()
rbd.quack()
rbd.swim()
rbd.fly()

console.log('=================');

let dcd = new DecoyDuck();
dcd.display()
dcd.quack()
dcd.swim()
dcd.fly()


