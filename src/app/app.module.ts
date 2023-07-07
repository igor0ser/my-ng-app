import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserFililalsComponent } from './user-fililals/user-fililals.component';
import { FilialsModalComponent } from './filials-modal/filials-modal.component';
import { FilialComponent } from './filial/filial.component';
import { FilialButtonComponent } from './filial-button/filial-button.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFililalsComponent,
    FilialsModalComponent,
    FilialComponent,
    FilialButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
