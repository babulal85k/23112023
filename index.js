let fourWheelerBase = {
    fuel: 'Petrol',
    wheels: 4,
    start() {
      console.log('Engine started.');
    },
    stop() {
      console.log('Engine stopped.');
    },
  };
  
  
  let sedanCar = Object.create(fourWheelerBase);

  sedanCar.model = 'Sedan';
  sedanCar.numDoors = 4;
  
  
  
  
  function FourWheeler() {
    this.fuel = 'Petrol';
    this.wheels = 4;
  }
  

  FourWheeler.prototype.start = function () {
    console.log('Engine started.');
  };
  
  FourWheeler.prototype.stop = function () {
    console.log('Engine stopped.');
  };
  
  
  let suv = new FourWheeler();
  suv.model = 'SUV';
  suv.numDoors = 5;
  
 
  console.log('Sedan Car:', sedanCar);
  sedanCar.start();
  
 
  console.log('SUV:', suv);
  suv.start();
  