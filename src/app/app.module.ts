import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@progress/kendo-angular-gantt';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';

import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { DialogsModule } from "@progress/kendo-angular-dialog";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from "@progress/kendo-angular-inputs";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GanttModule,
    SchedulerModule,
    CommonModule,
    DialogsModule,
    ButtonsModule,
    InputsModule,
    FormsModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
