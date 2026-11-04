class Car{

    company;
    model;
    color;
    price;
    milage;
    wheels;
    engine;
    

    initializeClassVariables(company,model,color,price,milage,wheels,engine){
        this.company = company;
        this.model = model;
        this.color = color;
        this.price = price;
        this.milage = milage;
        this.wheels = wheels;
        this.engine = engine;
    }

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

const kc = new Car();
kc.initializeClassVariables("Kia","Carrens","Black","2500000",23.45,4,"2.0L Turbo");
kc.startCar();
kc.stopCar();
kc.carDetails();
kc.accelerateCar();

const mc = new Car();
mc.initializeClassVariables("Maruti","Swift","White","800000",25.45,4,"1.2L");
mc.startCar();
mc.stopCar();
mc.carDetails();
mc.accelerateCar();
