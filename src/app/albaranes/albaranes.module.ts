import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnCustomMaterialModule } from '../my-own-custom-material/my-own-custom-material.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlbaranEntradaMngComponent } from './albaran-mng/albaran-entrada-mng/albaran-entrada-mng.component';
import { AlbaranEntradaComponent } from './albaran-mng/albaran-entrada-mng/albaran-entrada/albaran-entrada.component';
import { AlbaranEntradaListComponent } from './albaran-mng/albaran-entrada-mng/albaran-entrada-list/albaran-entrada-list.component';
import { AlbaranEntradaFormComponent } from './albaran-mng/albaran-entrada-mng/albaran-entrada-form/albaran-entrada-form.component';
import { AlbaranSalidaMngComponent } from './albaran-mng/albaran-salida-mng/albaran-salida-mng.component';
import { AlbaranSalidaComponent } from './albaran-mng/albaran-salida-mng/albaran-salida/albaran-salida.component';
import { AlbaranSalidaListComponent } from './albaran-mng/albaran-salida-mng/albaran-salida-list/albaran-salida-list.component';
import { AlbaranSalidaFormComponent } from './albaran-mng/albaran-salida-mng/albaran-salida-form/albaran-salida-form.component';
import { AlbaranMngComponent } from './albaran-mng/albaran-mng.component';



// routes for Albaranes
const routesA: Routes = [
  { path: 'albaranes' ,
    component: AlbaranMngComponent,
    children: [
      {
        path: 'entrada',
        component: AlbaranEntradaMngComponent,
        children: [

            {
              path: '',
              component: AlbaranEntradaListComponent
            },
            {
              path: 'list',
              component: AlbaranEntradaListComponent
            },
            {
              path: ':id_albaran_entrada',
              component: AlbaranEntradaComponent
            },
            {
              path: 'create',
              component: AlbaranEntradaFormComponent
            }
        ]
      },
      {
        path: 'salida',
        component: AlbaranSalidaMngComponent,
        children: [

            {
              path: '',
              component: AlbaranSalidaListComponent
            },
            {
              path: 'list',
              component: AlbaranSalidaListComponent
            },
            {
              path: ':id_albaran_salida',
              component: AlbaranSalidaComponent
            },
            {
              path: 'create',
              component: AlbaranSalidaFormComponent
            }
        ]
      }

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    MyOwnCustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesA)
  ],
  declarations: [
    AlbaranMngComponent,
    AlbaranEntradaMngComponent,
    AlbaranEntradaComponent,
    AlbaranEntradaListComponent,
    AlbaranEntradaFormComponent,
    AlbaranSalidaMngComponent,
    AlbaranSalidaComponent,
    AlbaranSalidaListComponent,
    AlbaranSalidaFormComponent
  ]
})
export class AlbaranesModule { }
