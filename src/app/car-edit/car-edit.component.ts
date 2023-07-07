import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  carId!: number;
  car!: Car | undefined;
  colors!: string[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.carId = Number(this.route.snapshot.paramMap.get('id'));
    this.car = this.dataService.getCarById(this.carId);
    this.colors = this.dataService.getColors();
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

  saveChanges(): void {
    if (this.car) {
      this.dataService.updateCar(this.car);
      this.router.navigate(['/']);
    }
  }
}