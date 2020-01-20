import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HttpModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
