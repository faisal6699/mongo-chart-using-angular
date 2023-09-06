import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './mongo-chart-dashboard/dashboard/dashboard.component';
import { SingleChartComponent } from './mongo-chart-singal-chart/single-chart/single-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SingleChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
