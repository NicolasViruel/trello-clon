import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//overlay de CDK y acordeon
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkAccordionModule } from "@angular/cdk/accordion";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnComponent } from './components/btn/btn.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnComponent,
    BoardsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    AppRoutingModule,
    CdkAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
