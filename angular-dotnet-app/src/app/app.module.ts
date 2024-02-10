import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { EventComponent } from './event/event.component';
import { DataService } from './data.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'data', component: DataComponent },
  { path: 'event', component: EventComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
