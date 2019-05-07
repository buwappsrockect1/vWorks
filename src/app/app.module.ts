import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UiLayoutModule } from './ui-layout/ui-layout.module';
import { ServicesModule } from './services/services.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';


// the second parameter 'es' is optional
registerLocaleData(localeEs, 'es');


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    UiLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServicesModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

