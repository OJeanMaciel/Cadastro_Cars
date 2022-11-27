import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carros } from 'src/app/Carros';
import { CarsService } from 'src/app/services/cars.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-carro',
  templateUrl: './edit-carro.component.html',
  styleUrls: ['./edit-carro.component.css']
})
export class EditCarroComponent implements OnInit{
  carros!: Carros;
  btnText: string = 'Editar';

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router
    ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.carsService.getCarro(id).subscribe((item) => {
      return this.carros = item.data;
    });

  }

  async editHandler(carrosData: Carros) {
    const id = this.carros.id;
    const formData = new FormData()

    formData.append('marca_nome', carrosData.marca_nome);
    formData.append('nome_modelo', carrosData.nome_modelo);
    formData.append('ano', carrosData.ano);
    formData.append('combustivel', carrosData.combustivel);
    formData.append('num_portas', carrosData.num_portas);
    formData.append('valor_fipe', carrosData.valor_fipe);
    formData.append('cor', carrosData.cor);

    if(carrosData) {
      formData.append('image', carrosData.image);
    }

    await this.carsService.updateCarros(id!, formData).subscribe();

    this.messagesService.add(`Carro ${id} foi atualizado com sucesso!`)

    this.router.navigate(['/']);

  }
}
