import { EditCarroComponent } from './components/pages/edit-carro/edit-carro.component';
import { CarroComponent } from './components/pages/carro/carro.component';
import { FormularioComponent } from './components/pages/formulario/formulario.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'carros/edit/:id', component: EditCarroComponent},
  { path: 'carros/:id', component: CarroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
