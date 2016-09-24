import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { InformacionSectionComponent } from './informacion-section/informacion-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    MenuSectionComponent,
    InformacionSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
