import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnCustomMaterialModule } from '../my-own-custom-material/my-own-custom-material.module';
import { TrazabilidadSectorManagementComponent } from './trazabilidad-sector-management/trazabilidad-sector-management.component';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { SectorAllComponent } from './trazabilidad-sector-management/sector-all/sector-all.component';
import { SectorSelectedComponent } from './trazabilidad-sector-management/sector-selected/sector-selected.component';
import { SectorSelectLotesComponent } from './trazabilidad-sector-management/sector-select-lotes/sector-select-lotes.component';
import { SectorSelectLoteDetailComponent } from './trazabilidad-sector-management/sector-select-lote-detail/sector-select-lote-detail.component';
import { SectorSelectEspeciesComponent } from './trazabilidad-sector-management/sector-select-especies/sector-select-especies.component';
import { SectorSelectEspecieDetailComponent } from './trazabilidad-sector-management/sector-select-especie-detail/sector-select-especie-detail.component';
import { LoteComponent } from './trazabilidad-sector-management/lote/lote.component';
import { LoteFormComponent } from './trazabilidad-sector-management/lote-form/lote-form.component';
import { LoteListComponent } from './trazabilidad-sector-management/lote-list/lote-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TrazaTratRiegoMngComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-riego-mng/traza-trat-riego-mng.component';
import { TrazaTratAbonoMngComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-abono-mng/traza-trat-abono-mng.component';
import { TrazaTratFungicidaMngComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-fungicida-mng/traza-trat-fungicida-mng.component';
import { TrazaTratInsecticidaMngComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-insecticida-mng/traza-trat-insecticida-mng.component';
import { TrazaImagenMngComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-imagen-mng/traza-imagen-mng.component';
import { TrazaNotasMngComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-notas-mng/traza-notas-mng.component';
import { TrazaNotasPrivMngComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-notas-priv-mng/traza-notas-priv-mng.component';
import { TrazaTratRiegoListComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-riego-mng/traza-trat-riego-list/traza-trat-riego-list.component';
import { TrazaTratRiegoFormComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-riego-mng/traza-trat-riego-form/traza-trat-riego-form.component';
import { TrazaTratRiegoComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-riego-mng/traza-trat-riego/traza-trat-riego.component';
import { TrazaTratAbonoListComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-abono-mng/traza-trat-abono-list/traza-trat-abono-list.component';
import { TrazaTratAbonoFormComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-abono-mng/traza-trat-abono-form/traza-trat-abono-form.component';
import { TrazaTratAbonoComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-abono-mng/traza-trat-abono/traza-trat-abono.component';
import { TrazaTratFungicidaListComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-fungicida-mng/traza-trat-fungicida-list/traza-trat-fungicida-list.component';
import { TrazaTratFungicidaFormComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-fungicida-mng/traza-trat-fungicida-form/traza-trat-fungicida-form.component';
import { TrazaTratFungicidaComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-fungicida-mng/traza-trat-fungicida/traza-trat-fungicida.component';
import { TrazaTratInsecticidaListComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-insecticida-mng/traza-trat-insecticida-list/traza-trat-insecticida-list.component';
import { TrazaTratInsecticidaFormComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-insecticida-mng/traza-trat-insecticida-form/traza-trat-insecticida-form.component';
import { TrazaTratInsecticidaComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-insecticida-mng/traza-trat-insecticida/traza-trat-insecticida.component';
import { LoteInfoMngComponent } from './trazabilidad-sector-management/sector-select-lote-detail/lote-info-mng/lote-info-mng.component';
import { LoteInfoComponent } from './trazabilidad-sector-management/sector-select-lote-detail/lote-info-mng/lote-info/lote-info.component';
import { TrazaNotasListComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-notas-mng/traza-notas-list/traza-notas-list.component';

import { TrazaNotasComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-notas-mng/traza-notas/traza-notas.component';
import { TrazaNotasPrivComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-notas-priv-mng/traza-notas-priv/traza-notas-priv.component';
import { TrazaNotasPrivFormComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-notas-priv-mng/traza-notas-priv-form/traza-notas-priv-form.component';
import { TrazaNotasPrivListComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-notas-priv-mng/traza-notas-priv-list/traza-notas-priv-list.component';
import { TrazaImagenListComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-imagen-mng/traza-imagen-list/traza-imagen-list.component';
import { TrazaImagenComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-imagen-mng/traza-imagen/traza-imagen.component';
import { TrazaImagenFormComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-imagen-mng/traza-imagen-form/traza-imagen-form.component';
import { RiegoApiService } from './trazabilidad-sector-management/sector-select-lote-detail/traza-tratamiento/traza-trat-riego-mng/service/riego-api/riego-api.service';
import { TrazaNotasFormComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-notas-mng/traza-notas-form/traza-notas-form.component';
import { ImageUploadComponent } from './trazabilidad-sector-management/sector-select-lote-detail/traza-imagen-mng/image-upload/image-upload.component';
import { ImagenLoteApiService } from './trazabilidad-sector-management/sector-select-lote-detail/traza-imagen-mng/service/imagen-lote-api/imagen-lote-api.service';


const routesT: Routes = [
  { path: 'trazabilidad' ,
    component: TrazabilidadSectorManagementComponent,
    children: [
      {
        path: '',
        component: SectorAllComponent
      },
      {
        path: 'sector/:id_sector',
        component: SectorSelectedComponent
      },
      {
        path: 'sector/:id_sector/lotes',
        component: SectorSelectLotesComponent
      },
      {
        path: 'sector/:id_sector/lotes/:id_lote',
        component: SectorSelectLoteDetailComponent,
        children: [
            {
              path: 'lote-info',
              component: LoteInfoMngComponent,
              children: [
                  {
                    path: '',
                    component: LoteInfoComponent
                  },
                  {
                    path: ':id_lote',
                    component: LoteInfoComponent
                  }
              ]
            },
            {
              path: 'riego',
              component: TrazaTratRiegoMngComponent,
              children: [
                  {
                    path: '',
                    component: TrazaTratRiegoListComponent
                  },
                  {
                    path: 'list',
                    component: TrazaTratRiegoListComponent
                  },
                  {
                    path: 'create',
                    component: TrazaTratRiegoFormComponent
                  },
                  {
                    path: ':id_riego/edit',
                    component: TrazaTratRiegoFormComponent
                  },
                  {
                    path: ':id_riego',
                    component: TrazaTratRiegoComponent
                  }


              ]
            },
            {
              path: 'abono',
              component: TrazaTratAbonoMngComponent,
              children: [
                  {
                    path: '',
                    component: TrazaTratAbonoListComponent
                  },
                  {
                    path: 'list',
                    component: TrazaTratAbonoListComponent
                  },
                  {
                    path: 'create',
                    component: TrazaTratAbonoFormComponent
                  },
                  {
                    path: ':id_abono/edit',
                    component: TrazaTratAbonoFormComponent
                  },
                  {
                    path: ':id_abono',
                    component: TrazaTratAbonoComponent
                  }


              ]
            },
            {
              path: 'fungicida',
              component: TrazaTratFungicidaMngComponent,
              children: [
                  {
                    path: '',
                    component: TrazaTratFungicidaListComponent
                  },
                  {
                    path: 'list',
                    component: TrazaTratFungicidaListComponent
                  },
                  {
                    path: 'create',
                    component: TrazaTratFungicidaFormComponent
                  },
                  {
                    path: ':id_fungicida/edit',
                    component: TrazaTratFungicidaFormComponent
                  },
                  {
                    path: ':id_fungicida',
                    component: TrazaTratFungicidaFormComponent
                  }

              ]
            },
            {
              path: 'insecticida',
              component: TrazaTratInsecticidaMngComponent,
              children: [
                  {
                    path: '',
                    component: TrazaTratInsecticidaListComponent
                  },
                  {
                    path: 'list',
                    component: TrazaTratInsecticidaListComponent
                  },
                  {
                    path: 'create',
                    component: TrazaTratInsecticidaFormComponent
                  },
                  {
                    path: ':id_insecticida/edit',
                    component: TrazaTratInsecticidaFormComponent
                  },
                  {
                    path: ':id_insecticida',
                    component: TrazaTratInsecticidaComponent
                  }

              ]
            },
            {
              path: 'imagenes',
              component: TrazaImagenMngComponent,
              children: [
                  {
                    path: '',
                    component: TrazaImagenListComponent
                  },
                  {
                    path: 'list',
                    component: TrazaImagenListComponent
                  },
                  {
                    path: 'create',
                    component: TrazaImagenFormComponent
                  },
                  {
                    path: ':id_imagen/edit',
                    component: TrazaImagenFormComponent
                  },
                  {
                    path: ':id_imagen',
                    component: TrazaImagenComponent
                  }


              ]
            },
            {
              path: 'notas',
              component: TrazaNotasMngComponent,
              children: [
                  {
                    path: '',
                    component: TrazaNotasListComponent
                  },
                  {
                    path: 'list',
                    component: TrazaNotasListComponent
                  },
                  {
                    path: 'create',
                    component: TrazaNotasFormComponent
                  },
                  {
                    path: ':id_nota/edit',
                    component: TrazaNotasFormComponent
                  },
                  {
                    path: ':id_nota',
                    component: TrazaNotasComponent
                  }
              ]
            },
            {
              path: 'notas-priv',
              component: TrazaNotasPrivMngComponent,
              children: [
                  {
                    path: '',
                    component: TrazaNotasPrivListComponent
                  },
                  {
                    path: 'list',
                    component: TrazaNotasPrivListComponent
                  },
                  {
                    path: 'create',
                    component: TrazaNotasPrivFormComponent
                  },
                  {
                    path: ':id_nota_priv/edit',
                    component: TrazaNotasPrivFormComponent
                  },
                  {
                    path: ':id_nota_priv',
                    component: TrazaNotasPrivComponent
                  }

              ]
            }


        ]
      },
      {
        path: 'sector/:id_sector/especies',
        component: SectorSelectEspeciesComponent
      },
      {
        path: 'sector/:id_sector/especie/:id_especie',
        component: SectorSelectEspecieDetailComponent
      }


    ]
  }
];




@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    MyOwnCustomMaterialModule,
    RouterModule.forChild(routesT)
  ],
  declarations: [
    TrazabilidadSectorManagementComponent,
    SectorAllComponent,
    SectorSelectedComponent,
    SectorSelectLotesComponent,
    SectorSelectLoteDetailComponent,
    SectorSelectEspeciesComponent,
    SectorSelectEspecieDetailComponent,
    LoteComponent,
    LoteFormComponent,
    LoteListComponent,
    TrazaTratRiegoMngComponent,
    TrazaTratAbonoMngComponent,
    TrazaTratFungicidaMngComponent,
    TrazaTratInsecticidaMngComponent,
    TrazaImagenMngComponent,
    TrazaTratRiegoListComponent,
    TrazaTratRiegoFormComponent,
    TrazaTratRiegoComponent,
    TrazaTratAbonoListComponent,
    TrazaTratAbonoFormComponent,
    TrazaTratAbonoComponent,
    TrazaTratFungicidaListComponent,
    TrazaTratFungicidaFormComponent,
    TrazaTratFungicidaComponent,
    TrazaTratInsecticidaListComponent,
    TrazaTratInsecticidaFormComponent,
    TrazaTratInsecticidaComponent,
    LoteInfoMngComponent,
    LoteInfoComponent,
    TrazaImagenMngComponent,
    TrazaImagenListComponent,
    TrazaImagenComponent,
    TrazaImagenFormComponent,
    TrazaNotasMngComponent,
    TrazaNotasComponent,
    TrazaNotasListComponent,
    TrazaNotasFormComponent,
    TrazaNotasPrivMngComponent,
    TrazaNotasPrivComponent,
    TrazaNotasPrivFormComponent,
    TrazaNotasPrivListComponent,
    ImageUploadComponent
  ],
  providers: [
     RiegoApiService,
     ImagenLoteApiService
  ]
})
export class TrazabilidadModule { }
