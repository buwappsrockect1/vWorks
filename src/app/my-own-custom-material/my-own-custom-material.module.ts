import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule, MatAccordion} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule
  ]
})
export class MyOwnCustomMaterialModule { }
