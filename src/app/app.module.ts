import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthorsComponent } from './authors/authors.component';
import { ViewModelComponent } from './view-model/view-model.component';
import { CreateModelComponent } from './create-model/create-model.component';
import { EvaluateModelComponent } from './evaluate-model/evaluate-model.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AuthorsComponent },
      { path: 'viewmodel', component: ViewModelComponent },
      { path: 'createmodel', component: CreateModelComponent },
      { path: 'evaluatemodel', component: EvaluateModelComponent },
      { path: 'createmodel', component: CreateModelComponent },
      { path: 'settings', component: SettingsComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    AuthorsComponent,
    ViewModelComponent,
    CreateModelComponent,
    EvaluateModelComponent,
    SettingsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
