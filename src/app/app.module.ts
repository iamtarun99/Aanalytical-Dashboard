import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgGridModule } from "ag-grid-angular";
import { HighchartsChartModule } from 'highcharts-angular';
import { GraphComponent } from './graph/graph.component';
import {MatDialogModule} from '@angular/material/dialog';
import { OverviewComponent } from './overview/overview.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    OverviewComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    HighchartsChartModule,
    MatDialogModule,
    NoopAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
