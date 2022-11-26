import { CarsService } from './../../../services/cars.service';
import { Component, OnInit } from '@angular/core';

import { Carros } from 'src/app/Carros';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  btnText = "Salvar";

  constructor(private carService: CarsService) {}

  ngOnInit(): void {

  }

  async createHandler(carros: Carros) {

    const formData = new FormData();

    formData.append("marca_nome", carros.marca_nome);
    formData.append("nome_modelo", carros.nome_modelo);
    formData.append("ano", carros.ano);
    formData.append("combustivel", carros.combustivel);
    formData.append("num_portas", carros.num_portas);
    formData.append("valor_fipe", carros.valor_fipe);
    formData.append("cor", carros.cor);

    if (carros.image) {
      formData.append('image', carros.image);
    }

    await this.carService.createCarro(formData).subscribe();

  }

}
