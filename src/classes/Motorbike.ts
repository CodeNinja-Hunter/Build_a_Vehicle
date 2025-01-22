// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';


// The Motorbike class extends the Vehicle class
class Motorbike extends Vehicle {
  // Declare properties of the Motorbike class
  vin: string = '';
  color: string = '';
  make: string = '';
  model: string = '';
  year: number = 0;
  weight: number = 0;
  topSpeed: number = 0;
  wheels: Wheel[] = [];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Call the parent class constructor
    super();

    // Initialize properties
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // Ensure wheels array has exactly 2 elements
    if (!Array.isArray(wheels) || wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`Wheels: ${this.wheels.length} wheels`);
    console.log(`Color: ${this.color}`);
    console.log(`Top Speed: ${this.topSpeed} km/h`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
