import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//overlay de CDK y acordeon, DragDrop, DialogModule
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { DragDropModule } from "@angular/cdk/drag-drop";
// import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnComponent } from './components/btn/btn.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoardComponent } from './pages/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnComponent,
    BoardsComponent,
    NavbarComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    AppRoutingModule,
    CdkAccordionModule,
    DragDropModule,
    // MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
