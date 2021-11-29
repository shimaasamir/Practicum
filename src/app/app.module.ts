import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exercise1InstructionsComponent } from './exercise1/exercise1-instructions.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise2InstructionsComponent } from './exercise2/exercise2-instructions.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { Exercise3InstructionsComponent } from './exercise3/exercise3-instructions.component';
import { Exercise3Component } from './exercise3/exercise3.component';
import { Exercise4InstructionsComponent } from './exercise4/exercise4-instructions.component';
import { Exercise4Component } from './exercise4/exercise4.component';
import { Exercise5InstructionsComponent } from './exercise5/exercise5-instructions.component';
import { Exercise5Component } from './exercise5/exercise5.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    Exercise2Component,
    Exercise3Component,
    Exercise4Component,
    Exercise5Component,
    Exercise1InstructionsComponent,
    Exercise2InstructionsComponent,
    Exercise3InstructionsComponent,
    Exercise4InstructionsComponent,
    Exercise5InstructionsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
