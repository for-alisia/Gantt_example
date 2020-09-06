import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

/** Components */
import { GanttComponent } from './components/gantt/gantt.component';

@NgModule({
  declarations: [AppComponent, GanttComponent],
  imports: [BrowserModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
