let car = {

    company : "kia",
    model : "carrens",
    color : "black",
    price : "2500000",
    milage : 23.45,
    wheels : 4,
    startCar : function(){
        console.log(this.company+" car started");
    },
    stopCar : function(){
        console.log(this.company+" car stopped");
    },
    carDetails : function(){
        console.log("company of the car is "+this.company);
        console.log("model of the car is "+this.model);
        console.log("color of the car is "+this.color);
        console.log("price of the car is "+this.price);
        console.log("milage of the car is "+this.milage);
        console.log("wheels of the car is "+this.wheels);
    }
}


for (let k in car) {
    console.log(k+" -> "+car[k]);
}

// console.log(car["company"]);
// console.log(car.model);
// console.log(car.color);
// console.log(car.price);
// console.log(car.milage);
// console.log(car.wheels);
// console.log(car["startCar"]);
// console.log(car.stopCar);
// console.log(car.carDetails);








// car.type = "petrol"
// delete car.milage;
// car.price = 3000000;


// console.log(car);

// console.log(car.company);
// console.log(car.price);
// console.log(car.milage);
// console.log(car["company"]);
// car.startCar();
// car.stopCar();
// car.carDetails();