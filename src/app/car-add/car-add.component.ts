import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent {
  id: number | undefined;
  carId: string | undefined = this.dataService.generateCarID();
  inStock: boolean = false;
  horsepower: number | undefined;
  price: string | undefined;
  color: string | undefined;
  colors: string[] = [];

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.colors = this.dataService.getColors();
  }

  onSubmit(): void {
    const newCar = {
      carId: this.carId,
      inStock: this.inStock,
      horsepower: this.horsepower,
      price: this.price,
      color: this.color
    };

    this.dataService.addCar(newCar);
    this.router.navigate(['/']);
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
