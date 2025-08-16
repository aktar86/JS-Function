class Car {
  constructor(name) {
    this.brand = name;
  }
  
  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car{
    constructor(name, mod, color){
        super(name);
        this.mod = mod;
        this.color = color;
    }
    show(){
        return this.present() + ' ' + 'which Model is ' + this.mod + ' in Color: ' + this.color;
    }
}

const mycar = new Model("Ford", 'Blck450', 'Black');
const result = mycar.show();
console.log(result);

