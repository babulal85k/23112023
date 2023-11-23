function vehicle(brand, model, speed, feultype)
{
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.feultype = feultype;
}

vehicle.prototype.accelerate = function()
{
    this.speed += 10;
    console.log(`${brand} ${model} is accelerating. Current speed: ${speed} km/h`);
}

vehicle.accelerate("suv", "thar", 20, "petrol");

vehicle.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${brand} ${model} is braking. current speed: ${speed} km/h`)
}
