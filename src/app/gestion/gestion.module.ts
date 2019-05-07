import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SectorManagementComponent } from './sector-management/sector-management.component';

import { SectorComponent } from './sector-management/sector/sector.component';
import { SectorListComponent } from './sector-management/sector-list/sector-list.component';
import { SectorCardComponent } from './sector-management/sector-card/sector-card.component';
import { SectorFormComponent } from './sector-management/sector-form/sector-form.component';


import { EspeciesManagementComponent } from './especies-management/especies-management.component';
import { AbonosManagementComponent } from './abonos-management/abonos-management.component';
import { InsecticidasManagementComponent } from './insecticidas-management/insecticidas-management.component';
import { FungicidasManagementComponent } from './fungicidas-management/fungicidas-management.component';
import { ClarityModule } from '@clr/angular';
import { SectorService } from './sector-management/services/sector/sector.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOwnCustomMaterialModule } from '../my-own-custom-material/my-own-custom-material.module';
import { EspecieListComponent } from './especies-management/especie-list/especie-list.component';
import { EspecieFormComponent } from './especies-management/especie-form/especie-form.component';
import { AbonoFormComponent } from './abonos-management/abono-form/abono-form.component';
import { AbonoListComponent } from './abonos-management/abono-list/abono-list.component';
import { AbonoComponent } from './abonos-management/abono/abono.component';
import { EspecieService } from './especies-management/services/especie/especie.service';
import { AbonoService } from './abonos-management/service/abono/abono.service';
import { FungicidaFormComponent } from './fungicidas-management/fungicida-form/fungicida-form.component';
import { FungicidaListComponent } from './fungicidas-management/fungicida-list/fungicida-list.component';
import { FungicidaService } from './fungicidas-management/services/fungicida/fungicida.service';
import { FungicidaComponent } from './fungicidas-management/fungicida/fungicida.component';
import { EspecieComponent } from './especies-management/especie/especie.component';
import { InsecticidaComponent } from './insecticidas-management/insecticida/insecticida.component';
import { InsecticidaFormComponent } from './insecticidas-management/insecticida-form/insecticida-form.component';
import { InsecticidaListComponent } from './insecticidas-management/insecticida-list/insecticida-list.component';
import { InsecticidaService } from './insecticidas-management/services/insecticida/insecticida.service';
import { LotesManagementComponent } from './lotes-management/lotes-management.component';
import { LoteListMngComponent } from './lotes-management/lote-list-mng/lote-list-mng.component';
import { LoteCardMngComponent } from './lotes-management/lote-card-mng/lote-card-mng.component';
import { LoteFormMngComponent } from './lotes-management/lote-form-mng/lote-form-mng.component';
import { LoteMngComponent } from './lotes-management/lote-mng/lote-mng.component';
import { MatList } from '@angular/material';
import { ProveedorManagementComponent } from './proveedor-management/proveedor-management.component';
import { ProveedorMngComponent } from './proveedor-management/proveedor-mng/proveedor-mng.component';
import { ProveedorListComponent } from './proveedor-management/proveedor-list/proveedor-list.component';
import { ProveedorFormComponent } from './proveedor-management/proveedor-form/proveedor-form.component';
import { AbonoAPIService } from './abonos-management/service/abono/abono-api.service';
import { ProveedorService } from './proveedor-management/services/proveedor/proveedor.service';
import { ProveedorApiService } from './proveedor-management/services/proveedor/proveedor-api.service';
import { InsecticidaApiService } from './insecticidas-management/services/insecticida/insecticida-api.service';
import { FungicidaApiService } from './fungicidas-management/services/fungicida-api.service';
import { SectorApiService } from './sector-management/services/sector/sector-api.service';
import { EspecieApiService } from './especies-management/services/especie/especie-api.service';
import { VariedadApiService } from './especies-management/services/variedad/variedad-api.service';
import { LoteApiService } from './lotes-management/services/lote-api/lote-api.service';
import { OperariosManagementComponent } from './operarios-management/operarios-management.component';
import { OperarioListComponent } from './operarios-management/operario-list/operario-list.component';
import { OperarioFormComponent } from './operarios-management/operario-form/operario-form.component';
import { OperarioComponent } from './operarios-management/operario/operario.component';
import { OperarioApiService } from './operarios-management/service/operario-api/operario-api.service';
import { GlobalService } from '../services/global-service/global.service';


