import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { GestionModule } from '../gestion/gestion.module';
import { AlbaranesModule } from '../albaranes/albaranes.module';
import { TrazabilidadModule } from '../trazabilidad/trazabilidad.module';
import { MyOwnCustomMaterialModule } from '../my-own-custom-material/my-own-custom-material.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routesUI: Routes = [

  { path: 'trazabilidad' ,
    redirectTo: '/trazabilidad', pathMatch: 'full'
  },
  {
    path: 'albaranes',
    redirectTo: '/albaranes', pathMatch: 'full'
  },
  {
    path: 'gestion',
    redirectTo: '/gestion/sector/card' , pathMatch: 'full'
  },

  { path: '',
    redirectTo: '/gestion/sector/card', pathMatch: 'full'
  },
/*
  {
    path: '',
    component: LoginComponent
  },
*/
  { path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    GestionModule,
    AlbaranesModule,
    TrazabilidadModule,
    MyOwnCustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routesUI)
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class UiLayoutModule { }
