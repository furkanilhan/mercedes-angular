import { Injectable } from '@angular/core';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cars: Car[] = [
    { id: 1, carId: 'HJKFSHJK42525fsdfs', inStock: true, horsepower: 250, price: 50000, color: 'Red' },
    { id: 2, carId: 'HFJKAHAK6872431', inStock: false, horsepower: 140, price: 30000, color: 'Blue' }
  ];

  private colors: string[] = ["Red", "Black", "Blue", "Gray", "Yellow", "Green", "Purple", "White"]

  getCars(): Car[] {
    return this.cars;
  }

  getColors(): string[] {
    return this.colors;
  }

  getCarById(id: number): Car | undefined {
    return this.cars.find(car => car.id === id);
  }

  updateCar(car: Car): void {
    console.log("car", car)
    const index = this.cars.findIndex(c => c.id === car.id);
    if (index !== -1) {
      this.cars[index] = car;
    }
  }

  removeCar(car: Car): void {
    const index: number = this.cars.findIndex(c => c.id === car.id);
    if (index !== -1) {
        this.cars.splice(index, 1);
    }
  }

  addCar(newCar: any): void {
    const id = this.cars.length + 1;
    const car = { id, ...newCar };
    this.cars.push(car);
  }

  generateCarID() {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const lengthOfCode = 15;
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  }
  
}
