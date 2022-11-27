import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Carros } from 'src/app/Carros';
import { environment } from 'src/app/environments/environment';
import { MessagesService } from 'src/app/services/messages.service';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit{
  carro?: Carros;
  baseApiUrl = environment.baseApiUrl;

  faTimes = faTimes;
  faEdit = faEdit;

  constructor(private carsService: CarsService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router
    ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.carsService.getCarro(id).subscribe(item => this.carro = item.data);
  }

  async removeHandler(id: number) {
    await this.carsService.removeCarro(id).subscribe();

    this.messagesService.add("Carro excluido com sucesso!");

    this.router.navigate(['/']);
  }
}
