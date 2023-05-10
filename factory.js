class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  class AnimalFactory {
    createAnimal(type, name) {
      switch (type) {
        case 'cat':
          return new Cat(name);
        case 'dog':
          return new Dog(name);
        default:
          throw new Error(`ca existe pas: ${type}`);
      }
    }
  }
  class Cat extends Animal {
    meow() {
      console.log(`${this.name} fait meow`)
    }
  }
  class Dog extends Animal {
    woaff() {
      console.log(`${this.name} fait woaff`)
    }
  }
  const factory = new AnimalFactory();
  
  const cat = factory.createAnimal('cat', 'Chat')
  const dog = factory.createAnimal('dog', 'Chien')
  cat.meow()
  dog.woaff()
  