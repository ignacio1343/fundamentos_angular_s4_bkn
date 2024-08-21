import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { NopageComponent } from './pages/nopage/nopage.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [


{
  path:'',
  component:HomeComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'contacto',
  component:ContactoComponent
},
{
  path:'**',
  component:NopageComponent
},
{
  path:'ayuda',
  component:AyudaComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
