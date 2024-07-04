import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditCardComponent } from './shared/component/credit-card/credit-card.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { BtnDropDownDirective } from './shared/directive/btn-drop-down.directive';
import { CreditcardDirective } from './shared/directive/creditcard.directive';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    NavbarComponent,
    BtnDropDownDirective,
    CreditcardDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
