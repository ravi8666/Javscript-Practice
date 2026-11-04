class Car{

    company = "Kia";
    model = "Carrens";
    color = "Black";
    price = 2500000;
    milage = 23.45;
    wheels = 4;
    engine = "2.0L Turbo";

    startCar(){
        console.log(this.company+" car has started");
    }

    stopCar(){
        console.log(this.company+" car has stopped");
    }

    accelerateCar(){
        console.log(this.company+" car is accelerating");
    }
    

    carDetails(){
        console.log("company of the car is " + this.company);
        console.log("model of the car is " + this.model);
        console.log("color of the car is " + this.color);
        console.log("price of the car is " + this.price);
        console.log("milage of the car is " + this.milage);
        console.log("wheels of the car is " + this.wheels);
        console.log("engine of the car is " + this.engine);
    }


}

const car1 = new Car();

console.log(car1);

console.log(car1.wheels);

car1.startCar();
car1.stopCar();
car1.carDetails();
car1.accelerateCar();

const car2 = new Car();

console.log(car2);
console.log(car2.wheels);

car2.startCar();
car2.stopCar();
car2.carDetails();
car2.accelerateCar();