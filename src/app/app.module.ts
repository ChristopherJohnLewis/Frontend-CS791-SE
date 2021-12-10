import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AuthorsComponent } from './authors/authors.component';
import { ViewModelComponent } from './view-model/view-model.component';
import { CreateModelComponent } from './create-model/create-model.component';
import { EvaluateModelComponent } from './evaluate-model/evaluate-model.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AuthorsComponent },
      { path: 'viewmodel', component: ViewModelComponent },
      { path: 'createmodel', component: CreateModelComponent },
      { path: 'evaluatemodel', component: EvaluateModelComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '**', component: AuthorsComponent}
    ]),
    FormsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    AuthorsComponent,
    ViewModelComponent,
    CreateModelComponent,
    EvaluateModelComponent,
    SettingsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
