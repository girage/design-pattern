interface FlyBehavior {
  fly(): void;
}

class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("fly");
  }
}

class FlyNoWay implements FlyBehavior {
  fly(): void {}
}

interface QuackBehavior {
  quack(): void;
}

class Quack implements QuackBehavior {
  quack(): void {
    console.log("quack");
  }
}

class Squeak implements QuackBehavior {
  quack(): void {
    console.log("squeak");
  }
}

class MuteQuack implements QuackBehavior {
  quack(): void {}
}

class Duck {
  // public flyBehavior: FlyBehavior;
  // public quackBehavior: QuackBehavior;

  constructor(
    public flyBehavior: FlyBehavior,
    public quackBehavior: QuackBehavior
  ) {
    // this.flyBehavior = flyBehavior;
    // this.quackBehavior = quackBehavior;
  }

  performQuack(): void {
    this.quackBehavior.quack();
  }

  performFly(): void {
    this.flyBehavior.fly();
  }

  swim(): void {
    console.log("swim");
  }

  display(): void {
    console.log("Duck");
  }
}

class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display(): void {
    console.log("MallardDuck");
  }
}

class RedheadDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display(): void {
    console.log("RedheadDuck");
  }
}

class RubberDuck extends Duck  {
  constructor() {
    super(new FlyNoWay(), new Squeak());
  }

  display(): void {
    console.log("RubberDuck");
  }
}

class DecoyDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new MuteQuack());
  }

  display(): void {
    console.log("DecoyDuck");
  }
}

// let d = new Duck();
// d.display();
// d.quack();
// d.swim();
// d.fly();

console.log("=================");

let md = new MallardDuck();
md.display();
md.performQuack();
md.swim();
md.performFly();

console.log("=================");

let rd = new RedheadDuck();
rd.display();
rd.performQuack();
rd.swim();
rd.performFly();

console.log("=================");

let rbd = new RubberDuck();
rbd.display();
rbd.performQuack();
rbd.swim();
rbd.performFly();

console.log("=================");

let dcd = new DecoyDuck();
dcd.display();
dcd.performQuack();
dcd.swim();
dcd.performFly();