const routesG: Routes = [
  { path: 'gestion/sector' ,
    component: SectorManagementComponent,
    children: [
      {
        path: '',
        component: SectorCardComponent
      },
      {
        path: 'list',
        component: SectorListComponent
      },
      {
        path: 'card',
        component: SectorCardComponent
      },
      {
        path: 'create',
        component: SectorFormComponent
      },
      {
        path: ':id_sector',
        component: SectorComponent
      },
      {
        path: ':id_sector/edit',
        component: SectorFormComponent
      }

    ]
  },
  { path: 'gestion/lote' ,
    component: LotesManagementComponent,
    children: [
      {
        path: '',
        component: LoteListMngComponent
      },
      {
        path: 'list',
        component: LoteListMngComponent
      },
      {
        path: 'card',
        component: LoteCardMngComponent
      },
      {
        path: 'create',
        component: LoteFormMngComponent
      },
      {
        path: ':id_lote',
        component: LoteMngComponent
      },
      {
        path: ':id_lote/edit',
        component: LoteFormMngComponent
      }

    ]
  },
  {
    path: 'gestion/especie' ,
    component: EspeciesManagementComponent,
    children: [
      {
        path: '',
        component: EspecieListComponent
      },
      {
        path: 'list',
        component: EspecieListComponent
      },
      {
        path: 'create',
        component: EspecieFormComponent
      },
      {
        path: ':id_especie',
        component: EspecieComponent
      },
      {
        path: ':id_especie/edit',
        component: EspecieFormComponent
      }
    ]
  },
  {
    path: 'gestion/abono' ,
    component: AbonosManagementComponent ,
    children: [
      {
        path: '',
        component: AbonoListComponent
      },
      {
        path: 'list',
        component: AbonoListComponent
      },
      {
        path: 'create',
        component: AbonoFormComponent
      },
      {
        path: ':id_abono',
        component: AbonoComponent
      },
      {
        path: ':id_abono/edit',
        component: AbonoFormComponent
      }
    ]
  },
  {
    path: 'gestion/fungicida' ,
    component: FungicidasManagementComponent ,
    children: [
      {
        path: '',
        component: FungicidaListComponent
      },
      {
        path: 'list',
        component: FungicidaListComponent
      },
      {
        path: 'create',
        component: FungicidaFormComponent
      },
      {
        path: ':id_fungicida',
        component: FungicidaComponent
      },
      {
        path: ':id_fungicida/edit',
        component: FungicidaFormComponent
      }
    ]
  },
  {
    path: 'gestion/insecticida' ,
    component: InsecticidasManagementComponent ,
    children: [
      {
        path: '',
        component: InsecticidaListComponent
      },
      {
        path: 'list',
        component: InsecticidaListComponent
      },
      {
        path: 'create',
        component: InsecticidaFormComponent
      },
      {
        path: ':id_insecticida',
        component: InsecticidaComponent
      },
      {
        path: ':id_insecticida/edit',
        component: InsecticidaFormComponent
      }
    ]
  },
  {
    path: 'gestion/proveedor' ,
    component: ProveedorManagementComponent ,
    children: [
      {
        path: '',
        component: ProveedorListComponent
      },
      {
        path: 'list',
        component: ProveedorListComponent
      },
      {
        path: 'create',
        component: ProveedorFormComponent
      },
      {
        path: ':id_proveedor',
        component: ProveedorMngComponent
      },
      {
        path: ':id_proveedor/edit',
        component: ProveedorFormComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    MyOwnCustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesG)
  ],
  declarations: [
    SectorManagementComponent,
    SectorComponent,
    SectorListComponent,
    SectorCardComponent,
    SectorFormComponent,
    EspeciesManagementComponent,
    AbonosManagementComponent,
    InsecticidasManagementComponent,
    FungicidasManagementComponent,
    EspecieComponent,
    EspecieListComponent,
    EspecieFormComponent,
    AbonoFormComponent,
    AbonoListComponent,
    AbonoComponent,
    FungicidaFormComponent,
    FungicidaListComponent,
    FungicidaComponent,
    InsecticidaComponent,
    InsecticidaFormComponent,
    InsecticidaListComponent,
    LotesManagementComponent,
    LoteMngComponent,
    LoteListMngComponent,
    LoteCardMngComponent,
    LoteFormMngComponent,
    ProveedorManagementComponent,
    ProveedorMngComponent,
    ProveedorListComponent,
    ProveedorFormComponent,
    OperariosManagementComponent,
    OperarioListComponent,
    OperarioFormComponent,
    OperarioComponent

  ],
  providers: [
    GlobalService,
    { provide: SectorService      , useClass: SectorApiService      },
    { provide: EspecieService     , useClass: EspecieApiService     },
    VariedadApiService,
    { provide: AbonoService       , useClass: AbonoAPIService       },
    { provide: ProveedorService   , useClass: ProveedorApiService   },
    { provide: InsecticidaService , useClass: InsecticidaApiService },
    { provide: FungicidaService   , useClass: FungicidaApiService   },
    LoteApiService,
    OperarioApiService

  ]
})
export class GestionModule { }
