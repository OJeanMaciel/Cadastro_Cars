import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Carros } from './../../Carros';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Carros>();
  @Input() btnText!: string;
  @Input() carrosData: Carros | null = null;

  carsForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.carsForm = new FormGroup({
      id: new FormControl(this.carrosData ? this.carrosData.id:''),
      marca_nome: new FormControl(this.carrosData ? this.carrosData.marca_nome: '', [Validators.required]),
      nome_modelo: new FormControl(this.carrosData ? this.carrosData.nome_modelo: '', [Validators.required]),
      ano: new FormControl(this.carrosData ? this.carrosData.ano: '', [Validators.required]),
      combustivel: new FormControl(this.carrosData ? this.carrosData.combustivel: '', [Validators.required]),
      num_portas: new FormControl(this.carrosData ? this.carrosData.num_portas: '', [Validators.required]),
      valor_fipe: new FormControl(this.carrosData ? this.carrosData.valor_fipe: '', [Validators.required]),
      cor: new FormControl(this.carrosData ? this.carrosData.cor: '', [Validators.required]),
      image: new FormControl(''),
    });
  }

  get marca_nome() {
    return this.carsForm.get('marca_nome')!;
  }

  get nome_modelo() {
    return this.carsForm.get('nome_modelo')!;
  }


  get ano() {
    return this.carsForm.get('ano')!;
  }


  get combustivel() {
    return this.carsForm.get('combustivel')!;
  }


  get num_portas() {
    return this.carsForm.get('num_portas')!;
  }


  get valor_fipe() {
    return this.carsForm.get('valor_fipe')!;
  }


  get cor() {
    return this.carsForm.get('cor')!;
  }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    this.carsForm.patchValue({ image: file });
  }

  submit() {
    if(this.carsForm.invalid) {
      return;
    }

    console.log(this.carsForm.value);

    this.onSubmit.emit(this.carsForm.value);
  }

}
