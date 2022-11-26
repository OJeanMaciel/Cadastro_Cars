import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Carros } from 'src/app/Carros';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit{
  carro?: Carros;

  constructor(private carsService: CarsService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.carsService.getCarro(id).subscribe(item => this.carro = item.data);
  }
}
