import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { Carros } from 'src/app/Carros';
import { environment } from 'src/app/environments/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  allCarros: Carros[] = [];
  carros: Carros[] = [];
  baseApiUrl = environment.baseApiUrl;

  faSearch = faSearch
  searchTerm: string = '';

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.carsService.getCarros().subscribe((items) => {
      const data = items.data

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
      });

      this.allCarros = data;
      this.carros = data;
    });
  }

  search(event: Event): void {

    const target = event.target as HTMLInputElement
    const value = target.value
    this.carros = this.allCarros.filter((carros) => {
      return carros.nome_modelo.toLowerCase().includes(value);
    });
  }
}
