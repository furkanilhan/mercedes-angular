import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.cars = this.dataService.getCars();
  }

  editCar(carId: number): void {
    this.router.navigate(['/car-edit', carId]);
  }

  removeCar(car: Car): void {
    this.dataService.removeCar(car);
    this.router.navigate(['/']);
  }
}