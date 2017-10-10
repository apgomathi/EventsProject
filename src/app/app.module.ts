import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventAppComponent } from './event-app.component';
import { NavBarComponent } from './nav/navbar.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EventAppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
